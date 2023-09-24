import React from 'react'
import hinhceh from '../access/img/CEH.jpg'
import { NavLink } from 'react-router-dom'

function ContentCPCEH() {
  return (
    <div className="container" id="about">
  <h3> CHINH PHỤC NGAY CHỨNG CHỈ CEH VỚI iSPACE </h3>
  <hr />
  <div className="row" style={{ marginTop: 50 }}>
    <div className="col-md-5 py-3 py-md-0">
      <div className="card">
        <img src={hinhceh} alt="" />
      </div>
    </div>
    <div
      className="col-md-7 py-3 py-md-0"
      style={{ color: "rgb(233, 141, 11)" }}
    >
      <p className='mt-12 text-dark fz-18 line-h-16'>
        🔥 Khám phá ngay khóa học CEH tại iSPACE, khóa học dành cho người muốn
        chinh phục chứng chỉ CEH chỉ sau 40 giờ học.
      </p>
      <li className='text-dark fz-18 line-h-16'>
        Bạn là chuyên viên công nghệ thông tin muốn nâng cao kiến thức về an
        ninh mạng?
      </li>
      <li className='text-dark fz-18 line-h-16 mt-12'>
        Nhưng có quá nhiều kiến thức về lỗ hổng, bảo mật khiến bạn không biết
        nên học như thế nào?
      </li>
      <li className='mb-15 text-dark fz-18 line-h-16 mt-12'>
        Bạn mong muốn có một trung tâm giúp bạn học nhanh, nắm chắc kiến thức để
        chinh phục ngay chứng chỉ CEH?
      </li>
      <NavLink className='btn btn-dangky text-white' to='/khoa-hoc-ceh'>Xem chi tiết</NavLink>
    </div>
  </div>
</div>

  )
}

export default ContentCPCEH