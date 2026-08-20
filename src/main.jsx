import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import "./assets/all.scss"
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import App from './App.jsx'
import store from './store/store.js';
import { Provider } from 'react-redux'; // Redux 的 Provider

// 1. 引入你的 Auth 身份驗證 Provider（請依實際路徑調整）
import { Provider as AuthProvider } from './context/AuthProvider.jsx'; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* 2. 用 AuthProvider 把 Redux Provider 與 App 包起來 */}
    <AuthProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </AuthProvider>
  </StrictMode>,
)