import React from 'react'
import pm5 from '../access/img/PTPM_5.jpg'

function PMHocPTPM() {
  return (
    <>
  <div className="container" id="product-cards">
    <h1 className="text-center ">Học phát triển phần mềm tại iSPACE</h1>
    <div className="row" style={{ marginTop: 30 }}></div>
  </div>
  <div className="container" id="about">
    <div className="row" style={{ marginTop: 50 }}>
      <div className="col-md-5 py-3 py-md-0">
        <div className="card">
          <img src={pm5} alt="" />
        </div>
      </div>
      <div className="col-md-7 py-3 py-md-0">
        <p className='mt-12 fz-big fw-bold'>
          💡Với lộ trình học rõ ràng, thời gian học ngắn, khi học tại iSPACE bạn
          sẽ được:
        </p>
        <li className='fz-18 line-h-16'>
          Học các ngôn ngữ lập trình như C#, SQL, CSS, PHP, Java từ cơ bản đến
          nâng cao
        </li>
        <li className='fz-18 line-h-16 mt-12'>
          Trang bị các kiến thức về mạng máy tính, cấu trúc dữ liệu, công nghệ
          phần mềm, kiểm thử phần mềm
        </li>
        <li className='fz-18 line-h-16 mt-12'>
          Trang bị các kỹ năng mềm như làm việc nhóm, thuyết trình, giao
          tiếp,... thông qua các giờ học trên lớp và các hoạt động, sự kiện ở
          trườngChương trình đào tạo kết hợp lý thuyết và thực hành, sinh viên
          vừa tốt nghiệp có đầy đủ kiến thức để tham gia dự án thực tế
        </li>
        <li className='fz-18 line-h-16 mt-12'>
          Giao lưu, kết nối với các chuyên gia trong ngành thông qua các buổi sự
          kiện, workshop được tổ chức tại trường
        </li>
      </div>
    </div>
  </div>
</>

  )
}

export default PMHocPTPM