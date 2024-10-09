import { IoChatbubble } from "react-icons/io5"

function Header() {
  return (
    <>
      <div className="p-2 px-3 bg-primary-1 text-white d-flex align-items-center shadow-bottom" style={{minHeight: "56px"}}>
        <div className="d-flex">
          <div className="me-2 d-flex align-items-center">
            <IoChatbubble size={22} />
          </div>
          <div className="d-flex align-items-center">
            TMC_社内文書生成AIチャットボット
          </div>
        </div>
      </div>
    </>
  )
}

export default Header