import React from 'react'
import gt from '../access/img/CEH-GT.jpg'

function CEHGiaTri() {
  return (
    <>
  <div className="container" id="product-cards">
    <h1 className="text-center">GIÁ TRỊ NHẬN ĐƯỢC SAU KHÓA HỌC</h1>
    <div className="row" style={{ marginTop: 30 }}></div>
  </div>
  <div className="container fz-big line-h-16" id="about">
    <div className="row" style={{ marginTop: 50 }}>
      <div className="col-md-5 py-3 py-md-0">
        <div className="card">
          <img src={gt} alt="" />
        </div>
      </div>
      <div className="col-md-7 py-3 py-md-0">
        <li className='fz-big mt-12 line-h-16'>
          Học viên được trang bị các kiến thức từ cơ bản đến chuyên sâu về bảo
          mật.
        </li>
        <li className='fz-big mt-12 line-h-16'>
          Sử dụng thành thạo các công cụ và phương thức tấn công của các Hacker,
          có khả năng ngăn chặn, phòng chống các hành vi xâm nhập trái phép và
          phá hoại hệ thống mạng.
        </li>
        <li className='fz-big mt-12 line-h-16'>
          Có kiến thức về quản trị việc đăng nhập nâng cao dùng cho việc đảm bảo
          thông tin và cho phép bạn quản lý bảo mật thông tin một cách rõ ràng
          hơn.
        </li>
        <li className='fz-big mt-12 line-h-16'>
          Có đủ kiến thức và kỹ năng trở thành chuyên gia an toàn thông tin,
          kiểm toán hệ thống thông tin, tư vấn an toàn thông tin…cho các doanh
          nghiệp
        </li>
      </div>
    </div>
  </div>
</>

  )
}

export default CEHGiaTri