import { useState } from "react";

const Execution = () => {
    const [ExecutionData] = useState({
        Data: [
            {
                title: "專案總表",
                intro: "進案請填寫",
                Link: "https://docs.google.com/spreadsheets/d/16Z07RLlt6ilsWaI10rPWrp16V8yRhE27gmRCbbLEeMA/edit?usp=sharing",
                notice: "",
            },
            {
                title: "文章總表",
                intro: "執行使用/企劃確認",
                Link: "https://docs.google.com/spreadsheets/d/1H5mw3CcYis24OZpcGnQydXV7vU96EpHCuicqNpIYgJo/edit?usp=sharing",
                notice: "",
            },
            {
                title: "文章截圖",
                intro: "每七日更新一次",
                Link: "https://drive.google.com/drive/folders/14uf6M3dlPltDqAUf4Rs9ztZha_Kn_K4p?usp=share_link",
                notice: "",
            },
            {
                title: "文章上榜紀錄",
                intro: "企劃結案可用",
                Link: "https://drive.google.com/drive/folders/1K8YJvAlXcp0rBwN3KyfNfAiEKke-lIpr",
                notice: "",
            },
            {
                title: "工作流程",
                intro: "其他組別也可多多了解",
                Link: "https://docs.google.com/document/d/1IYNZZITjWysrLhQQaaw-1hLn8qOOiIeISyGdEz5VWWM/edit?tab=t.0",
                notice: "",
            },
            {
                title: "工作日誌",
                intro: "執行組",
                Link: "https://docs.google.com/spreadsheets/d/19MGGvFAdO5KWbz1yt-bZLTFLOVPXnCDl7fXg-GOov7s/edit?usp=sharing",
                notice: "",
            },
            {
                title: "監控執行表",
                intro: "AI監控",
                Link: "https://docs.google.com/spreadsheets/d/1xoYkNS8k06PHbjpAiigvpZEPbVL__t2N9jV924TSJg4/edit?usp=sharing",
                notice: "",
            },
            {
                title: "帳號表",
                intro: "論壇、臉書",
                Link: "https://docs.google.com/spreadsheets/d/1nfd2DlBBq24RW5xME4WzCj24BkL9uTJbDlHXVRuEwdY/edit?usp=sharing",
                notice: "",
            },
        ]
    });

    return (<div className="container">
        <div className="row mt-3">
        <h2>執行專區</h2>
        {ExecutionData.Data?.map((item, index) => (
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
export default Execution;