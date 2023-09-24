import React from 'react'
import tNguyen from '../access/img/TNguyen.jpg'

function AWSGiangVien() {
  return (
    <>
  <div className="container" id="product-cards">
    <h1 className="text-center">THÔNG TIN GIẢNG VIÊN</h1>
    <div className="row" style={{ marginTop: 30 }}></div>
  </div>
  <div className="container" id="about">
    <div className="row" style={{ marginTop: 50 }}>
      <div className="col-md-3 py-3 py-md-0">
        <div className="card">
          <img src={tNguyen} alt="" style={{height: '396px', objectFit: 'cover'}}/>
        </div>
      </div>
      <div className="col-md-7 py-3 py-md-0 fz-big line-h-16">
        <p className='mt-12'>Ths Lê Hoàng Bình Nguyên</p>
        <li className='fz-big mt-12 line-h-16'>Phó trưởng khoa Công nghệ thông tin</li>
        <li>
          Có hơn 5 năm giảng dạy tại nhiều trường Đại học danh tiếng ở Việt Nam
        </li>
        <li className='fz-big mt-12 line-h-16'>
          Là huấn luyện viên của nhiều cuộc thi chuyên môn uy tín dành cho sinh
          viên
        </li>
        <li className='fz-big mt-12 line-h-16'>
          Sở hữu chứng chỉ AWS Certified Solutions Architect và AWS Certified
          Developer – Associate về điện toán đám mây
        </li>
        <li className='fz-big mt-12 line-h-16'>
          Từng chiến thắng các cuộc thi chuyên môn uy tín như từ khi còn là sinh
          viên: Olympic Tin học sinh viên Việt Nam, Lập trình sinh viên quốc tế
          ICPC,…
        </li>
        <li className='fz-big mt-12 line-h-16'>
          Giảng dạy điện toán đám mây AWS cho gần một ngàn sinh viên, giảng viên
          các trường đại học, cao đẳng của Việt Nam và hiện là giảng viên chính
          thức của chương trình AWS/ReStart Việt Nam
        </li>
      </div>
    </div>
  </div>
</>

  )
}

export default AWSGiangVien