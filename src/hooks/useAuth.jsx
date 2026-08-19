// src/hooks/useAuth.jsx
import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore'; // 1. 引入 Firestore 讀取語法
import { auth, db } from '../utilty/firebase';


export function useAuth() {
    const [user, setUser] = useState(null);
    const [role, setRole] = useState(null); // 儲存角色：'admin' | 'staff' | null
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
          if (currentUser) {
            setUser(currentUser);
    
            try {
              // 2. 拿當前登入者的 uid 去 users 集合找對應文件
              const userDocRef = doc(db, 'users', currentUser.uid);
              const userDocSnap = await getDoc(userDocRef);
    
              if (userDocSnap.exists()) {
                // 讀取文件的 role 欄位
                setRole(userDocSnap.data().role);
              } else {
                // 如果資料庫沒這個人的紀錄，預設給一般員工權限
                setRole('staff');
              }
            } catch (error) {
              console.error("讀取使用者權限失敗：", error);
              setRole('staff');
            }
          } else {
            setUser(null);
            setRole(null);
          }
          
          setLoading(false);
        });
    
        return () => unsubscribe();
      }, []);
    
      return { 
        user, 
        role, 
        isAdmin: role === 'admin', // 快捷判斷布林值
        loading 
      };
    }