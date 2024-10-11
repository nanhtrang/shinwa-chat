import { Editor } from "@tinymce/tinymce-react";
import { Modal, Spin } from "antd";
import { useEffect, useRef, useState } from "react";
import { Loading3QuartersOutlined, LoadingOutlined } from '@ant-design/icons';

// import "./ja.js"

function EditorModal({ show, setShow, richTextValue, initialValue }) {
  const editorRef = useRef(null);
  const apiKey = import.meta.env.VITE_TINYMCE_KEY;
  const lang = import.meta.env.VITE_TINYMCE_LANG;
  const [loading, setLoading] = useState(true)

  const saveChange = () => {
    if (editorRef.current) {
      richTextValue(editorRef.current.getContent())
    }
  }

  const handleEditorInit = (evt, editor) => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  return (
    <>
      <Modal

        title="テーブルを作成する"
        open={show}
        onOk={saveChange}
        onCancel={() => { setShow(false) }}
        cancelText="キャンセル"
        width={"60%"}
      >
        <Spin
          className="spin"
          spinning={loading}
          indicator={<Loading3QuartersOutlined style={{ fontSize: "48px" }} spin />}
          size="48" >
          <Editor
            apiKey={apiKey}
            onInit={handleEditorInit}
            initialValue={initialValue}
            init={{
              height: 470,
              language: lang,
              menubar: false,
              plugins: 'preview code codesample  importcss searchreplace autosave save directionality fullscreen table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons accordion',
              toolbar: "undo redo code | table fullscreen preview | fontfamily fontsize | bold italic underline strikethrough forecolor | align  ",
              content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
            }}
          />

        </Spin>
      </Modal>
    </>
  )
}

export default EditorModal