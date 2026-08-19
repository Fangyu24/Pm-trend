import Execution from '../front/Execution'; // 1. 直接引用前台的 Execution 畫面
import Form from '../../component/Form';

const API_BASE = import.meta.env.VITE_API_BASE;

const AdminExecution = () => {
  return (
    <div>
      {/* 上半部：直接呈現前台的內容 */}

      <Execution isAdmin={true} />
      <div className="container mb-5">
      <section className="border-top mt-5 d-flex flex-column justify-content-center align-items-center">
        <h3 className='mt-5 mb-5'>新增執行相關資料</h3>
        <Form apiEndpoint={`${API_BASE}Execution`} />
      </section>
      </div>
    </div>
    
  );
}

export default AdminExecution;