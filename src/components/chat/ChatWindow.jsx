import { useEffect, useRef, useState } from "react";
import EditorModal from "./EditorModal";
import { Avatar, Popover, Spin } from "antd";
import PreviewModal from "../preview/PreviewModal";
import ReactSvg from "../../assets/react.svg";
import ChatWindowControl from "../chatUtils/ChatWindowControl";
import {
  FileZipOutlined,
  Loading3QuartersOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import SelectUtil from "../chatUtils/SelectUtil";

function ChatWindow() {
  const TURN = {
    BOT: "type-bot",
    USER: "type-user",
  };
  const MESSAGE_TYPE = {
    TEXT: "TEXT",
    TABLE: "TABLE",
    FILE: "FILE",
  };
  const [message, setMessage] = useState(""); // State to hold the current message
  const [chat, setChat] = useState([]);
  const [isUserTurn, setUserTurn] = useState(true);
  const chatBoxRef = useRef(null);
  const [showModalCreateTable, setShowModalCreateTable] = useState(false);
  const [initialText, setInitialText] = useState("");
  const [showModalPreview, setShowModalPreview] = useState(false);
  const [isGeneratingFile, setIsGeneratingFile] = useState(false);
  const [files, setFiles] = useState([])

  const handleSend = () => {
    if (message.trim() === "" && files.length === 0) {
      return;
    }

    const newMessages = [];

    for (const file of files) {
      newMessages.push({
        turn: TURN.USER,
        type: MESSAGE_TYPE.FILE,
        file: file,
      });
    }

    if (message.trim() !== "") {
      newMessages.push({
        turn: TURN.USER,
        type: MESSAGE_TYPE.TEXT,
        text: message,
      });
    }
    setChat([...chat, ...newMessages]);
    setMessage("");
    setFiles([])
    setUserTurn(true);
  };

  const handleSaveTable = (value) => {
    if (value.trim() === "") {
      setShowModalCreateTable(false);
      return;
    }
    const regexPattern =
      /(<table style="border-collapse: collapse; width: )[\d\.]+\s*%/gi;
    const newValue = value.replaceAll(regexPattern, "$1100%");
    setChat([
      ...chat,
      {
        turn: TURN.USER,
        type: MESSAGE_TYPE.TABLE,
        text: newValue,
      },
    ]);
    setShowModalCreateTable(false);
    setUserTurn(true);
  };

  const createInitTable = (value) => {
    setInitialText(value);
    setShowModalCreateTable(true);
  };

  const generateFile = () => {
    setIsGeneratingFile(true);
    setTimeout(() => {
      setShowModalPreview(true);
      setIsGeneratingFile(false);
    }, 2000);
  };

  const createTooltip = (text) => {
    return (
      <div className="p-2 px-3 overflow-auto" style={{ maxHeight: "400px" }}>
        <div>
          <img width={"100%"} src={ReactSvg} alt="react" />
        </div>
        <div>{text}</div>
      </div>
    );
  };

  const isShowAvatar = (chat, index, turn) => {
    if (chat[index + 1] && chat[index + 1].turn === turn) {
      return false;
    } else {
      return true;
    }
  };

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTo({
        top: chatBoxRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [chat]);

  function formatBytes(bytes, decimals = 2) {
    if (!+bytes) return "0 Bytes";

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = [
      "Bytes",
      "KiB",
      "MiB",
      "GiB",
      "TiB",
      "PiB",
      "EiB",
      "ZiB",
      "YiB",
    ];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
  }

  useEffect(() => {
    if (isUserTurn === true) {
      setTimeout(() => {
        setChat([
          ...chat,
          {
            turn: TURN.BOT,
            type: MESSAGE_TYPE.TEXT,
            text: "bot rep here, this is a message from bot",
            tooltip: createTooltip("bot rep here, this is a message from bot"),
          },
          {
            turn: TURN.BOT,
            type: MESSAGE_TYPE.TEXT,
            text: "bot rep here, this is a message from bot",
            tooltip: createTooltip("bot rep here, this is a message from bot"),
          },
          {
            turn: TURN.BOT,
            type: MESSAGE_TYPE.TEXT,
            text: (<SelectUtil />),
          },
        ]);
      }, 1000);
      setUserTurn(false);
    }
  }, [isUserTurn]);
  return (
    <>
      <div className="pt-2 flex-grow-1 chat-window">
        <Spin
          spinning={isGeneratingFile}
          className="spin"
          size="large"
          fullscreen
          indicator={
            <Loading3QuartersOutlined style={{ fontSize: "48px" }} spin />
          }
        />
        <div className="d-flex flex-column h-100">
          <div className="chat-box scroll px-4 overflow-auto" ref={chatBoxRef}>
            {chat.map((item, index) => (
              <div
                key={index}
                className={`d-flex my-2 chat-message-container align-items-center ${item.turn}`}
              >
                <Avatar
                  className={`me-2 bot-avt ${
                    item.turn === TURN.BOT &&
                    isShowAvatar(chat, index, item.turn)
                      ? ""
                      : "invisible"
                  }`}
                  icon={<SettingOutlined />}
                />
                {item.type === MESSAGE_TYPE.TABLE && (
                  <div className="chat-message chat-message-with-table p-2 px-3">
                    <div
                      className="w-100"
                      dangerouslySetInnerHTML={{ __html: item.text }}
                    ></div>
                  </div>
                )}
                {item.type === MESSAGE_TYPE.FILE && (
                  <div className="chat-message chat-message-file p-1 c-pointer">
                    <div className="d-flex align-items-start">
                      <div
                        className="rounded chat-message-file-icon me-2 p-1 d-flex align-items-center justify-content-center"
                        style={{ width: "53.5px", height: "53.5px" }}
                      >
                        <FileZipOutlined style={{ fontSize: "16px" }} />
                      </div>
                      <div className="p-2">
                        <div className="fw-bold">{item.file.name}</div>
                        <div style={{fontSize: 11}}>{formatBytes(item.file.size)}</div>
                      </div>
                    </div>
                  </div>
                )}
                {item.type === MESSAGE_TYPE.TEXT && item.tooltip && (
                  <Popover
                    title="プレビュー"
                    content={item.tooltip}
                    trigger="hover"
                  >
                    <div className="chat-message p-2 px-3">{item.text}</div>
                  </Popover>
                )}
                {item.type === MESSAGE_TYPE.TEXT && !item.tooltip && (
                  <div className="chat-message p-2 px-3">{item.text}</div>
                )}
                <Avatar
                  className={`ms-2 bot-user ${
                    item.turn === TURN.USER &&
                    isShowAvatar(chat, index, item.turn)
                      ? ""
                      : "invisible"
                  }`}
                  icon={<UserOutlined />}
                />
              </div>
            ))}

            {/* <div className="mt-auto">
              <div class="typing">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div> */}
          </div>
          <ChatWindowControl
            text={message}
            setText={setMessage}
            handleSend={handleSend}
            createInitTable={createInitTable}
            generateFile={generateFile}
            files={files}
            setFiles={setFiles}
          />
          <EditorModal
            initialValue={initialText}
            show={showModalCreateTable}
            setShow={setShowModalCreateTable}
            richTextValue={handleSaveTable}
          />
          <PreviewModal show={showModalPreview} setShow={setShowModalPreview} />
        </div>
      </div>
    </>
  );
}

export default ChatWindow;
