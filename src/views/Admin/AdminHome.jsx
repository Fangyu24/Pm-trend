import { Link, Outlet } from "react-router-dom"

function AdminHome(){
    return (<div className="container ">
            <h2 className="m-5">首頁</h2>
            <div className="row m-5">
                <div className="col-4 p-5" >
                <Link className="link" to="/admin/execution">
                    <h3>執行專區</h3>
                </Link>
                </div>
                <div className="col-4 p-5">
                    <Link className="link" to="/admin/marketing">
                    <h3>企劃專區</h3>
                    </Link>
                </div>
                <div className="col-4 p-5">
                <Link className="link" to="/admin/sales">
                <h3>業務/網紅專區</h3>
                </Link>
                </div>
                <div className="col-4 p-5">
                <Link className="link" to="/admin/finance">
                    <h3>財務/人資專區</h3>
                    </Link>
                </div>
                <div className="col-4 p-5">
                <Link className="link" to="/admin/newMember">
                    <h3>新進員工訓練</h3>
                    </Link>
                </div>
                <div className="col-4 p-5">
                <Link className="link" to="/regulation">
                <h3>公司福利及規範</h3>
                </Link>
                </div>
                

            </div>
        </div>);
    }
export default AdminHome