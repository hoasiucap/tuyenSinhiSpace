import React from 'react'
import hk1 from '../access/img/ICON-HOC-KY-01-1024x199.png'
import hk2 from '../access/img/ICON-HOC-KY-02-1024x200 (1).png'
import hk3 from '../access/img/ICON-HOC-KY-03-1024x200.png'
import hk4 from '../access/img/ICON-HOC-KY-04-1024x199.png'
import hk5 from '../access/img/ICON-HOC-KY-05-1024x199.png'
import hk6 from '../access/img/ICON-HOC-KY-06-1024x200.png'
import hk7 from '../access/img/ICON-HOC-KY-07-1024x200.png'

function PMCTHoc() {
  return (
    <div className="container" id="product-cards">
  <h1 className="text-center">NỘI DUNG CHƯƠNG TRÌNH HỌC</h1>
  <div className="row" style={{ marginTop: 10 }}>
    <div className="container" id="product-cards">
      <div className="row rg-24" style={{ marginTop: 30 }}>
        <div className="col-md-3 py-3 py-md-0">
          <div className="card h-100">
            <img src={hk1} alt="" />
            <div className="card-body">
              <li>Đại cương về CNTT</li>
              <li>Cơ sở lập trình</li>
              <li>Kiến trúc máy tính và Hệ điều hành </li>
              <li>Toán ứng dụng cho Tin học</li>
              <li>Mạng căn bản</li>
            </div>
          </div>
        </div>
        <div className="col-md-3 py-3 py-md-0">
          <div className="card h-100">
            <img src={hk2} alt="" />
            <div className="card-body">
              <li>Kỹ thuật lập trình</li>
              <li>Lập trình hướng đối tượng</li>
              <li>Ngôn ngữ lập trình C#/Java/PHP</li>
              <li>Cơ sở dữ liệu</li>
              <li>Đồ án 1</li>
            </div>
          </div>
        </div>
        <div className="col-md-3 py-3 py-md-0">
          <div className="card h-100">
            <img src={hk3} alt="" />
            <div className="card-body">
              <li>Cấu trúc dữ liệu và giải thuật</li>
              <li>Lập trình Web 1</li>
              <li>Thiết kế Web 1</li>
              <li>Nhập môn Công nghệ phần mềm</li>
            </div>
          </div>
        </div>
        <div className="col-md-3 py-3 py-md-0">
          <div className="card h-100">
            <img src={hk4} alt="" />
            <div className="card-body">
              <li>Thiết kế Web 2</li>
              <li> Lập trình Web 2</li>
              <li>Phân tích và thiết kế phần mềm</li>
              <li>Kiểm thử phần mềm</li>
              <li>Đồ án 2</li>
            </div>
          </div>
        </div>
        <div className="col-md-3 py-3 py-md-0">
          <div className="card h-100">
            <img src={hk5} alt="" />
            <div className="card-body">
              <li>Nhập môn Trí tuệ nhân tạo</li>
              <li>Kỹ năng nghề nghiệp</li>
              <li>Lập trình Web 3</li>
              <li>Bảo mật Web và ứng dụng</li>
              <li>Đồ án 3</li>
            </div>
          </div>
        </div>
        <div className="col-md-3 py-3 py-md-0">
          <div className="card h-100">
            <img src={hk6} alt="" />
            <div className="card-body">
              <li>Thực tập tốt nghiệp</li>
              <li>Chuyên đề hãng CN/DN</li>
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

export default PMCTHoc