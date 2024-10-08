import { useEffect, useRef, useState } from "react"
import { BsTable } from "react-icons/bs"
import { IoIosSend } from "react-icons/io"
import EditorModal from "./EditorModal"

const ChatWindowControl = ({ handleSend, text, setText, createInitTable }) => {
  const tbl1 = `<table style="border-collapse: collapse; width: 45.3231%;" border="1"><colgroup><col style="width: 17.5131%;"><col style="width: 11.98%;"><col style="width: 70.4364%;"></colgroup> <tbody> <tr> <td><strong>番号順</strong></td> <td style="text-align: center;"><strong>名前</strong></td> <td style="text-align: center;"><strong>住所</strong></td> </tr> <tr> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> </tr> <tr> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> </tr> </tbody> </table>`
  const tbl2 = `<table style="border-collapse: collapse; width: 45.2904%;" border="1"><colgroup><col style="width: 17.5347%;"><col style="width: 12.6622%;"><col style="width: 12.685%;"><col style="width: 57.1181%;"></colgroup> <tbody> <tr> <td><strong>番号順</strong></td> <td style="text-align: center;"><strong>名前</strong></td> <td style="text-align: center;"><strong>生年</strong></td> <td style="text-align: center;"><strong>住所</strong></td> </tr> <tr> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> </tr> <tr> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> </tr> </tbody> </table>`
  const tbl3 = `<table style="border-collapse: collapse; width: 47.4097%;" border="1"><colgroup><col style="width: 20.2322%;"><col style="width: 26.6998%;"><col style="width: 26.534%;"><col style="width: 26.534%;"></colgroup> <tbody> <tr> <td style="text-align: center;"><strong>名前</strong></td> <td style="text-align: center;"><strong>生年</strong></td> <td style="text-align: center;"><strong>住所</strong></td> <td style="text-align: center;"><strong>電話番号</strong></td> </tr> <tr> <td style="text-align: center;">&nbsp;</td> <td style="text-align: center;">&nbsp;</td> <td style="text-align: center;">&nbsp;</td> <td style="text-align: center;">0987654321</td> </tr> <tr> <td style="text-align: center;">&nbsp;</td> <td style="text-align: center;">&nbsp;</td> <td style="text-align: center;">&nbsp;</td> <td style="text-align: center;">0123456789</td> </tr> </tbody> </table>`
  const [table, setTable] = useState([
    { name: 'table1', content: tbl1 },
    { name: 'table2', content: tbl2 },
    { name: 'table3', content: tbl3 },
  ])

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
      <div className="d-flex align-items-center justify-content-center mt-auto pb-3 bg-white">
        <div className="d-flex align-items-center p-relative py-2" id="icon-tbl-container">
          <div className={`${table && table.length > 0 ? 'create-tbl-dropdown border rounded' : 'd-none'} `}>
            {table.map((el, index) => (
              <div key={index} className="px-3 py-1 option-tbl" onClick={() => {handleChooseTable(index)}} >{el.name}</div>
            ))}
          </div>
          <BsTable id="icon-tbl" className="c-pointer mx-2" size={20} />
        </div>
        <div className="input-text px-2">
          <input onKeyDown={handleKeydown} type="text" value={text} onChange={(e) => { handleInputChange(e) }} placeholder="aA" />
        </div>
        <div className="mx-2 d-flex align-items-center">
          <IoIosSend className="c-pointer" onClick={handleSend} color="#0d6efd" size={25} />
        </div>
        <div className="d-flex align-items-center">
          <div className="btn btn-primary">Generate</div>
        </div>
      </div>
    </>
  )
}

const ChatMessage = (props) => {
  const { type, text } = props
  return (
    <>
      <div className={`d-flex my-2 ${type}`}>
        <div className="chat-message p-2 px-3">
          {text}
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
  const [message, setMessage] = useState('');   // State to hold the current message
  const [chat, setChat] = useState([]);
  const [isUserTurn, setUserTurn] = useState(true)
  const chatBoxRef = useRef(null);
  const [showModalCreateTable, setShowModalCreateTable] = useState(false)
  const [initialText, setInitialText] = useState("")
  const handleSend = () => {
    console.log(message);
    setChat([...chat, {
      type: TURN.USER,
      text: message
    }])
    setMessage("")
    setUserTurn(true)
  }

  const handleSaveTable = (value) => {
    setInitialText(value)
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
          type: TURN.BOT,
          text: "bot rep here, this is a message from bot"
        }])

      }, 1000);
      setUserTurn(false)
    }
  }, [isUserTurn])
  return (
    <>
      <div className="pt-2 rounded bg-white flex-grow-1 mx-2 me-3 chat-window">
        <div className="d-flex flex-column h-100">
          <div className="chat-box scroll px-4 overflow-auto" ref={chatBoxRef}>
            {chat.map((item, index) => (
              <div key={index} className={`d-flex my-2 chat-message-container ${item.type}`}>
                <div className="chat-message p-2 px-3">
                  {item.text}
                </div>
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