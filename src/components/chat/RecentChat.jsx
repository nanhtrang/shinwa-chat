function ChatRencentDetail(prop) {
  const { date, time, text, active } = prop
  return (
    <>
      <div className={`p-2 chat-recent-detail rounded mb-2 ${active ? 'active' : ''}`}>
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

function RecentChat() {
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
      <div className="rounded bg-white recent-chat mx-2">
        <div className="fs-4 fw-bold mx-2 mb-3 p-2">最近のチャット</div>
        <div className="scroll recent-chat-detail-container px-2">
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
