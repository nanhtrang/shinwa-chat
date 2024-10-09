import { IoChatbubble } from "react-icons/io5"
import Logo from "../../assets/icon/logo.svg"

function Header() {
  return (
    <>
      <div className="text-white d-flex align-items-center bg-white header-box" style={{minHeight: "73px"}}>
        <div className="d-flex">
          <div className="me-2 mx-2 d-flex align-items-center logo-box">
            <img src={Logo} width={43} alt="" />
          </div>
          <div className="d-flex align-items-center text-black-light fw-bold">
            TMC_社内文書生成AIチャットボット
          </div>
        </div>
      </div>
    </>
  )
}

export default Header