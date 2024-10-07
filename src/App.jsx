import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import Header from './components/common/Header'
import EditorModal from './components/chat/EditorModal'

function App() {

  return (
    <>
      <Header />
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
