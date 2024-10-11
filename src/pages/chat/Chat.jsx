import { useState } from "react"
import ChatWindow from "../../components/chat/ChatWindow"
import RecentChat from "../../components/chat/RecentChat"
import "./style.css"
import ModalCreateNewChat from "../../components/newChat/ModalCreateNewChat"

function Chat() {
  const [showModalCreateChat, setShowModalCreateTable] = useState(false)
  const createNewChat = () => {
    console.log("createNewChat here");
  }
  return (
    <>
      <div className="d-flex chat-page">
        <RecentChat createNewChat={() => {setShowModalCreateTable(true)}} />
        <ChatWindow />
        <ModalCreateNewChat show={showModalCreateChat} setShow={setShowModalCreateTable} createChat={createNewChat} />
      </div>
    </>
  )
}

export default Chat