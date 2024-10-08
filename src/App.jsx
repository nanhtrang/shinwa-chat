import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import Header from './components/common/Header'

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
