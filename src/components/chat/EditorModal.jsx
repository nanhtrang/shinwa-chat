import { Editor } from "@tinymce/tinymce-react";
import { useRef } from "react";
import { Button, Modal } from "react-bootstrap";
// import "./ja.js"

function EditorModal({show, setShow, richTextValue}) {
  const editorRef = useRef(null);
  const apiKey = import.meta.env.VITE_TINYMCE_KEY;
  const lang = import.meta.env.VITE_TINYMCE_LANG;
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  const saveChange = () => {
    if (editorRef.current) {
      richTextValue(editorRef.current.getContent())
    }
  }
  return (
    <>
      <Modal show={show}>
        <Modal.Header closeButton>
          <Modal.Title>テーブルを作成する</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Editor
            apiKey={apiKey}
            onInit={(_evt, editor) => editorRef.current = editor}
            initialValue=""
            init={{
              height: 470,
              language: { lang },
              menubar: false,
              plugins: 'preview importcss searchreplace autosave save directionality fullscreen table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons accordion',
              toolbar: "undo redo | table fullscreen preview | fontfamily fontsize | bold italic underline strikethrough forecolor | align  ",
              content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
            }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => {setShow(false)}}>
            Close
          </Button>
          <Button variant="primary" onClick={saveChange}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default EditorModal