import { createHashRouter, Navigate } from "react-router-dom";
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
import OutsideLink from "./views/front/OutsideLink";
import Price from "./views/front/Price";
import AdminOutsideLink from "./views/Admin/AdminOutsideLink";
import AdminPrice from "./views/Admin/AdminPrice";
import AdminRegulation from "./views/Admin/AdminRegulation";


export const router = createHashRouter(
  [
    {
      path: "/",
      element: <FrontendLayout />,
      children: [
        {
          index: true,
          element: <Navigate to="login" replace /> 
        },
        {
          path: "login",
          element: <Login />
        },
        {
          element:<ProtectedRoute />,
          children: [
            {
              path: "home", 
              element: <Home />
            },
            {
              path: "execution",
              element: <Execution />
            },
            {
              path: "marketing",
              element: <Marketing />
            },
            {
              path: "sales",
              element: <Sales />
            },
            {
              path: "finance",
              element: <Finance />
            },
            {
              path: "newMember",
              element: <NewMember />
            },
            {
              path: "outsideLink",
              element: <OutsideLink />
            },
            {
              path: "price",
              element: <Price/>
            },
            {
              path: "regulation",
              element: <Regulation />
            }
          ]
        }
      ]
    },
    {
      path: "admin",
      element: (
        <ProtectedRoute requireAdmin={true}>
          <AdminLayout />
        </ProtectedRoute>
      ),
      children: [
        {
          index: true,
          element: <AdminHome />,
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
          path: "outsideLink",
          element: <AdminOutsideLink />,
        },
        {
          path: "price",
          element: <AdminPrice />,
        },
        {
          path: "newmember",
          element: <AdminNewmember />,
        },
        {
          path: "regulation",
          element: <AdminRegulation />,
        }
      ],
    },
    {
      path: "*",
      element: <Notfound />
    }
  ]);