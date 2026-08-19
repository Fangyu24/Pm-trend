import OutsideLink from '../front/OutsideLink';
import Form from '../../component/Form';

const API_BASE = import.meta.env.VITE_API_BASE;

const AdminOutsideLink = () => {
  return (
    <div>
      <OutsideLink isAdmin={true} />
      <div className="container mb-5">
      <section className="border-top mt-5 d-flex flex-column justify-content-center align-items-center">
        <h3 className='mt-5 mb-5'>新增外部工具連結</h3>
        <Form apiEndpoint={`${API_BASE}OutsideLink`} />
      </section>
      </div>
    </div>
    
  );
}

export default AdminOutsideLink;