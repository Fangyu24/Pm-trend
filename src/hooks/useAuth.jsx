import { useContext } from 'react'; // 1. 記得引入 useContext
import { AuthContext } from '../context/AuthContext';

export function useAuth() {
  // 2. 直接回傳全域 Context 的資料
  return useContext(AuthContext); 
}