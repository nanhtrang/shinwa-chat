import { Dropdown } from "antd";
import { BsTable } from "react-icons/bs";
import { IoIosAttach, IoIosSend } from "react-icons/io";
import FileItem from "./FileItem";
import { MdOutlineDriveFileMove } from "react-icons/md";
import { useRef, useState } from "react";

const ChatWindowControl = ({
  handleSend,
  text,
  setText,
  createInitTable,
  generateFile,
  files,
  setFiles,
}) => {
  const tbl1 = `<table style="border-collapse: collapse; width: 45.3231%;" border="1"><colgroup><col style="width: 17.5131%;"><col style="width: 11.98%;"><col style="width: 70.4364%;"></colgroup> <tbody> <tr> <td><strong>番号順</strong></td> <td style="text-align: center;"><strong>名前</strong></td> <td style="text-align: center;"><strong>住所</strong></td> </tr> <tr> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> </tr> <tr> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> </tr> </tbody> </table>`;
  const tbl2 = `<table style="border-collapse: collapse; width: 45.2904%;" border="1"><colgroup><col style="width: 17.5347%;"><col style="width: 12.6622%;"><col style="width: 12.685%;"><col style="width: 57.1181%;"></colgroup> <tbody> <tr> <td><strong>番号順</strong></td> <td style="text-align: center;"><strong>名前</strong></td> <td style="text-align: center;"><strong>生年</strong></td> <td style="text-align: center;"><strong>住所</strong></td> </tr> <tr> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> </tr> <tr> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> </tr> </tbody> </table>`;
  const tbl3 = `<table style="border-collapse: collapse; width: 47.4097%;" border="1"><colgroup><col style="width: 20.2322%;"><col style="width: 26.6998%;"><col style="width: 26.534%;"><col style="width: 26.534%;"></colgroup> <tbody> <tr> <td style="text-align: center;"><strong>名前</strong></td> <td style="text-align: center;"><strong>生年</strong></td> <td style="text-align: center;"><strong>住所</strong></td> <td style="text-align: center;"><strong>電話番号</strong></td> </tr> <tr> <td style="text-align: center;">&nbsp;</td> <td style="text-align: center;">&nbsp;</td> <td style="text-align: center;">&nbsp;</td> <td style="text-align: center;">0987654321</td> </tr> <tr> <td style="text-align: center;">&nbsp;</td> <td style="text-align: center;">&nbsp;</td> <td style="text-align: center;">&nbsp;</td> <td style="text-align: center;">0123456789</td> </tr> </tbody> </table>`;
  const [table, setTable] = useState([
    { name: "表1", content: tbl1 },
    { name: "表2", content: tbl2 },
    { name: "表3", content: tbl3 },
    { name: "テーブルを作成する", content: "" },
  ]);

  const generateItems = () => {
    return table.map((el, index) => {
      return {
        key: index,
        label: (
          <div
            key={index}
            className="w-100 py-2 px-3"
            onClick={() => {
              handleChooseTable(index);
            }}
          >
            {el.name}
          </div>
        ),
      };
    });
  };

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleKeydown = (e) => {
    if (e.code === "Enter") {
      handleSend(files);
    }
  };

  const handleChooseTable = (index) => {
    createInitTable(table[index].content);
  };

  const openFileUpload = () => {
    document.getElementById("file-upload").click();
  };

  const handleFileUpload = (e) => {
    setFiles([...e.target.files]);
  };

  const handleRemoveFile = (key) => {
    setFiles(files.filter((_, index) => index !== key));
  };

  const preventDefault = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    preventDefault(e);

    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles([...files, ...droppedFiles]);
  };

  return (
    <>
      <div className="control-box d-flex align-items-center justify-content-center mt-auto bg-white">
        <Dropdown
          menu={{
            items: generateItems(),
          }}
          placement="top"
          className="me-2 d-flex align-items-center justify-content-center rounded-circle control-icon p-0"
        >
          <div>
            <BsTable id="icon-tbl" className="mx-2" size={14} />
          </div>
        </Dropdown>

        <div className="d-flex align-items-center justify-content-center send-box">
          <div
            onClick={openFileUpload}
            className="me-2 icon-upload d-flex align-items-center justify-content-center rounded-circle control-icon"
          >
            <IoIosAttach id="icon-tbl" className="mx-2" size={16} />
          </div>

          <div
            className="input-text px-2"
            onDragEnter={preventDefault}
            onDragLeave={preventDefault}
            onDragOver={preventDefault}
            onDrop={handleDrop}
            onKeyDown={handleKeydown}
          >
            <div className="drag-drop-file d-flex gap-2 overflow-auto scroll pt-1">
              {files &&
                files.length > 0 &&
                files.map((file, index) => (
                  <FileItem
                    key={index}
                    index={index}
                    file={file}
                    remove={handleRemoveFile}
                  />
                ))}
            </div>
            <input
              id="file-upload"
              type="file"
              className="d-none"
              multiple
              accept=".pdf"
              onChange={handleFileUpload}
            />
            <input
              type="text"
              value={text}
              onChange={(e) => {
                handleInputChange(e);
              }}
              placeholder="aA"
            />
          </div>
          <div className="mx-2 d-flex align-items-center c-pointer control-icon-right icon-send">
            <IoIosSend
              className="c-pointer"
              onClick={() => handleSend(files)}
              color="#0d6efd"
              size={20}
            />
          </div>
        </div>

        <div className="mx-2 d-flex align-items-center c-pointer control-icon-right icon-generate-file">
          <MdOutlineDriveFileMove size={22} onClick={generateFile} />
        </div>
      </div>
    </>
  );
};

export default ChatWindowControl;
