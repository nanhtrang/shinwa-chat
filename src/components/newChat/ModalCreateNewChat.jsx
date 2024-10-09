import { useEffect, useRef, useState } from "react"
import { Button, Form, InputGroup, Modal } from "react-bootstrap"
import "./style.css"
import SelectInput from "../common/SelectInput"
import Select, { components } from 'react-select';

const CheckboxOption = ({ option }) => {
  return (
    <>
      <div className="d-flex my-2">
        <input id={option} className="me-2" type="checkbox" />
        <label htmlFor={option}>{option}</label>
      </div>
    </>
  )
}

const MultiValueRemove = (props) => {
  return (
    <components.MultiValueRemove {...props}>
      <span>&times;</span>
    </components.MultiValueRemove>
  );
};

function ModalCreateNewChat({ show, setShow, createChat }) {
  const btnStartRef = useRef(null)
  const btnCancelRef = useRef(null)
  const [listCheckbox, setListCheckbox] = useState([
    ["技術連絡メモ", "業務連絡メ"],
    ["WMS", "TMS", "TS", "QS"],
    ["新規", "修正/改訂", "修正"]
  ])

  const [selectedOptions, setSelectedOptions] = useState([]);

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
            {listCheckbox.map((element, index) => (
              <div key={index} className="col-sm-4 d-flex justify-content-center">
                <div>
                  <div>
                    選択
                  </div>
                  {element.map((el, idex) => (
                    <CheckboxOption key={idex} option={el} />
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="row">
            <div className="d-flex align-items-center">
              <div className="me-2">
                グループ
              </div>
              <div>
               <SelectInput/>
              </div>
            </div>
          </div>
          <div className="row my-3">
            <div className="d-inline-flex justify-content-center">
              <Button ref={btnStartRef} className="mx-2" variant="primary" onClick={createChat}>
                チャットを開始
              </Button>
              <Button ref={btnCancelRef} className="mx-2" variant="secondary" onClick={() => { setShow(false) }}>
                キャンセル
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ModalCreateNewChat