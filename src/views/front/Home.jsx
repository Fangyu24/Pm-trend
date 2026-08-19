import { Link } from "react-router-dom"

function Home() {
    return (<div className="container">
        <h2 className="m-5 ">首頁</h2>
        <div className="row m-5">
            <div className="col-4 p-5" >
                <Link className="link" to="/execution">
                    <h3 className="text-primary-hover">執行專區</h3>
                </Link>
            </div>
            <div className="col-4 p-5">
                <Link className="link" to="/marketing">
                    <h3 className="text-primary-hover">企劃專區</h3>
                </Link>
            </div>
            <div className="col-4 p-5">
                <Link className="link" to="/sales">
                    <h3 className="text-primary-hover">業務/網紅專區</h3>
                </Link>
            </div>
            <div className="col-4 p-5">
                <Link className="link" to="/finance">
                    <h3 className="text-primary-hover">財務/人資專區</h3>
                </Link>
            </div>
            <div className="col-4 p-5">
                <Link className="link" to="/newMember">
                    <h3 className="text-primary-hover">新進員工訓練</h3>
                </Link>
            </div>
            <div className="col-4 p-5">
                <Link className="link" to="/outsideLink">
                    <h3 className="text-primary-hover">外部工具連結</h3>
                </Link>
            </div>
            <div className="col-4 p-5">
                <Link className="link" to="/price">
                    <h3 className="text-primary-hover">報價專區</h3>
                </Link>
            </div>
            <div className="col-4 p-5">
                <Link className="link" to="/regulation">
                    <h3 className="text-primary-hover">公司福利及規範</h3>
                </Link>
            </div>


        </div>
    </div>);
}
export default Home