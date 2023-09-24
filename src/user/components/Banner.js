import React from 'react'
import imgban from '../access/img/banner 3.jpg'

function Banner() {
  return (
    <section className="bg-ban">
  <div className="container mt-72">
    <div className="row home">
      <div className="col-sm-12 col-md-7">
        <div className="content">
          {/* <div class="content" style="padding: 0 108px;"> */}
          <h1>
            {" "}
            <span>Muốn học iT Chọn iSPACE thôi!</span>
            <br />
          </h1>
          <p className='fz-18'>
            Trường Cao đẳng An ninh mạng iSPACE với hơn 14 năm thành lập chuyên
            đào tạo các chuyên ngành về công nghệ thông tin hàng đầu hiện nay.
            Với phương châm "Đào tạo chuẩn Doanh nghiệp - Công nhận toàn cầu"
            thì sinh viên theo học tại iSPACE luôn được tiếp cận với kiến thức
            mới nhất từ doanh nghiệp cũng như được các công ty săn đón ngay khi
            còn ngồi trên ghế nhà trường
          </p>
          <div className="btn">
          <a className='btn btn-dangky text-white ' href='#dangkys'>Đăng Ký Ngay</a>
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-md-4">
        <div className="col">
          <div className="img d-flex justify-content-center">
            <img src={imgban} alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Banner