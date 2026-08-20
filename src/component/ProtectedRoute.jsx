import { Navigate, Outlet } from "react-router";
import { RotatingSquare } from "react-loader-spinner";
import { useAuth } from "../hooks/useAuth"; // 👈 從原本的 hook 引入

function ProtectedRoute({ children, requireAdmin = false }) {
  const { user, isAdmin, loading } = useAuth(); // 👈 完美搭配原本的變數名稱！

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <RotatingSquare visible={true} height="100" width="100" color="#004e7a" />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (requireAdmin && !isAdmin) {
    alert("恭喜登入！");
    return <Navigate to="/home" replace />;
  }

  // 💡 如果有傳入 children（後台包法）就渲染 children；若沒有（前台嵌套包法）就渲染 Outlet
  return children ? children : <Outlet />;
}

export default ProtectedRoute;