import { FileZipOutlined } from "@ant-design/icons"
import { LiaTimesSolid } from "react-icons/lia"

const FileItem = ({ file, index, remove }) => {
  return (
    <div className="d-flex align-items-center justify-content-between file-item" style={{ maxWidth: "150px" }}>
      <FileZipOutlined/>
      <div className=" ms-1 file-item-name">{file.name}</div>
      <LiaTimesSolid className="c-pointer file-item-remove" onClick={() => remove(index)}/>
    </div>
  )
}

export default FileItem