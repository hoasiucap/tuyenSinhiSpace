import React from 'react'
import BannerPhu from './BannerPhu'
import DangKyKH from './DangKyKH'
import AWSCEHLienHe from './AWSCEHLienHe'
import ANMTuongLai from './ANMTuongLai'
import ANMChoBan from './ANMChoBan'
import ANMTuyenSinh from './ANMTuyenSinh'
import ANMLoTrinh from './ANMLoTrinh'
import ANMCTHoc from './ANMCTHoc'
import ANMHocPhi from './ANMHocPhi'

function AnNinhMang() {
  return (
    <>
    <BannerPhu title='NGÀNH AN NINH MẠNG'/>
    <ANMTuongLai/>
    <ANMChoBan/>
    <ANMTuyenSinh/>
    <div class="container" id="product-cards">
      <ANMLoTrinh/>
      <ANMCTHoc/>
      <ANMHocPhi/>
    </div>

    <DangKyKH option='1'/>
    <AWSCEHLienHe/>
    </>
  )
}

export default AnNinhMang