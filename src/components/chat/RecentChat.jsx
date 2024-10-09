import { FaPlus } from "react-icons/fa6"
import { FiEdit } from "react-icons/fi"

function ChatRencentDetail(prop) {
  const { date, time, text, active } = prop
  return (
    <>
      <div className={`chat-recent-detail ${active ? 'active' : ''}`}>
        <div className="d-flex justify-content-between">
          <div className="date">
            {date}
          </div>
          <div className="time">
            {time}
          </div>
        </div>
        <div className="text-message py-1">
          {text}
        </div>
      </div>
    </>
  )
}

function RecentChat({createNewChat}) {
  const data = [
    { active: true, date: "2024/10/10", time: "3:20 PM", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta deserunt aperiam quos nam mollitia molestias facilis eveniet neque. Praesentium ducimus eius earum quaerat suscipit incidunt aut accusamus, consequuntur a laborum!" },
    { active: false, date: "2024/10/10", time: "3:20 PM", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta deserunt aperiam quos nam mollitia molestias facilis eveniet neque. Praesentium ducimus eius earum quaerat suscipit incidunt aut accusamus, consequuntur a laborum!" },
    { active: false, date: "2024/10/10", time: "3:20 PM", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta deserunt aperiam quos nam mollitia molestias facilis eveniet neque. Praesentium ducimus eius earum quaerat suscipit incidunt aut accusamus, consequuntur a laborum!" },
    { active: false, date: "2024/10/10", time: "3:20 PM", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta deserunt aperiam quos nam mollitia molestias facilis eveniet neque. Praesentium ducimus eius earum quaerat suscipit incidunt aut accusamus, consequuntur a laborum!" },
    { active: false, date: "2024/10/10", time: "3:20 PM", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta deserunt aperiam quos nam mollitia molestias facilis eveniet neque. Praesentium ducimus eius earum quaerat suscipit incidunt aut accusamus, consequuntur a laborum!" },
    { active: false, date: "2024/10/10", time: "3:20 PM", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta deserunt aperiam quos nam mollitia molestias facilis eveniet neque. Praesentium ducimus eius earum quaerat suscipit incidunt aut accusamus, consequuntur a laborum!" },
    { active: false, date: "2024/10/10", time: "3:20 PM", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta deserunt aperiam quos nam mollitia molestias facilis eveniet neque. Praesentium ducimus eius earum quaerat suscipit incidunt aut accusamus, consequuntur a laborum!" },
    { active: false, date: "2024/10/10", time: "3:20 PM", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta deserunt aperiam quos nam mollitia molestias facilis eveniet neque. Praesentium ducimus eius earum quaerat suscipit incidunt aut accusamus, consequuntur a laborum!" },
    { active: false, date: "2024/10/10", time: "3:20 PM", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta deserunt aperiam quos nam mollitia molestias facilis eveniet neque. Praesentium ducimus eius earum quaerat suscipit incidunt aut accusamus, consequuntur a laborum!" },
    { active: false, date: "2024/10/10", time: "3:20 PM", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta deserunt aperiam quos nam mollitia molestias facilis eveniet neque. Praesentium ducimus eius earum quaerat suscipit incidunt aut accusamus, consequuntur a laborum!" },
    { active: false, date: "2024/10/10", time: "3:20 PM", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta deserunt aperiam quos nam mollitia molestias facilis eveniet neque. Praesentium ducimus eius earum quaerat suscipit incidunt aut accusamus, consequuntur a laborum!" },
  ]

  return (
    <>
      <div className=" bg-white recent-chat">
        <div className="d-flex justify-content-between recent-chat-title">
          <div className="fw-bold recent-chat-title-text">
            最近のチャット
          </div>
          <div onClick={createNewChat} className="icon-create-new rounded px-1 d-flex justify-content-center align-items-center c-pointer">
            <FaPlus size={12} className="me-2"/> <span>新しい</span>
          </div>
        </div>
        <div className="scroll recent-chat-detail-container">
          {data.map((item, index) => (
            <div key={index}>
              <ChatRencentDetail date={item.date} text={item.text} time={item.time} active={item.active} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default RecentChat
