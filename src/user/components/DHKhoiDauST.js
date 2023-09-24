import React from 'react'
import hinh from '../access/img/TKDH_2.jpg'

function DHKhoiDauST() {
  return (
    <>
  <div className="container" id="product-cards">
    <h1 className="text-center">
      KHỞI ĐẦU SÁNG TẠO - CHẮP CÁNH TƯƠNG LAI HỌC NGAY THIẾT KẾ ĐỒ HỌA TẠI
      iSPACE
    </h1>
    <div className="row" style={{ marginTop: 30 }}></div>
  </div>
  <div className="container" id="about">
    <div className="row" style={{ marginTop: 50 }}>
      <div className="col-md-5 py-3 py-md-0">
        <div className="card">
          <img src={hinh} alt="" />
        </div>
      </div>
      <div className="col-md-7 py-3 py-md-0">
        <li className='mt-12 fz-18 line-h-16'>
          Chương trình đào tạo với 70% giờ học thực hành, giúp bạn thành thạo
          các công cụ thiết kế và phát triển tối đa khả năng sáng tạo và logic
          trong thiết kế
        </li>
        <li className='mt-12 fz-18 line-h-16'>
          Môi trường học năng động, sáng tạo cùng các hoạt động, sự kiện từ
          trường và các CLB chuyên môn như CLB Truyền thông
        </li>
        <li className='mt-12 fz-18 line-h-16'>
          Được kết nối với các chuyên gia trong ngành thông qua các buổi
          workshop, talkshow của trường
        </li>
        <li className='mt-12 fz-18 line-h-16'>
          Chương trình được xây dựng dựa trên chương trình học chuẩn quốc tế của
          các hãng nổi tiếng về công nghệ đồ họa như: Adobe, Autodesk,… Sinh
          viên được trực tiếp làm ra các ấn phẩm đồ họa theo từng giai đoạn năng
          lực chuyên môn.
        </li>
      </div>
    </div>
  </div>
</>

  )
}

export default DHKhoiDauST