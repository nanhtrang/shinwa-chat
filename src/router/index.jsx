import {
  createBrowserRouter,
} from "react-router-dom";
import Chat from "../pages/chat/Chat";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Chat/>,
  },
  {
    path: "/chat/:id",
    element: <Chat/>,
  },
]);


export default router