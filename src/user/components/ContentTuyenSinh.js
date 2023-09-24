import React from 'react'

function ContentTuyenSinh() {
  return (
    <div className="container" id="about">
    <h3> THÔNG TIN TUYỂN SINH 2023</h3>
    <hr />
    <div className="row" style={{ marginTop: 50 }}>
      <div className="col-md-5 py-3 py-md-0">
        <div className="card">
          <img
            src="https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/365129203_673458671475018_1035426507178668129_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=49d041&_nc_ohc=fqzU7v2nkZ4AX_AKnOl&_nc_ht=scontent.fsgn5-14.fna&oh=00_AfCbb7IFv4EsaKxxwJE4spEkgETWZd1BMU-jIP7X5v4iiw&oe=65133BBA"
            alt=""
          />
        </div>
      </div>
      <div
        className="col-md-7 py-3 py-md-0"
        style={{ color: "rgb(233, 141, 11)" }}
      >
        <p className='mt-12 text-dark fz-18 line-h-16'>
          <strong className='fz-big'>Đối tượng tuyển sinh</strong>
        </p>
        <li className='text-dark fz-18 line-h-16'>Học sinh tốt nghiệp THPT</li>
        <li className="b-16 text-dark fz-18 line-h-16">
          Sinh viên đang học tại các trường Đại học, Cao đẳng Người đi làm muốn
          tham gia lớp tối
        </li>
        <p className='text-dark fz-18 line-h-16'>
          <strong className='fz-big'>Hình thức tuyển sinh</strong>
        </p>
        <li className='text-dark fz-18 line-h-16'>Tốt nghiệp THPT</li>
        <li className="b-16 text-dark fz-18 line-h-16">Xét học bạ nhận học bổng tương ứng</li>
        <p>
          <strong className='fz-big text-dark'>Hồ sơ đăng ký</strong>
        </p>
        <li className='text-dark fz-18 line-h-16'>Sơ yếu lý lịch</li>
        <li className='text-dark fz-18 line-h-16'>Giấy khai sinh và CCCD</li>
        <li className='text-dark fz-18 line-h-16'>Hộ khẩu</li>
        <li className='text-dark fz-18 line-h-16'>Hộ khẩu</li>
        <li className='text-dark fz-18 line-h-16 b-16'>Bằng tốt nghiệp THPT</li>
        <a className='btn btn-dangky text-white' href='#dangkys'>Đăng Ký Ngay</a>
      </div>
    </div>
  </div>
  
  )
}

export default ContentTuyenSinh