import { useState, useEffect } from "react";
import axios from "axios";
import delet from "../../assets/images/x-circle.svg"

const API_BASE = import.meta.env.VITE_API_BASE;

// 1. 接收 isAdmin 屬性，預設為 false (前台使用時不帶參數，就不會顯示刪除按鈕)
const Execution = ({ isAdmin = false }) => {
    const [ExecutionList, setExecutionList] = useState([]);

    // 1. 使用 useCallback 包裹 getExec，確保函式參考不會在每次渲染時改變
    useEffect(() => {
        const getExec = async () => {
          try {
            const res = await axios.get(`${API_BASE}Execution`);
            // console.log(res.data);
            setExecutionList(res.data);
          } catch (error) {
            console.log(error.message);
          }
        };
        getExec();
      }, []);


    const deletData = async (Id) => {
        try {
          const res = await axios.delete(`${API_BASE}Execution/${Id}`);
          console.log(res.data);
          const response = await axios.get(`${API_BASE}Execution`);
          setExecutionList(response.data);
        } catch (error) {
          console.log(error.message);
        }
      };

    return (
        <div className="container">
            <div className="row mt-3">
                <h2 className="mb-3">執行專區</h2>
                {ExecutionList?.map((item, index) => (
                    <div key={item.id || index} className="col-4 mb-2 d-flex align-items-stretch">
                        <div className="card w-100 position-relative">
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
                                        e.stopPropagation();
                                        window.open(`${item.Link}`, '_blank', 'noopener,noreferrer');
                                    }}
                                >
                                    點擊連結
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Execution;