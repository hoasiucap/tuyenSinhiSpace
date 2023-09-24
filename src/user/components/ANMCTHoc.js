import React from 'react'
import iconhk1 from '../access/img/ICON-HOC-KY-01-1024x199.png'
import iconhk2 from '../access/img/ICON-HOC-KY-02-1024x200 (1).png'
import iconhk3 from '../access/img/ICON-HOC-KY-03-1024x200.png'
import iconhk4 from '../access/img/ICON-HOC-KY-04-1024x199.png'
import iconhk5 from '../access/img/ICON-HOC-KY-05-1024x199.png'
import iconhk6 from '../access/img/ICON-HOC-KY-06-1024x200.png'
import iconhk7 from '../access/img/ICON-HOC-KY-07-1024x200.png'

function ANMCTHoc() {
  return (
    <div className="container" id="product-cards">
  <h1 className="text-center">NỘI DUNG CHƯƠNG TRÌNH HỌC</h1>
  <div className="row" style={{ marginTop: 10 }}>
    <div className="container" id="product-cards">
      <div className="row rg-24" style={{ marginTop: 30 }}>
        <div className="col-md-3 py-3 py-md-0">
          <div className="card h-100">
            <img src={iconhk1} alt="" />
            <div className="card-body">
              <li>Đại cương về CNTT</li>
              <li>Cơ sở lập trình</li>
              <li>Kiến trúc máy tính và Hệ điều hành </li>
              <li>Toán ứng dụng cho Tin học</li>
            </div>
          </div>
        </div>
        <div className="col-md-3 py-3 py-md-0">
          <div className="card h-100">
            <img src={iconhk2} alt="" />
            <div className="card-body">
              <li>Mạng máy tính căn bản</li>
              <li>Cấu trúc dữ liệu và giải thuật</li>
              <li>Ngôn ngữ lập trình Python</li>
              <li>Luật ANM và đạo đức trong lĩnh vực CNTT</li>
            </div>
          </div>
        </div>
        <div className="col-md-3 py-3 py-md-0">
          <div className="card h-100">
            <img src={iconhk3} alt="" />
            <div className="card-body">
              <li>Mạng máy tính nâng cao</li>
              <li>Quản trị hệ thống mạng</li>
              <li>An ninh mạng</li>
              <li>Điện toán đám mây</li>
            </div>
          </div>
        </div>
        <div className="col-md-3 py-3 py-md-0">
          <div className="card h-100">
            <img src={iconhk4} alt="" />
            <div className="card-body">
              <li>Bảo mật ứng dụng Web</li>
              <li>Kiểm thử An toàn thông tin</li>
              <li>Thâm nhập và phòng thủ</li>
              <li>Mật mã và An toàn thông tin</li>
            </div>
          </div>
        </div>
        <div className="col-md-3 py-3 py-md-0">
          <div className="card h-100">
            <img src={iconhk5} alt="" />
            <div className="card-body">
              <li>Điều tra số</li>
              <li>Phân tích và Đánh giá An toàn thông tin</li>
              <li>Bảo mật hệ thống thông tin</li>
              <li>Hệ thống giám sát An toàn thông tin</li>
            </div>
          </div>
        </div>
        <div className="col-md-3 py-3 py-md-0">
          <div className="card h-100">
            <img src={iconhk6} alt="" />
            <div className="card-body">
              <li>Phân tích mã độc và kỹ thuật dịch ngược</li>
              <li>Ứng cứu sự cố an ninh mạng</li>
              <li>Chuyên đề hãng CN/DN</li>
              <li>Đồ án An ninh mạng</li>
            </div>
          </div>
        </div>
        <div className="col-md-3 py-3 py-md-0">
          <div className="card h-100">
            <img src={iconhk7} alt="" />
            <div className="card-body">
              <li>Thực tập tốt nghiệp</li>
              <li>Bảo vệ đồ án tốt nghiệp</li>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default ANMCTHoc