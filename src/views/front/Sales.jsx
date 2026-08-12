import { useState } from "react";

const Sales = () => {
    const [SalesData] = useState({
        Data: [
            {
                title: "工作日誌",
                intro: "業務組",
                Link: "https://docs.google.com/spreadsheets/d/1ZoZ1Ld932S9o5dIhx2h99A9xOJ4gdJrrDNrW_m5-HN8/edit?gid=883990736#gid=883990736",
                notice: "",
            },
            {
                title: "報價單歸檔",
                intro: "業務組",
                Link: "https://docs.google.com/spreadsheets/d/1Mv2XV5hjoSoHNrRfsjCdPLkQjX3F-Ger8nHu71rc818/edit?gid=2104500311#gid=2104500311",
                notice: "",
            },
            {
                title: "工作日誌",
                intro: "網紅組",
                Link: "https://docs.google.com/spreadsheets/d/1jje2wGdXe6PRruqEnHmkYMZ7gq-fFBpkr6SQ7Lylaks/edit?gid=1703908428#gid=1703908428",
                notice: "",
            },
            {
                title: "討債表",
                intro: "血債血還！",
                Link: "https://docs.google.com/spreadsheets/d/1JMIC4lqgOVxUaq0gCwPFBv5kUlQL9Nc1iWdoqJTSqzA/edit?usp=sharing",
                notice: "",
            },
            {
                title: "口碑新版",
                intro: "Sales Kit",
                Link: "https://docs.google.com/presentation/d/114LRV1zDR7z98StchFMdVr29ZkPjJOB4sO4GPRXLzzU/edit?slide=id.g25f4763b403_0_1017#slide=id.g25f4763b403_0_1017",
                notice: "",
            },
            {
                title: "團購主/KOL",
                intro: "Sales Kit",
                Link: "https://docs.google.com/presentation/d/111sxnEiauEZy5PuVKhBXHhytF4hYP7fQ4ULfMzMCji0/edit?usp=sharing",
                notice: "",
            },
            {
                title: "GEO",
                intro: "Sales Kit",
                Link: "https://docs.google.com/presentation/d/1Q6EYXjgbowUKAjRUmKI-8FZEAVeUb6iH3i9ThZAXhnA/edit?slide=id.p14#slide=id.p14",
                notice: "",
            },
            {
                title: "Threads海巡",
                intro: "方案",
                Link: "https://docs.google.com/presentation/d/1nub9ybYlOSIG-mC6BmGT7N5AA0MJnw-_-sf_PL9LaVc/edit?usp=sharing",
                notice: "",
            },
            {
                title: "Threads引爆",
                intro: "方案",
                Link: "https://docs.google.com/presentation/d/1wusx_9hMc98a4WSolJmtkdQNYjALi_cidT-pqv660s4/edit?slide=id.g2f3eaa4a9d1_0_0#slide=id.g2f3eaa4a9d1_0_0",
                notice: "",
            },
            {
                title: "媒體聯播",
                intro: "方案",
                Link: "https://docs.google.com/presentation/d/1y0VP0_1Sw66UtWeV8eXQMxplKyqAH001J0Fb4emabCE/edit?slide=id.g35fd89081d7_1_63#slide=id.g35fd89081d7_1_63",
                notice: "",
            },
            {
                title: "品牌炎上對應方針",
                intro: "方案",
                Link: "https://docs.google.com/presentation/d/1MBg1tG-r6e56EhghsDfQWTO9_kwwCdmnnvKL0FOjWeE/edit?slide=id.g35ac0e26841_0_0#slide=id.g35ac0e26841_0_0",
                notice: "",
            },
            {
                title: "小紅書KOL",
                intro: "方案",
                Link: "https://docs.google.com/presentation/d/1a-H1ZsE-JJtRIVead4Rozge1TynQxCYY6UROnnW0nyE/edit?slide=id.g3861b25f25e_0_0#slide=id.g3861b25f25e_0_0",
                notice: "",
            },
        ],
        Price: [
            {
                title: "內部報價參考",
                intro: "切勿對外釋出!",
                Link: "https://docs.google.com/spreadsheets/d/1UcqPonMciZffbuNcd2fEiYzbx5fRe86SkdCT2--GW5U/edit?usp=sharing",
                notice: "",
            },
            {
                title: "直客",
                intro: "報價",
                Link: "https://docs.google.com/spreadsheets/d/1b9E8BO4ClrHWffdq46cuWqdEWwYt1jfmHIOJkLWQT68/edit?gid=0#gid=0",
                notice: "",
            },
            {
                title: "代理商JS/愛卡拉/AM等等",
                intro: "報價",
                Link: "https://docs.google.com/spreadsheets/d/1c8egn4IpXfpT6IPcFcIkptpjHPYdTBZSXdNQlAGpJvw/edit?usp=sharing",
                notice: "",
            },
            {
                title: "肖準",
                intro: "報價",
                Link: "https://docs.google.com/spreadsheets/d/1enIl2F47SK2-7rs1AqCu70SA5wypKWALAFJNXntmoD4/edit?pli=1&gid=0#gid=0",
                notice: "",
            },
            {
                title: "股感",
                intro: "報價",
                Link: "https://docs.google.com/spreadsheets/d/1AzW7xZYYoACabXtATY4iMD14y-DGVV1FZLLkWvTTJdw/edit?usp=sharing",
                notice: "",
            },
            {
                title: "生洋報價",
                intro: "報價",
                Link: "https://docs.google.com/spreadsheets/d/1rOLQJkkuI8vk1oUdmQdXD9hdMuxsmsNUkTMxbGtb07I/edit?gid=64045539#gid=64045539",
                notice: "",
            },
        ],
    });

    return (<div className="container">
        <div className="row mt-3">
        <h2>業務網紅專區</h2>
        {SalesData.Data?.map((item, index) => (
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
        <div className="row mt-3"> 
            <h2>報價專區</h2>
        {SalesData.Price?.map((item, index) => (
            <div key={index} className="col-4 mb-2 d-flex align-items-stretch">
                <div className="card w-100">
                    <div className="card-header">{item.intro}</div>
                    <div className="card-body d-flex flex-column flex-grow-1">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.notice}</p>
                        <button
                            type="button"
                            className="btn btn-primary"
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
export default Sales;