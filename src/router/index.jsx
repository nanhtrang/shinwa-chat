import {
  createBrowserRouter,
} from "react-router-dom";
import Chat from "../pages/chat/Chat";
import Home from "../pages/home/Home";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/chat",
    element: <Chat/>,
  },
]);


export default router