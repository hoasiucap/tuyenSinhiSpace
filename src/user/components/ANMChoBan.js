import React from 'react'
import amn from '../access/img/ANM_6.jpg'

function ANMChoBan() {
  return (
    <>
  <div className="container" id="product-cards">
    <h1 className="text-center">
      iSPACE chắc chắn là ngôi trường dành cho bạn
    </h1>
    <div className="row" style={{ marginTop: 30 }}></div>
  </div>
  <div className="container" id="about">
    <div className="row" style={{ marginTop: 50 }}>
      <div className="col-md-5 py-3 py-md-0">
        <div className="card">
          <img src={amn} alt="" />
        </div>
      </div>
      <div className="col-md-7 py-3 py-md-0">
        <li className='mt-12 fz-18 line-h-16'>
          iSPACE là ngôi trường trực thuộc Công ty Cổ phần Công nghệ An ninh
          mạng Quốc gia Việt Nam (NCS).
        </li>
        <li className='fz-18 mt-12 line-h-16'>
          Chương trình đào tạo với 70% giờ học thực hành, rèn kỹ năng chuyên môn
          cho sinh viên
        </li>
        <li className='fz-18 mt-12 line-h-16'>
          Giảng viên là những chuyên gia trong ngành, mang đến cho sinh viên
          những giờ học chất lượng nhất
        </li>
        <li className='fz-18 mt-12 line-h-16'>
          Môi trường học tập năng động, sinh viên iSPACE được rèn các kỹ năng
          mềm thông qua các hoạt động của CLB chuyên môn tại trường
        </li>
        <li className='fz-18 mt-12 line-h-16'>Được giới thiệu cơ hội việc làm khi vừa tốt nghiệp</li>
        <li className='fz-18 mt-12 line-h-16'>
          Được tham gia các buổi workshop, talkshow kết nối với các chuyên gia
          trong ngành
        </li>
      </div>
    </div>
  </div>
</>

  )
}

export default ANMChoBan