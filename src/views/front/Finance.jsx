import { useState } from "react";

const Finance = () => {
    const [FinanceData] = useState({
        Data: [
            {
                title: "發票/報價單",
                intro: "財務匯入",
                Link: "https://drive.google.com/drive/folders/1wCNHYJfaXA9IgFddsMrHUQfr245dshi1",
                notice: "",
            },
            {
                title: "加班表",
                intro: "企劃/執行/業務請填寫",
                Link: "https://docs.google.com/spreadsheets/d/1EmJzfNsDx2Oym8b_k-ESi0G_vl30LW85pyD1Kiw5ouc/edit?usp=sharing",
                notice: "",
            },
            {
                title: "LINEGO及順豐登記表",
                intro: "企劃/執行/業務請填寫",
                Link: "https://docs.google.com/spreadsheets/d/1fl1YqWrZXCZ7McjRcimLuff6twEF-NJXGnVnCiqSMtU/edit?gid=0#gid=0",
                notice: "",
            },
            {
                title: "三節禮盒名單",
                intro: "三節記得確認！！",
                Link: "https://docs.google.com/spreadsheets/d/1N3oMS4qr3w5e43_ylPRMc5JusIRGpJR07reNnhIIyps/edit?usp=sharing",
                notice: "",
            }
        ]
    });

    return (<div className="container">
        <div className="row mt-3">
        <h2>財務/人資專區</h2>
        {FinanceData.Data?.map((item, index) => (
            <div key={index} className="col-4 mb-2 d-flex align-items-stretch ">
                <div className="card w-100">
                    <div className="card-header">{item.intro}</div>
                    <div className="card-body d-flex flex-column flex-grow-1">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.notice}</p>
                        <button
                            type="button"
                            className="btn btn-primary mt-auto"
                            onClick={(e) => {
                                e.stopPropagation(); // 防止外層事件冒泡攔截
                                window.open(`${item.Link}`, '_blank', 'noopener,noreferrer');
                            }}
                        >點擊連結</button>
                    </div>
                </div>
            </div>
        ))}
        </div>
     
    </div>);
};
export default Finance;