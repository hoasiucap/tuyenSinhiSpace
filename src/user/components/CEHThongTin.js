import React from 'react'
import ceh from '../access/img/CEH-TT.jpg'

function CEHThongTin() {
  return (
    <div className="container fz-big line-h-16" id="about">
  <h3>THÔNG TIN KHÓA HỌC</h3>
  <hr />
  <div className="row" style={{ marginTop: 50 }}>
    <div className="col-md-5 py-3 py-md-0">
      <div className="card">
        <img src={ceh} alt="" />
      </div>
    </div>
    <div className="col-md-7 py-3 py-md-0">
      <li className='fz-big mt-12 line-h-16'>Tên khóa học: <strong>CEH (V12) Certified Ethical Hacker</strong></li>
      <li className='fz-big mt-12 line-h-16'>Giảng viên: <strong>thầy Trương Phạm Hoài Thương</strong></li>
      <li className='fz-big mt-12 line-h-16'>Thời gian khai giảng: <strong>28/09/2023</strong></li>
      <li className='fz-big mt-12 line-h-16'>Thời lượng: <strong>40h, mỗi buổi 2h</strong></li>
      <li className='fz-big mt-12 line-h-16'>Lịch học: <strong>Tối 2 – 4 – 6 từ 18h30 đến 20h30</strong></li>
      <li className='fz-big mt-12 line-h-16'>Hình thức: <strong>offline</strong></li>
    </div>
  </div>
</div>

  )
}

export default CEHThongTin