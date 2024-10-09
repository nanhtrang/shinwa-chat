import { Editor } from "@tinymce/tinymce-react";
import { Modal } from "antd";
import { useRef } from "react";
// import "./ja.js"

function EditorModal({ show, setShow, richTextValue, initialValue }) {
  const editorRef = useRef(null);
  const apiKey = import.meta.env.VITE_TINYMCE_KEY;
  const lang = import.meta.env.VITE_TINYMCE_LANG;

  const saveChange = () => {
    if (editorRef.current) {
      richTextValue(editorRef.current.getContent())
    }
  }
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
        <Editor
          apiKey={apiKey}
          onInit={(_evt, editor) => editorRef.current = editor}
          initialValue={initialValue}
          init={{
            height: 470,
            language: lang,
            menubar: false,
            plugins: 'preview code codesample  importcss searchreplace autosave save directionality fullscreen table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons accordion',
            toolbar: "undo redo code | table fullscreen preview | fontfamily fontsize | bold italic underline strikethrough forecolor | align  ",
            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
          }}
        />
      </Modal>
    </>
  )
}

export default EditorModal