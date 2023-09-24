import React from 'react'
import aw from '../access/img/AWS_5.jpg'

function AWSDoiTuong() {
  return (
    <>
  <div className="container" id="product-cards">
    <h1 className="text-center">Đối Tượng Học Viên</h1>
    <div className="row" style={{ marginTop: 30 }}></div>
  </div>
  <div className="container fz-big line-h-16 " id="about">
    <div className="row" style={{ marginTop: 50 }}>
      <div className="col-md-5 py-3 py-md-0">
        <div className="card">
          <img src={aw} alt="" />
        </div>
      </div>
      <div className="col-md-7 py-3 py-md-0">
        <li className='mt-12'>
          Sinh viên muốn học thêm về điện toán đám mây để nâng cao kiến thức và
          lấy chứng chỉ
        </li>
        <li className='fz-18 mt-12 line-h-16'>Những người yêu thích và muốn tìm hiểu về Cloud (AWS)</li>
        <li className='fz-18 mt-12 line-h-16'>Người muốn học để nâng cao kiến thức</li>
        <li className='fz-18 mt-12 line-h-16'>
          Những người làm về dịch vụ Cloud (Sale, tư vấn viên, marketing, chủ
          doanh nghiệp…)
        </li>
        <li className='fz-18 mt-12 line-h-16'>
          Người muốn lấy chứng chỉ để nâng cao cơ hội việc làm, tăng lương
        </li>
      </div>
    </div>
  </div>
</>

  )
}

export default AWSDoiTuong