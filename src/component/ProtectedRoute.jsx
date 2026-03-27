import axios from "axios";
import { useEffect, useState } from "react";
import { RotatingSquare } from "react-loader-spinner";

const API_BASE = import.meta.env.VITE_API_BASE;
const API_PATH = import.meta.env.VITE_API_PATH;

function ProtectedRoute({children}){

    const [isAuth, setIsAuth]=useState(false);
    const [loading, setLoading]=useState(true);

    useEffect(() => {
        const token = document.cookie
          .split("; ")
          .find((row) => row.startsWith("hexToken="))
          ?.split("=")[1];
        //如果有取得token才把它加到headers上
        if (token) {
          axios.defaults.headers.common['Authorization'] = token;
        }
        
        const checkLogin = async () => {
          try {
            const res = await axios.post(`${API_BASE}/api/user/check`)
            console.log(res.data)
            setIsAuth(true)
          } catch (error) {
            console.log(error.response)
          }finally{
            setLoading(false)
          }
        };
        checkLogin()
      }, [])

      if(loading)return<RotatingSquare/>
      if(!isAuth)return <Navigate to="/login"/>

    return children;
}

export default ProtectedRoute