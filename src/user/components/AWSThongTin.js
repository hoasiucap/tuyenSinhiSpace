import React from 'react'
import aws4 from '../access/img/AWS_TT.jpg'

function AWSThongTin() {
  return (
    <div className="container" id="about">
  <h3>THÔNG TIN KHÓA HỌC AWS CLOUD FOUNDATION</h3>
  <hr />
  <div className="row" style={{ marginTop: 50 }}>
    <div className="col-md-5 py-3 py-md-0">
      <div className="card">
        <img src={aws4} alt="" />
      </div>
    </div>
    <div className="col-md-7 py-3 py-md-0 fz-big line-h-16 ">
      <li className='mt-12'>
     Tên khóa học: <strong>AWS Cloud Foundation</strong></li>
      <li className='mt-12 fz-18 mt-12 line-h-16'>Giảng viên: <strong>Ths. Lê Hoàng Bình Nguyên</strong></li>
      <li className='mt-12 fz-18 mt-12 line-h-16'>Thời lượng: <strong>20h, mỗi buổi 2h</strong></li>
      <li className='mt-12 fz-18 mt-12 line-h-16'>Thời gian khai giảng: <strong>25/09/2023 (dự kiến)</strong></li>
      <li className='mt-12 fz-18 mt-12 line-h-16'>Lịch học: <strong>tối hai – tư – sáu (18h30 đến 20h30)</strong></li>
      <li className='mt-12 fz-18 mt-12 line-h-16'>
        Yêu cầu học viên: <strong>Có kiến thức CNTT cơ bản, có máy tính hoặc laptop</strong>
      </li>
      <li className='fz-18 mt-12 line-h-16'>Hình thức: <strong>online/offline</strong></li>
    </div>
  </div>
</div>

  )
}

export default AWSThongTin