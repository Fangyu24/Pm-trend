import { Link, Outlet } from "react-router-dom"
import companyLogo from '../assets/images/companyLogo.png';
import '../assets/style.css';

function AdminLayout() {
    return <>
        <header>
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
                                <Link className="nav-link" to="/regulation">公司福利及規範</Link>
                            </li>
                            <li className="nav-item ms-auto">
                                <Link className="nav-link" to="/login">登入</Link>
                            </li>
                        </ul>
        </header>
        <main>
            <Outlet />
        </main>
        <footer></footer>
    </>
}
export default AdminLayout