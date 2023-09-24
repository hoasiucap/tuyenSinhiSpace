import React from 'react'
import reson1 from '../access/img/b1.png'
import reson2 from '../access/img/b2.jpg'
import reson3 from '../access/img/b3.jpg'
import reson4 from '../access/img/b4.png'

function ContentLyDo() {
  return (
    <div className="container" id="product-cards">
  <h1 className="text-center">4 LÝ DO NÊN CHỌN THEO HỌC TẠI iSPACE</h1>
  <div className="container" id="product-cards">
    <div className="row" style={{ marginTop: 30 }}>
      <div className="col-md-3 py-3 py-md-0">
        <div className="card">
          <img src={reson1} alt="" />
          <div className="card-body">
            <h3 className="text-center fw-bold">VỚI HƠN 14 NĂM ĐÀO TẠO</h3>
            <p className="text-center fz-18">
              iSPACE chuyên đào tạo về ngành CNTT với hơn 14 năm kinh nghiệm đào
              tạo
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-3 py-3 py-md-0">
        <div className="card">
          <img src={reson2} alt="" />
          <div className="card-body">
            <h3 className="text-center fw-bold">CHƯƠNG TRÌNH QUỐC TẾ</h3>
            <p className="text-center fz-18">
              Liên kết và là đối tác giáo dục với các doanh nghiệp trong và
              ngoài nước
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-3 py-3 py-md-0">
        <div className="card" style={{ height: "100%" }}>
          <img src={reson3} alt="" />
          <div className="card-body">
            <h3 className="text-center fw-bold">HỌC PHÍ ĐẢM BẢO</h3>
            <p className="text-center fz-18">
              Trường cam kết không tăng học phí qua các năm + Ưu đãi học bổng
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-3 py-3 py-md-0">
        <div className="card">
          <img src={reson4} alt="" />
          <div className="card-body">
            <h3 className="text-center fw-bold">CAM KẾT VIỆC LÀM</h3>
            <p className="text-center fz-18">
              Sinh viên được cam kết việc làm sau khi ra trường và làm việc đúng
              chuyên ngành{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default ContentLyDo