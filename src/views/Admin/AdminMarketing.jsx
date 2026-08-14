import Marketing from '../front/Marketing';
import Form from '../../component/Form';

const API_BASE = import.meta.env.VITE_API_BASE;

const AdminMarketing = () => {
  return (
    <div>
      <Marketing isAdmin={true} />
      <div className="container">
      <section className="border-top mt-5 d-flex flex-column justify-content-center align-items-center">
        <h3 className='mt-5 mb-5'>新增企劃相關資料</h3>
        <Form apiEndpoint={`${API_BASE}Marketing`} />
      </section>
      </div>
    </div>
    
  );
}

export default AdminMarketing;