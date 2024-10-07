import { Button } from "react-bootstrap"
import { IoArrowBack } from "react-icons/io5"

function Toolbar() {
  return (
    <>
      <div className="mx-2" style={{ minWidth: "50px" }}>
        <div>
          <div className="rounded p-2 ms-2 toolbar-icon active">
            <IoArrowBack />
          </div>

          {/* <div className="rounded p-2 ms-2 toolbar-icon">
            <IoArrowBack />
          </div> */}
        </div>
      </div>
    </>
  )
}

export default Toolbar