import React from 'react'
import hinh from '../access/img/TKDH_4.jpg'
import hinh1 from '../access/img/THIET-KE-DO-HOA.jpg'

function DHTaiiSpace() {
  return (
    <>
  <div className="container" id="product-cards">
    <h1 className="text-center">HỌC THIẾT KẾ ĐỒ HỌA TẠI iSPACE</h1>
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
          Thành thạo các công cụ trong thiết kế như: Photoshop, Illustrator,
          Indesign,...
        </li>
        <li className='mt-12 fz-18 line-h-16'>
          Được học các kiến thức về hình ảnh và nguyên tắc mỹ thuật, nguyên lý
          thiết kế, cách tìm ý tưởng và tạo nên những ý tưởng sáng tạo mới.
        </li>
        <li className='mt-12 fz-18 line-h-16'>Rèn kỹ năng thiết kế và sáng tạo thông qua những dự án thực tế</li>
        <li>
          Rèn luyện các kỹ năng mềm thông qua các hoạt động ngoại khóa ở trường
          và các sự kiện của CLB Truyền thông P.R.O
        </li>
        <li className='mt-12 fz-18 line-h-16'>
          Biết cách xây dựng Portfolio cá nhân đỉnh, “ghi điểm” trước nhà tuyển
          dụng.{" "}
        </li>
      </div>
    </div>
  </div>
  <div className="container" id="product-cards">
  <div className="row" style={{ marginTop: 30 }}>
    <img src={hinh1} alt="" />
  </div>
</div>

</>

  )
}

export default DHTaiiSpace