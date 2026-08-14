import Sales from '../front/Sales';
import Form from '../../component/Form';

const API_BASE = import.meta.env.VITE_API_BASE;

const AdminSales = () => {
  return (
    <div>
      <Sales isAdmin={true} />
      <div className="container">
      <section className="border-top mt-5 d-flex flex-column justify-content-center align-items-center">
        <h3 className='mt-5 mb-5'>新增業務相關資料</h3>
        <Form apiEndpoint={`${API_BASE}Sales`} />
      </section>
      </div>
    </div>
    
  );
}

export default AdminSales;