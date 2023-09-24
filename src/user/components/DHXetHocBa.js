import React from 'react'
import hinh from '../access/img/TKDH_1.jpg'

function DHXetHocBa() {
  return (
    <>
  <div className="container" id="product-cards">
    <h1 className="text-center">
      XÉT TUYỂN HỌC BẠ - KHÔNG THI TUYỂN - KHÔNG THI VẼ ĐẦU VÀO
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
        <p className='mt-12 fz-big fw-bold'>
          🚀 Với hình thức xét tuyển học bạ của iSPACE, bạn có thể học Thiết kế
          đồ họa mà không cần lo lắng về các bước thi tuyển hay vẽ đầu vào
        </p>
        <li className='fz-18 line-h-16'>
          Thời gian đào tạo ngắn hạn chỉ trong 2,5 năm, nhận bằng cao đẳng, tốt
          nghiệp đi làm ngay.{" "}
        </li>
        <li className='fz-18 line-h-16 mt-12'>
          Môi trường học tập năng động, sinh viên được tham gia các hoạt động ở
          CLB chuyên môn, rèn kỹ năng và nâng cao tay nghề thiết kế
        </li>
        <li className='fz-18 line-h-16 mt-12'>
          Giảng viên là chuyên gia trong ngành, tận tâm trong giảng dạy, đưa dự
          án thực tế vào những tiết học hàng ngày
        </li>
      </div>
    </div>
  </div>
</>

  )
}

export default DHXetHocBa