import {
  createBrowserRouter,
} from "react-router-dom";
import Chat from "../pages/chat";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Chat/>,
  },
]);


export default router