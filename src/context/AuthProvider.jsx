import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../utilty/firebase";
import { AuthContext } from "./AuthContext.jsx"; // 👈 從獨立檔案引入

export function Provider({ children }) {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser && currentUser.email) {
        setUser(currentUser);
        try {
          const userDocRef = doc(db, 'user', currentUser.email.toLowerCase());
          const userDocSnap = await getDoc(userDocRef);

          if (userDocSnap.exists()) {
            setRole(userDocSnap.data().role);
          } else {
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

  return (
    <AuthContext.Provider
      value={{
        user,
        role,
        isAdmin: role === 'admin',
        loading
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}