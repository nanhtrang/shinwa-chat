import { useEffect, useState } from "react"
import "./style.css"
import { Checkbox, Input, Modal, Select } from "antd";


function ModalCreateNewChat({ show, setShow, createChat }) {
  const [listCheckbox, setListCheckbox] = useState([
    ["技術連絡メモ", "業務連絡メ"],
    ["WMS", "TMS", "TS", "QS"],
    ["新規", "修正/改訂", "修正"]
  ])

  const [options, setOptions] = useState([
    {
      label: 'China',
      value: 'china',
      emoji: '🇨🇳',
      desc: 'China (中国)',
    },
    {
      label: 'USA',
      value: 'usa',
      emoji: '🇺🇸',
      desc: 'USA (美国)',
    },
    {
      label: 'Japan',
      value: 'japan',
      emoji: '🇯🇵',
      desc: 'Japan (日本)',
    },
    {
      label: 'Korea',
      value: 'korea',
      emoji: '🇰🇷',
      desc: 'Korea (韩国)',
    },
  ]);

  const [selectedOptions, setSelectedOptions] = useState([]);

  const removeOption = (value) => {
    const tmp = [...options]
    let index = -1
    for (let i = 0; i < tmp.length; i++) {
      const el = tmp[i];
      if (el.value === value) {
        index = i
        break
      }

    }
    if (index !== -1) {
      tmp.splice(index, 1);
      setOptions([...tmp])
    }
  }

  useEffect(() => {
    if (show) {
      // btnCancelRef.current.style.width = `${btnStartRef.current.offsetWidth}px`
    }
  }, [show])
  return (
    <>
      <Modal
        title="新しいチャットを作成"
        open={show}
        onOk={createChat}
        onCancel={() => { setShow(false) }}
        okText="チャットを開始"
        cancelText="キャンセル"
      >
        <div className="row">
          {listCheckbox.map((element, index) => (
            <div key={index} className="col-sm-4 d-flex justify-content-center">
              <div>
                <div>
                  選択
                </div>
                <div>
                  {element.map((el, idex) => (
                    <div key={idex}>
                      <Checkbox >{el}</Checkbox>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row mt-4">
          <div className="d-flex align-items-center justify-content-center">
            <div className="me-2">
              グループ
            </div>
            <div style={{ width: "60%" }}>
              <Select
                defaultValue="lucy"
                style={{ width: "100%" }}
                // onChange={handleChange}
                options={[
                  { value: 'jack', label: 'Jack' },
                  { value: 'lucy', label: 'Lucy' },
                  { value: 'Yiminghe', label: 'yiminghe' },
                ]}
              />
            </div>
          </div>
        </div>
        <div className="row my-4">
          <div className="d-flex align-items-center justify-content-center">
            <div className="me-2">
              参考技連
            </div>
            <div style={{ width: "60%" }}>
              <Input />
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default ModalCreateNewChat