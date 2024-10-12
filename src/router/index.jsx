import {
  createBrowserRouter,
} from "react-router-dom";
import Chat from "../pages/chat/Chat";
import Test from "../pages/Test";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Chat/>,
  },
  {
    path: "/chat/:id",
    element: <Chat/>,
  },
  {
    path: "/test",
    element: <Test/>,
  },
]);


export default router