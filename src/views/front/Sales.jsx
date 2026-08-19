import { useState, useEffect } from "react";
import axios from "axios";
import delet from "../../assets/images/x-circle.svg"

const API_BASE = import.meta.env.VITE_API_BASE;

const Sales = ({ isAdmin = false }) => {
    const [SalesList, setSalesList] = useState([]);

    useEffect(() => {
        const getSales = async () => {
            try {
                const res = await axios.get(`${API_BASE}Sales_Data`);
                // console.log(res.data);
                setSalesList(res.data);
            } catch (error) {
                console.log(error.message);
            }
        };
        getSales();
    }, []);
    const deletData = async (Id) => {
        try {
            const res = await axios.delete(`${API_BASE}Sales_Data/${Id}`);
            console.log(res.data);
            const response = await axios.get(`${API_BASE}Sales_Data`);
            setSalesList(response.data);
        } catch (error) {
            console.log(error.message);
        }
    };

    return (<div className="container">
        <div className="row mt-3">
            <h2 className="mb-3">業務網紅專區</h2>
            {SalesList?.map((item, index) => (
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
export default Sales;