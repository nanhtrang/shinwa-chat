import { useEffect, useState } from "react"
import ChatWindow from "../../components/chat/ChatWindow"
import RecentChat from "../../components/chat/RecentChat"
import "./style.css"
import ModalCreateNewChat from "../../components/newChat/ModalCreateNewChat"
import { Tour } from "antd"

function Chat() {
  const [showModalCreateChat, setShowModalCreateTable] = useState(false)
  const [showTour, setShowTour] = useState(() => {
    // Initialize showTour from localStorage, default to true if not set
    return JSON.parse(localStorage.getItem('showTour')) ?? true
  })
  const steps = [
    {
      title: "Welcome to Chat",
      description: "This is a chat application, take a tour to know more about it",
      target: () => document.querySelector(".header-box"),
    },
    {
      title: "Recent Chat",
      description: "This is a list of chat history",
      target: () => document.querySelector(".recent-chat"),
    },
    {
      title: "Create new chat",
      description: "Click on the button to create a new chat",
      target: () => document.querySelector(".icon-create-new"),
    },
    {
      title: "Create new or choose existing table",
      description: "Click on the button to create a new or choose existing table",
      target: () => document.querySelector(".ant-dropdown-trigger"),
    },
    {
      title: "Send message here",
      description: "Send file or text message here",
      target: () => document.querySelector(".send-box"),
    },
    {
      title: "Generate pdf file",
      description: "Click on the button to generate pdf file",
      target: () => document.querySelector(".icon-generate-file"),
    },
    {
      title: "Enjoy!",
      description: "You have completed the tour, enjoy the app!",
    },
  ]

  useEffect(() => {
    // Save showTour state to localStorage whenever it changes
    localStorage.setItem('showTour', JSON.stringify(showTour))
  }, [showTour])

  const createNewChat = () => {
    console.log("createNewChat here");
  }
  return (
    <>
      <div className="d-flex chat-page">
        <RecentChat createNewChat={() => {setShowModalCreateTable(true)}} />
        <ChatWindow />
        <ModalCreateNewChat show={showModalCreateChat} setShow={setShowModalCreateTable} createChat={createNewChat} />
        <Tour open={showTour} onClose={() => {setShowTour(false)}} steps={steps} />
      </div>
    </>
  )
}

export default Chat