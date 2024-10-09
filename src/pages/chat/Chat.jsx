import { useState } from "react"
import ChatWindow from "../../components/chat/ChatWindow"
import RecentChat from "../../components/chat/RecentChat"
import Toolbar from "../../components/chat/Toolbar"
import "./style.css"
import ModalCreateNewChat from "../../components/newChat/ModalCreateNewChat"

function Chat() {
  const [showModalCreateChat, setShowModalCreateTable] = useState(false)
  const createNewChat = () => {
    
  }
  return (
    <>
      <div className="d-flex my-3 chat-page">
        {/* <Toolbar /> */}
        <RecentChat createNewChat={() => {setShowModalCreateTable(true)}} />
        <ChatWindow />
        <ModalCreateNewChat show={showModalCreateChat} setShow={setShowModalCreateTable} createChat={createNewChat} />
      </div>
    </>
  )
}

export default Chat