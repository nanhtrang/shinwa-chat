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
      title: "チャットへようこそ",
      description: "これはチャットアプリケーションです。ツアーに参加して詳細を確認してください。",
      target: () => document.querySelector(".header-box"),
      nextButtonProps: {
        children: '次',
      },
    },
    {
      title: "最近のチャット",
      description: "これはチャット履歴のリストです",
      target: () => document.querySelector(".recent-chat"),
      nextButtonProps: {
        children: '次',
      },
      prevButtonProps: {
        children: '戻る',
      },
    },
    {
      title: "新しいチャットを作成",
      description: "新しいチャットを作成するにはこのボタンをクリックしてください",
      target: () => document.querySelector(".icon-create-new"),
      nextButtonProps: {
        children: '次',
      },
      prevButtonProps: {
        children: '戻る',
      },
    },
    {
      title: "新しいテーブルを作成するか、既存のテーブルを選択してください",
      description: "このボタンをクリックして新しいテーブルを作成するか、既存のテーブルを選択してください",
      target: () => document.querySelector(".ant-dropdown-trigger"),
      nextButtonProps: {
        children: '次',
      },
      prevButtonProps: {
        children: '戻る',
      },
    },
    {
      title: "ここにメッセージを送信",
      description: "ここにメッセージを送信",
      target: () => document.querySelector(".send-box"),
      nextButtonProps: {
        children: '次',
      },
      prevButtonProps: {
        children: '戻る',
      },
    },
    {
      title: "PDFファイルを生成",
      description: "このボタンをクリックしてPDFファイルを生成します",
      target: () => document.querySelector(".icon-generate-file"),
      nextButtonProps: {
        children: '次',
      },
      prevButtonProps: {
        children: '戻る',
      },
    },
    {
      title: "楽しむ!",
      description: "ツアーは完了です。アプリをお楽しみください!",
      nextButtonProps: {
        children: '完全なツアー',
      },
      prevButtonProps: {
        children: '戻る',
      },
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
        <RecentChat createNewChat={() => { setShowModalCreateTable(true) }} />
        <ChatWindow />
        <ModalCreateNewChat show={showModalCreateChat} setShow={setShowModalCreateTable} createChat={createNewChat} />
        <Tour open={showTour} onClose={() => { setShowTour(false) }} steps={steps}/>
      </div>
    </>
  )
}

export default Chat