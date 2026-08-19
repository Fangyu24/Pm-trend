import NewMember from '../front/NewMember';
import Form from '../../component/Form';

const API_BASE = import.meta.env.VITE_API_BASE;

const AdminNewMember = () => {
  return (
    <div>
      <NewMember isAdmin={true} />
      <div className="container mb-5">
      <section className="border-top mt-5 d-flex flex-column justify-content-center align-items-center">
        <h3 className='mt-5 mb-5'>新增新進人員資料</h3>
        <Form apiEndpoint={`${API_BASE}NewMember`} />
      </section>
      </div>
    </div>
    
  );
}

export default AdminNewMember;