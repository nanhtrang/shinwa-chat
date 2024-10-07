import { useEffect, useRef, useState } from "react"
import { BsTable } from "react-icons/bs"
import { IoIosSend } from "react-icons/io"
import { json } from "react-router-dom"
import EditorModal from "./EditorModal"

const ChatWindowControl = ({ handleSend, text, setText, createTable }) => {

  const handleInputChange = (e) => {
    setText(e.target.value)
  }

  const handleKeydown = (e) => {
    if (e.code === 'Enter') {
      handleSend()
    }
  }
  return (
    <>
      <div className="d-flex align-items-center justify-content-center mt-auto pb-3 bg-white">
        <div className="mx-2 d-flex align-items-center">
          <BsTable className="c-pointer" onClick={createTable} size={20} />
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
    console.log(value);
    
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
              // <ChatMessage key={index} type={item.type} text={item.text} />
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
          <ChatWindowControl createTable={() => {setShowModalCreateTable(true)}} text={message} setText={setMessage} handleSend={handleSend} />
          <EditorModal show={showModalCreateTable} setShow={setShowModalCreateTable} richTextValue={handleSaveTable}/>
        </div>
      </div>
    </>
  )
}

export default ChatWindow