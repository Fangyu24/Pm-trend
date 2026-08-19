import { useState,useEffect } from "react";
import axios from "axios";
import delet from "../../assets/images/x-circle.svg"

const API_BASE = import.meta.env.VITE_API_BASE;

const Marketing = ({ isAdmin = false }) => {
    const [MarketingList, setMarketingList] = useState([]);
    // const [MarketingData] = useState({
    //     Data: [
    //         {
    //             title: "專案總表",
    //             intro: "進案請填寫",
    //             Link: "https://docs.google.com/spreadsheets/d/16Z07RLlt6ilsWaI10rPWrp16V8yRhE27gmRCbbLEeMA/edit?usp=sharing",
    //             notice: "",
    //         },
    //         {
    //             title: "文章總表",
    //             intro: "執行使用/企劃確認",
    //             Link: "https://docs.google.com/spreadsheets/d/1H5mw3CcYis24OZpcGnQydXV7vU96EpHCuicqNpIYgJo/edit?usp=sharing",
    //             notice: "",
    //         },
    //         {
    //             title: "外部寫手",
    //             intro: "Zoe讚",
    //             Link: "https://docs.google.com/spreadsheets/d/16Aup5Wa1RPON0YfwJ6QKhtjHR_rjZJ-4Xapbhnh7XAQ/edit?usp=sharing",
    //             notice: "",
    //         },
    //         {
    //             title: "工作日誌",
    //             intro: "企劃",
    //             Link: "https://docs.google.com/spreadsheets/d/1tOhXQ25TR8XlIhEPB0Sf1pKH6ZaJ0H3RWZECd9SnzaQ/edit?usp=sharing",
    //             notice: "",
    //         },
    //         {
    //             title: "Threads海巡關鍵字表",
    //             intro: "購買海巡方案需用到",
    //             Link: "https://docs.google.com/spreadsheets/d/176dN4u6TOTuzMw7ACinv9Q-YnlcMfAGLVTV29z9KnNM/edit?usp=sharing",
    //             notice: "",
    //         },
    //         {
    //             title: "社團清單",
    //             intro: "撰寫論壇渠道時可用",
    //             Link: "https://docs.google.com/spreadsheets/d/1044y-avgwL3lZeV9Q9hlqCvN7JU8XlmxcCKKQnOYEWQ/edit?usp=sharing",
    //             notice: "",
    //         },
    //         {
    //             title: "notebooklm 改版教學簡報",
    //             intro: "續提時可用",
    //             Link: "https://docs.google.com/presentation/d/10hSloMZyJkpzLif7CCpUwyAaA47_X1a7rpNFb48uNPU/edit?slide=id.p#slide=id.p",
    //             notice: "",
    //         },
    //         {
    //             title: "社群論壇平台數據介紹",
    //             intro: "提案時可用",
    //             Link: "https://docs.google.com/presentation/d/101ycUkvCHmsrWSciM9PNYsCPcmA04zzbE6_HkGziweY/edit?usp=sharing",
    //             notice: "",
    //         },
    //         {
    //             title: "Threads台灣用戶分析",
    //             intro: "提案時可用",
    //             Link: "https://docs.google.com/presentation/d/1fH0DjEF0qYK25udnVcuz2kkNwEcmIpWKIUEkl_2pidE/edit?usp=sharing",
    //             notice: "",
    //         },
    //         {
    //             title: "體驗活動素材使用暨肖像授權同意書",
    //             intro: "請建副本",
    //             Link: "https://docs.google.com/document/d/1GJi4tnZ005jeGhA2-gl2wbh8Z8N74ExLEqimb3jXfug/edit?usp=sharing",
    //             notice: "",
    //         },
            
    //     ]
    // });
    useEffect(() => {
        const getMark = async () => {
          try {
            const res = await axios.get(`${API_BASE}Marketing`);
            // console.log(res.data);
            setMarketingList(res.data);
          } catch (error) {
            console.log(error.message);
          }
        };
        getMark();
      }, []);

      const deletData = async (Id) => {
        try {
          const res = await axios.delete(`${API_BASE}Marketing/${Id}`);
          console.log(res.data);
          const response = await axios.get(`${API_BASE}Marketing`);
          setMarketingList(response.data);
        } catch (error) {
          console.log(error.message);
        }
      };


    return (<div className="container">
        <div className="row mt-3">
        <h2 className="mb-3">企劃專區</h2>
        {MarketingList?.map((item, index) => (
            <div key={index} className="col-4 mb-2 d-flex align-items-stretch ">
                <div className="card w-100">
                    <div className="card-header d-flex justify-content-center align-items-center">
                                                {item.intro}
                                                {isAdmin && (
                                                        <button
                                                            type="button"
                                                            className="btn btn-sm ms-auto"
                                                            onClick={() => deletData(item.id)}
                                                        ><img src={delet} alt="delet" />
                                                        </button>
                                                    )}
                                                </div>
                    <div className="card-body d-flex flex-column flex-grow-1">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.notice}</p>
                        <button
                            type="button"
                            className="btn btn-primary mt-auto bg-hover"
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
export default Marketing;