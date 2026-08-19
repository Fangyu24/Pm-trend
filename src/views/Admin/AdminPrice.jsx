import Price from '../front/Price';
import Form from '../../component/Form';

const API_BASE = import.meta.env.VITE_API_BASE;

const AdminPrice = () => {
  return (
    <div>
      <Price isAdmin={true} />
      <div className="container mb-5">
      <section className="border-top mt-5 d-flex flex-column justify-content-center align-items-center">
        <h3 className='mt-5 mb-5'>新增報價單</h3>
        <Form apiEndpoint={`${API_BASE}Sales_Price`} />
      </section>
      </div>
    </div>
    
  );
}

export default AdminPrice;