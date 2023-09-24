import React from 'react'
import hinh from '../access/img/AWS.jpg'
import { NavLink } from 'react-router-dom'

function ContentCPAWS() {
  return (
    <div className="container" id="about">
  <h3> TOP 3 LÝ DO BẠN NÊN CHỌN AWS CLOUD FOUNDATION TẠI iSPACE </h3>
  <hr />
  <div className="row" style={{ marginTop: 50 }}>
    <div className="col-md-5 py-3 py-md-0">
      <div className="card">
        <img src={hinh} alt="" />
      </div>
    </div>
    <div
      className="col-md-7 py-3 py-md-0"
      style={{ color: "rgb(233, 141, 11)" }}
    >
      <p className='mt-12 text-dark fz-18 line-h-16'>
        💥 iSPACE là một trong những ngôi trường đối tác của AWS Academy, giáo
        trình theo chuẩn của AWS, ôn luyện sát đề, tỷ lệ thi đậu chứng chỉ cao.
      </p>
      <p className='text-dark fz-18 line-h-16'>
        💥 Học viên được học với giảng viên người việt, được hỗ trợ, giải đáp và
        hướng dẫn chi tiết trong quá trình học.
      </p>
      <p className='text-dark fz-18 line-h-16'>
        💥 Giảng viên là chuyên gia trong ngành, Ths. Lê Hoàng Bình Nguyên -
        Giảng dạy điện toán đám mây AWS cho gần một ngàn sinh viên, giảng viên
        chính thức của chương trình AWS/ReStart Việt Nam và sở hữu chứng chỉ AWS
        Certified Solutions Architect và AWS Certified Developer - Associate về
        điện toán đám mây.
      </p>
      <NavLink className='btn btn-dangky text-white' to='/khoa-hoc-aws'>Xem chi tiết</NavLink>
    </div>
  </div>
</div>

  )
}

export default ContentCPAWS