import { IoArrowBack } from "react-icons/io5"
import { Link } from "react-router-dom"

function Toolbar() {
  return (
    <>
      <div className="mx-2" style={{ minWidth: "50px" }}>
        <div>
          <Link to='/' className="rounded p-2 ms-2 toolbar-icon">
            <IoArrowBack color="black" />
          </Link>
        </div>
      </div>
    </>
  )
}

export default Toolbar