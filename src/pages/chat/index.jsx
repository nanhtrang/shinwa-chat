import ChatWindow from "../../components/chat/ChatWindow"
import RecentChat from "../../components/chat/RecentChat"
import Toolbar from "../../components/chat/Toolbar"
import ChatApp from "./ChatApp"
import "./style.css"

function Chat() {
  return (
    <>
      <div className="d-flex my-3 chat-page">
        <Toolbar />
        <RecentChat />
        <ChatWindow />
        {/* <ChatApp/> */}
      </div>
    </>
  )
}

export default Chat