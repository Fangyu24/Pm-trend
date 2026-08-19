import Finance from '../front/Finance';
import Form from '../../component/Form';

const API_BASE = import.meta.env.VITE_API_BASE;

const AdminFinance = () => {
  return (
    <div>
      <Finance isAdmin={true} />
      <div className="container mb-5">
      <section className="border-top mt-5 d-flex flex-column justify-content-center align-items-center">
        <h3 className='mt-5 mb-5'>新增財務/人資相關資料</h3>
        <Form apiEndpoint={`${API_BASE}Finance`} />
      </section>
      </div>
    </div>
    
  );
}

export default AdminFinance;