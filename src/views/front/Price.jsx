import { useState, useEffect } from "react";
import axios from "axios";
import delet from "../../assets/images/x-circle.svg"

const API_BASE = import.meta.env.VITE_API_BASE;

const Price = ({ isAdmin = false }) => {
    const [PriceList, setPriceList] = useState([]);

    useEffect(() => {
        // const [SalesData] = useState({
        //      Price: [
        //     //     {
        //     //         title: "內部報價參考",
        //     //         intro: "切勿對外釋出!",
        //     //         Link: "https://docs.google.com/spreadsheets/d/1UcqPonMciZffbuNcd2fEiYzbx5fRe86SkdCT2--GW5U/edit?usp=sharing",
        //     //         notice: "",
        //     //     },
        //     //     {
        //     //         title: "直客",
        //     //         intro: "報價",
        //     //         Link: "https://docs.google.com/spreadsheets/d/1b9E8BO4ClrHWffdq46cuWqdEWwYt1jfmHIOJkLWQT68/edit?gid=0#gid=0",
        //     //         notice: "",
        //     //     },
        //     //     {
        //     //         title: "代理商JS/愛卡拉/AM等等",
        //     //         intro: "報價",
        //     //         Link: "https://docs.google.com/spreadsheets/d/1c8egn4IpXfpT6IPcFcIkptpjHPYdTBZSXdNQlAGpJvw/edit?usp=sharing",
        //     //         notice: "",
        //     //     },
        //     //     {
        //     //         title: "肖準",
        //     //         intro: "報價",
        //     //         Link: "https://docs.google.com/spreadsheets/d/1enIl2F47SK2-7rs1AqCu70SA5wypKWALAFJNXntmoD4/edit?pli=1&gid=0#gid=0",
        //     //         notice: "",
        //     //     },
        //     //     {
        //     //         title: "股感",
        //     //         intro: "報價",
        //     //         Link: "https://docs.google.com/spreadsheets/d/1AzW7xZYYoACabXtATY4iMD14y-DGVV1FZLLkWvTTJdw/edit?usp=sharing",
        //     //         notice: "",
        //     //     },
        //     //     {
        //     //         title: "生洋報價",
        //     //         intro: "報價",
        //     //         Link: "https://docs.google.com/spreadsheets/d/1rOLQJkkuI8vk1oUdmQdXD9hdMuxsmsNUkTMxbGtb07I/edit?gid=64045539#gid=64045539",
        //     //         notice: "",
        //     //     },
        // ]
        // });
        const getPrice = async () => {
            try {
                const res = await axios.get(`${API_BASE}Sales_Price`);
                // console.log(res.data);
                setPriceList(res.data);
            } catch (error) {
                console.log(error.message);
            }
        };
        getPrice();
    }, []);
    const deletData = async (Id) => {
        try {
            const res = await axios.delete(`${API_BASE}Price/${Id}`);
            console.log(res.data);
            const response = await axios.get(`${API_BASE}Price`);
            setPriceList(response.data);
        } catch (error) {
            console.log(error.message);
        }
    };

    return (<div className="container">
        <div className="row mt-3">
            <h2 className="mb-3">報價專區</h2>
            {PriceList?.map((item, index) => (
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
export default Price;