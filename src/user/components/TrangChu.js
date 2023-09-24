import React from 'react'
import Banner from './Banner'
import ContentLyDo from './ContentLyDo'
import ChuongTrinhDT from './ChuongTrinhDT'
import ContentBanCoHop from './ContentBanCoHop'
import ContentCPCEH from './ContentCPCEH'
import ContentCPAWS from './ContentCPAWS'
import ContentTuyenSinh from './ContentTuyenSinh'
import DangKyNgay from './DangKyNgay'
import DoanhNghiep from './DoanhNghiep'
import NavbarU from './NavbarU'
import AWSCEHLienHe from './AWSCEHLienHe'

function TrangChu() {
  return (
    <>
        <Banner/>
        <ContentLyDo/>
    <div className="container" id="product-cards">
      <h1 className="text-center">Chương Trình Đào Tạo</h1>
      <h2
        className="h2-title text-dark"
        style={{ textAlign: "center", fontSize: 19,margin: '12px 0', color: "rgb(237, 147, 12)" }}
      >
        Thời gian học: <strong>Trong 2.5 năm gồm 7 học kì</strong>
      </h2>
      <h2
        className="h2-title text-dark"
        style={{ textAlign: "center", fontSize: 19 }}
      >
        Điều kiện đăng ký: <strong>Xét tuyển học bạ</strong>
      </h2>
      <ChuongTrinhDT/>
      <ContentBanCoHop/>
      <ContentCPCEH/>
      <ContentCPAWS/>
      <ContentTuyenSinh/>
      <DangKyNgay/>
      <DoanhNghiep/>
      <AWSCEHLienHe/>
      </div>
    </>
  )
}

export default TrangChu