import React from 'react'
import hinh from '../access/img/PTPM_2.jpg'
import hinh2 from '../access/img/PTPM_1.jpg'

function PMKhacBiet() {
  return (
    <>
    <>
  <div className="container" id="product-cards">
    <h1 className="text-center">
      HỌC PHÁT TRIỂN PHẦN MỀM TẠI iSPACE CÓ GÌ KHÁC BIỆT?
    </h1>
    <div className="row" style={{ marginTop: 30 }}></div>
  </div>
  <div className="container" id="about">
    <div className="row" style={{ marginTop: 50 }}>
      <div className="col-md-5 py-3 py-md-0">
        <div className="card">
          <img src={hinh} alt="" />
        </div>
      </div>
      <div className="col-md-7 py-3 py-md-0">
        <li className='mt-12 fz-18 line-h-16'>
          {" "}
          Thành lập từ những năm 2008, đến nay iSPACE đã có gần 15 kinh nghiệm
          đào tạo trong lĩnh vực công nghệ thông tin.
        </li>
        <li className='mt-12 fz-18 line-h-16'>
          Tại iSPACE, ngành phát triển phần mềm được thiết kế tối thiểu 500 giờ
          trải nghiệm thực tế dưới sự hướng dẫn của doanh nghiệp. Sinh viên sẽ
          được rèn luyện kĩ năng chuyên môn, tích lũy kinh nghiệm thông qua quá
          trình học tập tại doanh nghiệp cùng các sản phẩm có khả năng được ứng
          dụng trong thực tế.{/*;*/}
        </li>
        <li className='mt-12 fz-18 line-h-16'>
          Giảng viên là những chuyên gia trong ngành, mang đến cho các bạn sinh
          viên những kiến thức hữu ích với những bài học từ dự án thực tế
        </li>
      </div>
    </div>
  </div>
  <div className="container" id="product-cards">
  <div className="row" style={{ marginTop: 30 }}>
    <img src={hinh2} alt="" />
  </div>
</div>

</>

    </>
  )
}

export default PMKhacBiet