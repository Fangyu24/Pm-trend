import { router } from "./router"
import "./assets/style.css";
import { RouterProvider } from "react-router-dom"
import MessageToast from "./component/MessageToast";

function App(){
return(
    <>
    <MessageToast/>
    <RouterProvider router={router}/>
    </>
)
}

export default App