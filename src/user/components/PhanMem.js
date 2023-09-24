import React from 'react'
import BannerPhu from './BannerPhu'
import DangKyKH from './DangKyKH'
import AWSCEHLienHe from './AWSCEHLienHe'
import PMHocPTPM from './PMHocPTPM'
import PMKhacBiet from './PMKhacBiet'
import PMTuyenSinh from './PMTuyenSinh'
import PMLoTrinh from './PMLoTrinh'
import PMCTHoc from './PMCTHoc'
import PMHocPhi from './PMHocPhi'

function PhanMem() {
  return (
    <>
    <BannerPhu title='NGÀNH PHÁT TRIỂN PHẦN MỀM'/>
    <PMHocPTPM/>
    <PMKhacBiet/>
    <PMTuyenSinh/>
    <div class="container" id="product-cards">
      <PMLoTrinh/>
      <PMCTHoc/>
      <PMHocPhi/>
    </div>


    <DangKyKH option='2'/>


    <AWSCEHLienHe/>
    </>
    
  )
}

export default PhanMem