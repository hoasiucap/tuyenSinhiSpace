import React from 'react'
import hk1 from '../access/img/ICON-HOC-KY-01-1024x199.png'
import hk2 from '../access/img/ICON-HOC-KY-02-1024x200 (1).png'
import hk3 from '../access/img/ICON-HOC-KY-03-1024x200.png'
import hk4 from '../access/img/ICON-HOC-KY-04-1024x199.png'
import hk5 from '../access/img/ICON-HOC-KY-05-1024x199.png'
import hk6 from '../access/img/ICON-HOC-KY-06-1024x200.png'
import hk7 from '../access/img/ICON-HOC-KY-07-1024x200.png'

function DHCTHoc() {
  return (
    <div className="container" id="product-cards">
  <h1 className="text-center">NỘI DUNG CHƯƠNG TRÌNH HỌC</h1>
  <div className="row" style={{ marginTop: 10 }}>
    <div className="container" id="product-cards">
      <div className="row row rg-24" style={{ marginTop: 30 }}>
        <div className="col-md-3 py-3 py-md-0">
          <div className="card h-100">
            <img src={hk1} alt="" />
            <div className="card-body">
              <li>Đồ họa căn bản</li>
              <li>Mỹ thuật đồ họa</li>
              <li>Khoa học màu sắc</li>
              <li>Photoshop cơ bản</li>
              <li>Trang trí đồ họa</li>
            </div>
          </div>
        </div>
        <div className="col-md-3 py-3 py-md-0">
          <div className="card h-100">
            <img src={hk2} alt="" />
            <div className="card-body">
              <li>Nguyên lý thị giác</li>
              <li>Kỹ thuật nhiếp ảnh</li>
              <li>Illustrator</li>
              <li>Photoshop nâng cao</li>
              <li>Đồ án 1</li>
            </div>
          </div>
        </div>
        <div className="col-md-3 py-3 py-md-0">
          <div className="card h-100">
            <img src={hk3} alt="" />
            <div className="card-body">
              <li>In Design</li>
              <li>Kỹ thuật in</li>
              <li>Ý tưởng sáng tạo</li>
              <li>Digital Marketing</li>
              <li>Nghệ thuật chữ</li>
            </div>
          </div>
        </div>
        <div className="col-md-3 py-3 py-md-0">
          <div className="card h-100">
            <img src={hk4} alt="" />
            <div className="card-body">
              <li>Thiết kế bao bì</li>
              <li>Thiết kế nhận dạng thương hiệu</li>
              <li>Thiết kế giao diện Web</li>
              <li>Nguyên lý thiết kế đồ họa</li>
              <li>Đồ án 2</li>
            </div>
          </div>
        </div>
        <div className="col-md-3 py-3 py-md-0">
          <div className="card h-100">
            <img src={hk5} alt="" />
            <div className="card-body">
              <li>Kỹ năng nghề nghiệp</li>
              <li>Kỹ thuật quay phim</li>
              <li>Xử lý phim – Adobe Premier</li>
              <li>Nguyên lý thiết kế nội thất</li>
              <li>Autocad 2D</li>
              <li>Dựng phối cảnh nội thất 3D – SketchUp</li>
            </div>
          </div>
        </div>
        <div className="col-md-3 py-3 py-md-0">
          <div className="card h-100">
            <img src={hk6} alt="" />
            <div className="card-body">
              <li>Đồ án 3</li>
              <li>Chuyên đề hãng CN/DN</li>
              <li>Thực tập tốt nghiệp</li>
            </div>
          </div>
        </div>
        <div className="col-md-3 py-3 py-md-0">
          <div className="card h-100">
            <img src={hk7} alt="" />
            <div className="card-body">
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

export default DHCTHoc