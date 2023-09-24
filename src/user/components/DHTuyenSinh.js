import React from 'react'
import hinh from '../access/img/TKDH_5.jpg'

function DHTuyenSinh() {
  return (
    <>
  <div className="container" id="product-cards">
    <h1 className="text-center">Tuyển Sinh</h1>
    <div className="row" style={{ marginTop: 30, textAlign: "center" }}></div>
  </div>
  <div className="container" id="about">
    <div className="row" style={{ marginTop: 50 }}>
      <div className="col-md-5 py-3 py-md-0">
        <div className="card">
          <img src={hinh} alt="" />
        </div>
      </div>
      <div className="col-md-7 py-3 py-md-0">
        <p className='mt-12 fw-bold fz-big'>ĐỐI TƯỢNG TUYỂN SINH</p>
        <li className='fz-18 line-h-16'>
          Các thí sinh đã tốt nghiệp trung học phổ thông hoặc tương đương tính
          đến thời điểm nhập học
        </li>
        <p className='fw-bold fz-big mt-12'>PHƯƠNG THỨC TUYỂN SINH:</p>
        <li className='fz-18 mt-12 line-h-16'>Xét tuyển học bạ THPT</li>
        <li className='fz-18 mt-12 line-h-16'>Xét điểm thi THPT Quốc gia</li>
        <div className="btn mt-12">
        <a className='btn btn-dangky text-white fz-18' href='#dangkys1'>Đăng Ký Ngay</a>
        </div>
      </div>
    </div>
  </div>
</>

  )
}

export default DHTuyenSinh