import React from 'react'
import ceh6 from '../access/img/AWS_5.jpg'

function CEHDoiTuong() {
  return (
    <>
    <>
  <div className="container " id="product-cards">
    <h1 className="text-center">Đối Tượng Học Viên</h1>
    <div className="row" style={{ marginTop: 30 }}></div>
  </div>
  <div className="container fz-big line-h-16" id="about">
    <div className="row" style={{ marginTop: 50 }}>
      <div className="col-md-5 py-3 py-md-0">
        <div className="card">
          <img src={ceh6} alt="" />
        </div>
      </div>
      <div className="col-md-7 py-3 py-md-0">
        <li className='fz-big mt-12 line-h-16'>Nhân viên và học viên bảo mật mạng</li>
        <li className='fz-big mt-12 line-h-16'>Chuyên viên công nghệ thông tin</li>
        <li className='fz-big mt-12 line-h-16'>Chuyên viên quản trị hệ thống mạng + máy chủ</li>
        <li className='fz-big mt-12 line-h-16'>Người quản trị Website + Forum</li>
        <li className='fz-big mt-12 line-h-16'>
          Quản lý các doanh nghiệp, nhân viên kinh doanh, quản lý tài chính có
          liên quan đến CNTT
        </li>
        <li className='fz-big mt-12 line-h-16'>Các đối tượng yêu thích công việc về bảo mật, an ninh mạng</li>
        <li className='fz-big mt-12 line-h-16'>
          Người muốn lấy chứng chỉ để nâng cao cơ hội việc làm, tăng lương
        </li>
      </div>
    </div>
  </div>
</>

    </>
  )
}

export default CEHDoiTuong