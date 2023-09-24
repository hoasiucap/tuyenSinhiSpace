import React from 'react'
import aws8 from '../access/img/AWS-GGT.png'

function AWSGiaTri() {
  return (
    <>
  <div className="container" id="product-cards">
    <h1 className="text-center">GIÁ TRỊ NHẬN ĐƯỢC SAU KHÓA HỌC</h1>
    <div className="row" style={{ marginTop: 30 }}></div>
  </div>
  <div className="container fz-big line-h-16" id="about">
    <div className="row" style={{ marginTop: 50 }}>
      <div className="col-md-3 py-3 py-md-0">
        <div className="card">
          <img src={aws8} alt="" />
        </div>
      </div>
      <div className="col-md-7 py-3 py-md-0">
        <li className='fz-big mt-12 line-h-16'>Hiểu biết về cơ sở hạ tầng toàn cầu AWS</li>
        <li className='fz-big mt-12 line-h-16'>
          Hiểu biết về các nguyên tắc kiến trúc cơ bản của việc xây dựng trên
          AWS
        </li>
        <li className='fz-big mt-12 line-h-16'>
          Khả năng xác định dịch vụ AWS đáp ứng yêu cầu kỹ thuật nhất định
        </li>
        <li className='fz-big mt-12 line-h-16'>
          Kiến thức về các phương pháp hay được đề xuất để xây dựng các ứng dụng
          an toàn và đáng tin cậy trên nền tảng AWS
        </li>
        <li className='fz-big mt-12 line-h-16'>
          Có đủ kiến thức để thi lấy chứng chỉ AWS Certified Cloud Architect
        </li>
      </div>
    </div>
  </div>
</>

  )
}

export default AWSGiaTri