import { useEffect, useRef, useState } from "react"
import { BsTable } from "react-icons/bs"
import { IoIosSend } from "react-icons/io"
import EditorModal from "./EditorModal"
import { Button, Dropdown } from "antd"
import { LuFileInput } from "react-icons/lu"
import { MdOutlineDriveFileMove } from "react-icons/md"

const ChatWindowControl = ({ handleSend, text, setText, createInitTable }) => {
  const tbl1 = `<table style="border-collapse: collapse; width: 45.3231%;" border="1"><colgroup><col style="width: 17.5131%;"><col style="width: 11.98%;"><col style="width: 70.4364%;"></colgroup> <tbody> <tr> <td><strong>番号順</strong></td> <td style="text-align: center;"><strong>名前</strong></td> <td style="text-align: center;"><strong>住所</strong></td> </tr> <tr> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> </tr> <tr> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> </tr> </tbody> </table>`
  const tbl2 = `<table style="border-collapse: collapse; width: 45.2904%;" border="1"><colgroup><col style="width: 17.5347%;"><col style="width: 12.6622%;"><col style="width: 12.685%;"><col style="width: 57.1181%;"></colgroup> <tbody> <tr> <td><strong>番号順</strong></td> <td style="text-align: center;"><strong>名前</strong></td> <td style="text-align: center;"><strong>生年</strong></td> <td style="text-align: center;"><strong>住所</strong></td> </tr> <tr> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> </tr> <tr> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> </tr> </tbody> </table>`
  const tbl3 = `<table style="border-collapse: collapse; width: 47.4097%;" border="1"><colgroup><col style="width: 20.2322%;"><col style="width: 26.6998%;"><col style="width: 26.534%;"><col style="width: 26.534%;"></colgroup> <tbody> <tr> <td style="text-align: center;"><strong>名前</strong></td> <td style="text-align: center;"><strong>生年</strong></td> <td style="text-align: center;"><strong>住所</strong></td> <td style="text-align: center;"><strong>電話番号</strong></td> </tr> <tr> <td style="text-align: center;">&nbsp;</td> <td style="text-align: center;">&nbsp;</td> <td style="text-align: center;">&nbsp;</td> <td style="text-align: center;">0987654321</td> </tr> <tr> <td style="text-align: center;">&nbsp;</td> <td style="text-align: center;">&nbsp;</td> <td style="text-align: center;">&nbsp;</td> <td style="text-align: center;">0123456789</td> </tr> </tbody> </table>`
  const [table, setTable] = useState([
    { name: '表1', content: tbl1 },
    { name: '表2', content: tbl2 },
    { name: '表3', content: tbl3 },
    { name: 'テーブルを作成する', content: "" },
  ])

  const generateItems = () => {
    return table.map((el, index) => {
      return {
        key: index,
        label: (
          <div key={index} className="" onClick={() => { handleChooseTable(index) }} >{el.name}</div>
        ),
      }
    })
  }

  const handleInputChange = (e) => {
    setText(e.target.value)
  }

  const handleKeydown = (e) => {
    if (e.code === 'Enter') {
      handleSend()
    }
  }

  const handleChooseTable = (index) => {
    createInitTable(table[index].content)
  }
  return (
    <>
      <div className="control-box d-flex align-items-center justify-content-center mt-auto bg-white">
        <Dropdown
          menu={{
            items: generateItems(),
          }}
          placement="bottomLeft"
          className="me-2 d-flex align-items-center justify-content-center rounded-circle control-icon"
        >
          <div><BsTable id="icon-tbl" className="mx-2" size={14} /></div>
        </Dropdown>

        <div className="input-text px-2">
          <input onKeyDown={handleKeydown} type="text" value={text} onChange={(e) => { handleInputChange(e) }} placeholder="aA" />
        </div>
        <div className="mx-2 d-flex align-items-center c-pointer control-icon-right">
          <IoIosSend className="c-pointer" onClick={handleSend} color="#0d6efd" size={20} />
        </div>
        <div className="mx-2 d-flex align-items-center c-pointer control-icon-right">
          <MdOutlineDriveFileMove size={22} />
        </div>
      </div>
    </>
  )
}


function ChatWindow() {
  const TURN = {
    BOT: "type-bot",
    USER: "type-user",
  }
  const MESSAGE_TYPE = {
    TEXT: "TEXT",
    TABLE: "TABLE",
  }
  const [message, setMessage] = useState('');   // State to hold the current message
  const [chat, setChat] = useState([]);
  const [isUserTurn, setUserTurn] = useState(true)
  const chatBoxRef = useRef(null);
  const [showModalCreateTable, setShowModalCreateTable] = useState(false)
  const [initialText, setInitialText] = useState("")
  const handleSend = () => {
    console.log(message);
    setChat([...chat, {
      turn: TURN.USER,
      type: MESSAGE_TYPE.TEXT,
      text: message
    }])
    setMessage("")
    setUserTurn(true)
  }

  const handleSaveTable = (value) => {
    if (value.trim() === "") {
      setShowModalCreateTable(false)
      return
    }
    const regexPattern = /(<table style="border-collapse: collapse; width: )[\d\.]+\s*%/gi
    const newValue = value.replaceAll(regexPattern, '$1100%')
    setChat([...chat, {
      turn: TURN.USER,
      type: MESSAGE_TYPE.TABLE,
      text: newValue
    }])
    setShowModalCreateTable(false)
    setUserTurn(true)
  }

  const createInitTable = (value) => {
    setInitialText(value)
    setShowModalCreateTable(true)
  }

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTo({
        top: chatBoxRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [chat]);

  useEffect(() => {
    if (isUserTurn === true) {
      setTimeout(() => {
        setChat([...chat, {
          turn: TURN.BOT,
          type: MESSAGE_TYPE.TEXT,
          text: "bot rep here, this is a message from bot"
        }])

      }, 1000);
      setUserTurn(false)
    }
  }, [isUserTurn])
  return (
    <>
      <div className="pt-2 flex-grow-1 chat-window">
        <div className="d-flex flex-column h-100">
          <div className="chat-box scroll px-4 overflow-auto" ref={chatBoxRef}>
            {chat.map((item, index) => (
              <div key={index} className={`d-flex my-2 chat-message-container ${item.turn}`}>

                {item.type === MESSAGE_TYPE.TABLE && (
                  <div className="chat-message chat-message-with-table p-2 px-3">
                    <div className="w-100" dangerouslySetInnerHTML={{ __html: item.text }}></div>
                  </div>
                )}
                {item.type === MESSAGE_TYPE.TEXT && (
                  <div className="chat-message p-2 px-3">
                    {item.text}
                  </div>
                )}
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
          <ChatWindowControl text={message} setText={setMessage} handleSend={handleSend} createInitTable={createInitTable} />
          <EditorModal initialValue={initialText} show={showModalCreateTable} setShow={setShowModalCreateTable} richTextValue={handleSaveTable} />
        </div>
      </div>
    </>
  )
}

export default ChatWindow