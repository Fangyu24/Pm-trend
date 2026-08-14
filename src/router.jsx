import { createHashRouter} from "react-router-dom";
import Home from "./views/front/Home";
import Execution from "./views/front/Execution";
import Marketing from "./views/front/Marketing";
import Notfound from "./views/front/Notfound";
import FrontendLayout from "./layout/FrontendLayout";
import Sales from "./views/front/Sales";
import Finance from "./views/front/Finance";
import NewMember from "./views/front/NewMember";
import Login from "./views/Login";
import AdminLayout from "./layout/AdminLayout";
import AdminProduct from "./views/Admin/AdminProduct";
import ProtectedRoute from "./component/ProtectedRoute";
import Regulation from "./views/front/Regulation";
import AdminExecution from './views/Admin/AdminExecution';
import AdminMarketing from "./views/Admin/AdminMarketing";
import AdminFinance from "./views/Admin/AdminFinance";
import AdminSales from "./views/Admin/AdminSales";
import AdminNewmember from "./views/Admin/AdminNewmember";
import AdminHome from "./views/Admin/AdminHome";


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
            path: "admin",
            element: (
            //   <ProtectedRoute>
                <AdminLayout />
            //   </ProtectedRoute>
            ),
            children: [
              // 設定進入 /admin 時預設顯示的頁面（也可以用 Navigate 重導向）
              {
                index: true,
                element: <AdminHome/>,
              },
              {
                path: "product",
                element: <AdminProduct />,
              },
              {
                path: "execution",
                element: <AdminExecution />,
              },
              {
                path: "finance",
                element: <AdminFinance />,
              },
              {
                path: "marketing",
                element: <AdminMarketing />,
              },
              {
                path: "sales",
                element: <AdminSales />,
              },
              {
                path: "newmember",
                element: <AdminNewmember />,
              },
            ],
          },
        {
            path:"*",
            element:<Notfound/>
        }
    ]);