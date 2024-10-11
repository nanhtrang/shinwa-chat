import { Modal } from "antd"
import SampleFile from "../../assets/sampleFile/file-sample.pdf"
import "./style.css"

function PreviewModal({ show, setShow }) {


  return (
    <Modal
      title="プレビュー"
      open={show}
      onCancel={() => { setShow(false) }}
      cancelText="キャンセル"
      okText="保存"
      width={"70%"}
      centered
    >
      <div className="d-flex justify-content-center align-items-center">

        <object className="pdf"
          data={`${SampleFile}#sidebar=0&navpanes=0&scrollbar=0`}
          width="100%"
          height="600">
        </object>

      </div>
    </Modal>
  )
}

export default PreviewModal