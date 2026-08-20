import { Link, Outlet, NavLink,Navigate } from "react-router-dom"
// import { useAuth } from '../hooks/useAuth';
import companyLogo from '../assets/images/companyLogo.png';
import '../assets/style.css';

function AdminLayout() {


    return <div className="d-flex flex-column min-vh-100">
        <header className="d-flex">
             <ul className="nav align-items-center w-100">
                            <li><a href="https://heart-to-hour.lovable.app/"><img src={companyLogo} alt="pmtrend" className="company-logo"/></a></li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/admin">管理頁面</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/admin/execution">執行專區</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/admin/marketing">企劃專區</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/admin/sales">業務/網紅專區</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/admin/finance">財務/人資專區</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/admin/newMember">新進員工訓練</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/admin/outsideLink">外部工具連結</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/admin/price">報價專區</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/admin/regulation">公司福利及規範</Link>
                            </li>
                            <li className="nav-item ms-auto">
                                <Link className="nav-link" to="/login">登入</Link>
                            </li>
                        </ul>
        </header>
        <main className="flex-grow-1">
            <Outlet />
        </main>
        <footer className="container-fluid bg-secondary py-8 rounded-top-5 mt-auto">
        <div className="container text-center">
          <ul className="list-unstyled d-flex justify-content-center mb-3 mt-3">
            <li className="me-5">
              <NavLink
                to="/"
                className="link-white lh-sm footer-link d-block fw-bold"
              >首頁
              </NavLink>
            </li>
            <li className="me-5">
              <NavLink
                to="/regulation"
                className="link-white lh-sm footer-link d-block fw-bold"
              >公司福利及規範
              </NavLink>
            </li>
            <li>
            <a className="link-white lh-sm footer-link d-block fw-bold" href="https://heart-to-hour.lovable.app/">打卡/請假系統</a>
            </li>
          </ul>
          <p className="text-white fs-10 fs-sm-9">
            &copy; All Rights Reserved.
          </p>
          <ul className="list-unstyled d-flex justify-content-center mb-3">
            <li className="me-5">
              <NavLink
                to="#"
                className="link-white lh-sm footer-link d-block fw-bold"
              >隱私權政策
              </NavLink>
            </li>
            <li>
              <NavLink
                to="#"
                className="link-white lh-sm footer-link d-block fw-bold"
              >使用者條款
              </NavLink>
            </li>
          </ul>
        </div>
      </footer>
    </div>
}
export default AdminLayout