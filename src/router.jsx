import { createHashRouter } from "react-router-dom";
import Home from "./views/front/Home";
import Execution from "./views/front/Execution";
import SingleProduct from "./views/front/SingleProduct";
import Marketing from "./views/front/Marketing";
import Notfound from "./views/front/Notfound";
import FrontendLayout from "./layout/FrontendLayout";
import Sales from "./views/front/Sales";
import Finance from "./views/front/Finance";
import NewMember from "./views/front/NewMember";
import Login from "./views/Login";
import AdminLayout from "./layout/AdminLayout";
import AdminProduct from "./views/Admin/AdminProduct";
import AdminOrder from "./views/Admin/AdminOrder";
import ProtectedRoute from "./component/ProtectedRoute";
import Regulation from "./views/front/Regulation";



export const router= createHashRouter(
    [
        {
            path:"/",
            element:<FrontendLayout/>,
            children:[
                {
                    index:true,
                    element:<Home/>
                },
                {
                    path:"execution",
                    element:<Execution/>
                },
                // {
                //     path:"product/:id",
                //     element:<SingleProduct/>
                // },
                {
                    path:"marketing",
                    element:<Marketing/>
                },
                {
                    path:"sales",
                    element:<Sales/>
                },
                {
                    path:"finance",
                    element:<Finance/>
                },
                {
                    path:"newMember",
                    element:<NewMember/>
                },
                {
                    path:"regulation",
                    element:<Regulation/>
                },
                {
                    path:"login",
                    element:<Login/>
                }
            ]
        },
        {
            path:"admin",
            element:<ProtectedRoute><AdminLayout/></ProtectedRoute>,
            children:[
                {
                    path:"product",
                    element:<AdminProduct/>,
                },
                {
                    path:"order",
                    element:<AdminOrder/>
                }
            ]

        },
        {
            path:"*",
            element:<Notfound/>
        }
    ]);