import Newmember from '../front/NewMember'; // 1. 直接引用前台的 Execution 畫面

const AdminNewmember = () => {
  return (
    <div>
      {/* 上半部：直接呈現前台的內容 */}
      <Newmember />

      <hr style={{ margin: '40px 0' }} />
    </div>
  );
}

export default AdminNewmember;