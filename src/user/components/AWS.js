import React from 'react'
import BannerPhu from './BannerPhu'
import AWSThongTin from './AWSThongTin'
import AWSDoiTuong from './AWSDoiTuong'
import AWSViSao from './AWSViSao'
import AWSLoiThe from './AWSLoiThe'
import AWSGiaTri from './AWSGiaTri'
import AWSGiangVien from './AWSGiangVien'
import AWSHocPhi from './AWSHocPhi'
import AWSCTHoc from './AWSCTHoc'
import AWSCEHLienHe from './AWSCEHLienHe'
import DangKyKH from './DangKyKH'

function AWS() {
  return (
    <>
    <BannerPhu title='KHÓA HỌC AWS'/>
    <AWSThongTin/>
    <AWSDoiTuong/>
    <AWSViSao/>    
    <AWSLoiThe/>
    <AWSGiaTri/>
    <AWSGiangVien/>
    <AWSHocPhi/>
    <AWSCTHoc/>
    <DangKyKH option='11'/>
    <AWSCEHLienHe/>
    </>
  )
}

export default AWS