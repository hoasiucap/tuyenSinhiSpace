import React from 'react'
import anm from '../access/img/ANM_5.jpg'

function ANMTuongLai() {
  return (
    <>
  <div className="container" id="product-cards">
    <h1 className="text-center">HỌC AN NINH MẠNG - ĐÓN ĐẦU TƯƠNG LAI</h1>
    <div className="row" style={{ marginTop: 30 }}></div>
  </div>
  <div className="container" id="about">
    <div className="row" style={{ marginTop: 50 }}>
      <div className="col-md-5 py-3 py-md-0">
        <div className="card">
          <img src={anm} alt="" />
        </div>
      </div>
      <div className="col-md-7 py-3 py-md-0">
        <p className='mt-12 fz-big fw-bold'>
          💡 Học ngay AN NINH MẠNG tại iSPACE, vững lý thuyết chắc thực hành.
        </p>
        <li className='fz-18 line-h-16'>
          Điểm vượt trội của iSPACE là luôn chắt lọc và cập nhật kiến thức, nền
          tảng mới kết hợp với thực hành thao luyện trên THAO TRƯỜNG MẠNG –
          Cyber Range. Học viên được trực tiếp trải nghiệm các tình huống tấn
          công mạng thực tế, giúp học viên thành thạo và có kinh nghiệm thực
          tiễn ngay khi còn ngồi trên ghế nhà trường
        </li>
        <li className='fz-18 mt-12 line-h-16'>
          Chương trình đào tạo “Vệ sĩ mạng” của iSPACE sẽ giúp sinh viên học
          được cách rà soát và khắc phục tất cả các lỗ hổng/nguy cơ tiềm ẩn gây
          mất ATTT trong hạ tầng CNTT của các doanh nghiệp/ tổ chức.{" "}
        </li>
      </div>
    </div>
  </div>
</>

  )
}

export default ANMTuongLai