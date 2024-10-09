import { useEffect, useRef } from "react"
import { Button, Form, InputGroup, Modal } from "react-bootstrap"
import "./style.css"

function ModalCreateNewChat({ show, setShow, createChat }) {
  const btnStartRef = useRef(null)
  const btnCancelRef = useRef(null)
  useEffect(() => {
    if (show) {
      btnCancelRef.current.style.width = `${btnStartRef.current.offsetWidth}px`
    }
  }, [show])
  return (
    <>
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>新しいチャットを作成</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-sm-4 d-flex justify-content-center">
              <div>
                <div>
                  選択
                </div>
                <div>
                  <div className="d-flex align-items-center">
                    <input id="checkbox" type="checkbox" />
                    <label for="checkbox" >技術連絡メモ</label>
                  </div>
                </div>
                <div>
                  <div className="d-flex align-items-center">
                    <input type="checkbox" />
                    <label>技術連絡メモ</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4 d-flex justify-content-center">
            <div>
                <div>
                  選択
                </div>
                <div>
                  <div className="d-flex align-items-center">
                    <input type="checkbox" />
                    <label>技術連絡メモ</label>
                  </div>
                </div>
                <div>
                  <div className="d-flex align-items-center">
                    <input type="checkbox" />
                    <label>技術連絡メモ</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4 d-flex justify-content-center">
            <div>
                <div>
                  選択
                </div>
                <div>
                  <div className="d-flex align-items-center">
                    <input type="checkbox" />
                    <label>技術連絡メモ</label>
                  </div>
                </div>
                <div>
                  <div className="d-flex align-items-center">
                    <input type="checkbox" />
                    <label>技術連絡メモ</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row my-5">
            <div className="d-inline-flex justify-content-center">
              <Button ref={btnCancelRef} className="mx-2" variant="secondary" onClick={() => { setShow(false) }}>
                キャンセル
              </Button>
              <Button ref={btnStartRef} className="mx-2" variant="primary" onClick={createChat}>
                チャットを開始
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ModalCreateNewChat