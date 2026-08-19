import { useState, useEffect } from "react";
import axios from "axios";
import delet from "../../assets/images/x-circle.svg"

const API_BASE = import.meta.env.VITE_API_BASE;

const NewMember = ({ isAdmin = false }) => {
  const [NewmemberList, setNewmemberList] = useState([]);

  // const [NememberData] = useState({
  //     Data: [
  //         {
  //             title: "員工清冊",
  //             intro: "入職請填寫",
  //             Link: "https://forms.gle/y3uztSnxB4HnvzvD8",
  //             notice: "",
  //         },
  //         {
  //             title: "保密合約",
  //             intro: "入職請填寫",
  //             Link: "https://drive.google.com/file/d/1ZyL8heE8qgTCxAzg6i8Ad7e1aBcMvGUa/view?usp=sharing",
  //             notice: "簽署後Mail到下面這個信箱 chloe@pm-trend.com，以及cc ADM@pm-trend.com",
  //         },
  //         {
  //             title: "員工介紹",
  //             intro: "幫助你快速認識新朋友！",
  //             Link: "https://docs.google.com/presentation/d/1Jf6cBOYou5n2scbRERa7Jtlp9pgZabG3n0SFsLxCwoo/edit?usp=sharing",
  //             notice: "",
  //         },
  //         {
  //             title: "業務部",
  //             intro: "新人訓練手冊",
  //             Link: "https://docs.google.com/document/d/1sZnkYGVDr9hfzJRzKIB-S9L-hdtx6X40DMc6DgRm9gY/edit?usp=sharing",
  //             notice: "",
  //         },
  //         {
  //             title: "企劃部",
  //             intro: "新人訓練手冊",
  //             Link: "https://docs.google.com/document/d/1HAVNn4bgYCfDIrtj7IjEfRYbY39D5F5Xcd7JgyNWBzA/edit?usp=sharing",
  //             notice: "",
  //         },
  //         {
  //             title: "GEO教學檔案",
  //             intro: "參考",
  //             Link: "https://docs.google.com/presentation/d/1znb3pcf2JhjdrSh6-At4MWUD5c1NXx90fJB2Gjdumos/edit?usp=sharing",
  //             notice: "",
  //         },
  //     ]
  // });

  useEffect(() => {
    const getNewMem = async () => {
      try {
        const res = await axios.get(`${API_BASE}Newmember`);
        // console.log(res.data);
        setNewmemberList(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getNewMem()
  },[]);
    const deletData = async (Id) => {
      try {
          const res = await axios.delete(`${API_BASE}NewMember/${Id}`);
          console.log(res.data);
          const response = await axios.get(`${API_BASE}NewMember`);
          setNewmemberList(response.data);
      } catch (error) {
          console.log(error.message);
      }
  };

  return (<div className="container">
    <div className="row mt-3">
      <h2 className="mb-3">新進員工訓練</h2>
      {NewmemberList?.map((item, index) => (
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
                  e.stopPropagation(); 
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
export default NewMember;