import React from 'react'
import tThuong from '../access/img/TThuong.png'

function CEHGiangVien() {
  return (
    <>
  <div className="container" id="product-cards">
    <h1 className="text-center">THÔNG TIN GIẢNG VIÊN</h1>
    <div className="row" style={{ marginTop: 30 }}></div>
  </div>
  <div className="container fz-big line-h-16" id="about">
    <div className="row" style={{ marginTop: 50 }}>
      <div className="col-md-3 py-3 py-md-0">
        <div className="card">
          <img src={tThuong} alt="" style={{height: '396px', objectFit: 'cover'}}/>
        </div>
      </div>
      <div className="col-md-9 mt-12 py-3 py-md-0">
        <li className='fz-big mt-12 line-h-16'>
          Thầy Trương Phạm Hoài Thương – giảng viên tại khoa An ninh mạng ở
          trường iSPACE, đảm nhận việc giảng dạy các môn học chuyên ngành về an
          toàn thông tin, chia sẻ kiến thức và kinh nghiệm thực tiễn cho sinh
          viên…
        </li>
        <li className='fz-big mt-12 line-h-16'>
          05 năm kinh nghiệm trong lĩnh vực an ninh mạng và có các chứng chỉ bảo
          mật từ EC-council và CompTIA
        </li>
        <li className='fz-big mt-12 line-h-16'>
          Thầy Trường Phạm Hoài Thương đã tham gia vào nhiều dự án đánh giá an
          toàn thông tin, triển khai các giải pháp bảo mật hiệu quả và thực hiện
          ứng cứu sự cố bảo mật.
        </li>
        <li className='fz-big mt-12 line-h-16'>
          Từ lúc còn là sinh viên, thầy Hoài Thương đã tham gia xây dựng và phát
          triển cộng đồng AdminVietNam – một blog chuyên về chia sẻ kiến thức an
          ninh mạng và quản trị mạng.{" "}
        </li>
        <li className='fz-big mt-12 line-h-16'>
          Đạt loại giỏi trong cuộc thi tay nghề thành phố Hồ Chí Minh –
          WorldSkills Viet Nam 2018
        </li>
      </div>
    </div>
  </div>
</>

  )
}

export default CEHGiangVien