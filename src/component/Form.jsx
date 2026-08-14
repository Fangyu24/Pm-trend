// src/component/Form.jsx
import { useState } from 'react';
import axios from 'axios';

export default function Form({ apiEndpoint, onSuccess }) {
  // 1. 管理 4 個欄位的 State
  const [formData, setFormData] = useState({
    title: '',  // 標題
    intro: '',  // 簡介
    link: '',   // 連結
    notice: '', // 注意事項
  });

  const [submitting, setSubmitting] = useState(false);

  // 2. 通用輸入變更處理
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 3. 表單送出處理
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title || !formData.link) {
      return alert('請至少填寫「標題」與「連結」！');
    }

    setSubmitting(true);
    try {
      // POST 到呼叫頁面傳進來的 apiEndpoint
      await axios.post(apiEndpoint, formData);
      alert('新增成功！');

      // 清空表單
      setFormData({
        title: '',
        intro: '',
        link: '',
        notice: '',
      });

      // 如果有傳入成功後的回調函式（例如重新 fetch 列表），就執行它
      if (onSuccess) onSuccess();
    } catch (error) {
      console.error('新增失敗：', error);
      alert('新增失敗，請確認網路或API狀態');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='d-flex flex-column g-3 w-100' style={{maxWidth: '600px'}}>
      {/* title 欄位 */}
      <div>
        <label className='d-block mb-1 fw-bold'>資料名稱：</label>
        <input
          type="text"
          name="title"
          placeholder="請輸入名稱"
          value={formData.title}
          onChange={handleChange}
          style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
      </div>

      {/* intro 欄位 */}
      <div>
        <label className='d-block mb-1 fw-bold'>資料簡介：</label>
        <textarea
          name="intro"
          rows="3"
          placeholder="請輸入簡介內容..."
          value={formData.intro}
          onChange={handleChange}
          style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
      </div>

      {/* link 欄位 */}
      <div>
        <label className='d-block mb-1 fw-bold'>資料連結：</label>
        <input
          type="url"
          name="link"
          placeholder="https://example.com"
          value={formData.link}
          onChange={handleChange}
          style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
      </div>

      {/* notice 欄位 */}
      <div>
        <label className='d-block mb-1 fw-bold'>注意事項：</label>
        <textarea
          name="notice"
          rows="2"
          placeholder="請輸入注意事項..."
          value={formData.notice}
          onChange={handleChange}
          style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
      </div>

      {/* 送出按鈕 */}
      <button
        type="submit"
        disabled={submitting}
        style={{
          padding: '10px 20px',
          backgroundColor: submitting ? '#999' : '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: submitting ? 'not-allowed' : 'pointer',
          fontWeight: 'bold',
        }}
      >
        {submitting ? '新增中...' : '送出新增'}
      </button>
    </form>
  );
}