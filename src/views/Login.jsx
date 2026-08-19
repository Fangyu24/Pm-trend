import { useForm } from 'react-hook-form';
import { emailValidation } from "../utilty/validation";
import { useNavigate } from "react-router";

// 1. 引入 Firebase Auth 與 Firestore API
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, googleProvider, db } from "../utilty/firebase";

function Login() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      username: "",
      password: ""
    }
  });

  const checkUserPermission = async (user) => {
    try {
      const userRef = doc(db, 'users', user.email);
      const docSnap = await getDoc(userRef);

      // 如果 Firestore 沒有這個人的紀錄，代表不是公司授權員工
      if (!docSnap.exists()) {
        alert("您的帳號尚未獲得公司授權，請聯繫管理者先為您開通權限！");
        await auth.signOut(); // 強制登出
        return false;
      }

      return true; // 已授權
    } catch (error) {
      console.error("檢查權限失敗：", error);
      alert("檢查帳號權限時發生錯誤，請稍後再試。");
      await auth.signOut();
      return false;
    }
  };

  // --- Email + 密碼登入邏輯 ---
  const onSubmit = async (formData) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth, 
        formData.username, 
        formData.password
      );
      
      const user = userCredential.user;

      // 檢查是否為授權員工
      const hasPermission = await checkUserPermission(user);

      if (hasPermission) {
        console.log("登入成功且具備授權：", user.email);
        navigate('/admin');
      }
    } catch (error) {
      console.error("Firebase 登入失敗：", error.code, error.message);
      
      if (error.code === 'auth/invalid-credential' || error.code === 'auth/user-not-found') {
        alert("帳號或密碼錯誤！");
      } else {
        alert("登入失敗：" + error.message);
      }
    }
  };

  // --- Google 一鍵登入邏輯 ---
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      // 檢查是否為授權員工
      const hasPermission = await checkUserPermission(user);

      if (hasPermission) {
        console.log("Google 登入成功且具備授權：", user.email);
        navigate('/admin');
      }
    } catch (error) {
      console.error("Google 登入失敗：", error);
      alert("Google 登入失敗：" + error.message);
    }
  };

  return (
    <div className="container login">
      <form className="form-floating" onSubmit={handleSubmit(onSubmit)}>
        <h1>請先登入</h1>
        
        {/* Email 輸入框 */}
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="username"
            placeholder="name@example.com"
            {...register("username", emailValidation)}
          />
          <label htmlFor="username">Email address</label>
          {errors.username && (
            <p className='text-danger'>{errors.username.message}</p>
          )}
        </div>

        {/* 密碼輸入框 */}
        <div className="form-floating mb-3">
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            {...register("password", {
              required: "請輸入密碼",
              minLength: {
                value: 6,
                message: "密碼長度至少需 6 碼",
              },
            })}
          />
          <label htmlFor="password">Password</label>
          {errors.password && (
            <p className='text-danger'>{errors.password.message}</p>
          )}
        </div>

        {/* Email 登入按鈕 */}
        <button 
          type="submit" 
          className="btn btn-primary w-100 mt-2" 
          disabled={!isValid}
        >
          登入
        </button>
      </form>

      {/* 分隔線與 Google 登入按鈕 */}
      <div className="mt-3">
        <hr />
        <button 
          type="button" 
          className="btn btn-outline-danger w-100"
          onClick={handleGoogleLogin}
        >
          <i className="bi bi-google me-2"></i> 使用 Google 帳號登入
        </button>
      </div>
    </div>
  );
}

export default Login;
// import axios from "axios"
// import { useForm } from 'react-hook-form';
// import { emailValidation } from "../utilty/validation";
// import { useNavigate } from "react-router";

// const API_BASE = import.meta.env.VITE_API_BASE;

// function Login(){

//   const navigate= useNavigate();

// const {
//   register,
//   handleSubmit,
//   formState:{errors, isValid},
// } = useForm({
//   mode:"onChange",
//   defaultValues:{
//     username: "",
//     password: ""
//   }
// })

//   const onSubmit = async (formData) => {
//     try {
//       // e.preventDefault();
//       const response = await axios.post(`${API_BASE}/admin/signin`, formData);
//       const { token, expired } = response.data
//       // eslint-disable-next-line react-hooks/immutability
//       document.cookie = `hexToken=${token};expires=${new Date(expired)};`;
//       // eslint-disable-next-line react-hooks/immutability
//       axios.defaults.headers.common['Authorization'] = token;
//       navigate('/admin/product')
//       // setIsAuth(true);
//       // getProducts();
//     }
//     catch (error) {
//       console.log(error.response);
//       // setIsAuth(false)
//     }
//   }

//     return(<div className="container login">
//         <form className="form-floating" onSubmit={handleSubmit(onSubmit)}>
//           <h1>請先登入</h1>
//           <div className="form-floating mb-3">
//             <input
//               type="email"
//               className="form-control"
//               name="username"
//               placeholder="name@example.com"
//               {...register("username",emailValidation
//               )}
//               // value={formData.username}
//               // onChange={(e) => handleInputChange(e)} 
//               />
//             <label htmlFor="username">Email address</label>
//             {
//               errors.username&&(
//                 <p className='text-danger'>{errors.username.message}</p>
//               )
//             }
//           </div>
//           <div className="form-floating">
//             <input
//               type="password"
//               className="form-control"
//               name="password"
//               placeholder="Password"
//               // value={formData.password}
//               // onChange={(e) => handleInputChange(e)} 
//               {...register("password",{
//                 required:"請輸入密碼",
//                 minLength: {
//                   value: 6,
//                   message: "密碼長度至少需 6 碼",
//                 },
//               })}
//               />
//             <label htmlFor="Password">Password</label>
//             {
//               errors.password&&(
//                 <p className='text-danger'>{errors.password.message}</p>
//               )
//             }
//           </div>
//           <button type="submit" className="btn btn-primary w-100 mt-2" 
//           disabled={!isValid}
//           >登入</button>

//         </form>
//       </div>

//     )
// }

// export default Login