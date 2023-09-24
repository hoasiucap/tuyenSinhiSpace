import React from 'react'
import BannerPhu from './BannerPhu'
import CEHThongTin from './CEHThongTin'
import CEHDoiTuong from './CEHDoiTuong'
import CEHViSao from './CEHViSao'
import CEHLoiThe from './CEHLoiThe'
import CEHGiaTri from './CEHGiaTri'
import CEHGiangVien from './CEHGiangVien'
import CEHHocPhi from './CEHHocPhi'
import CEHCTHoc from './CEHCTHoc'
import AWSCEHLienHe from './AWSCEHLienHe'
import DangKyKH from './DangKyKH'

function CEH() {
  return (
    <>
    <BannerPhu title='KHÓA HỌC CEH'/>
    <CEHThongTin/>
    <CEHDoiTuong/>
    <CEHViSao/>
    <CEHLoiThe/>
    <CEHGiaTri/>
    <CEHGiangVien/>
    <CEHHocPhi/>
    <CEHCTHoc/>
    <DangKyKH option='12'/>
    <AWSCEHLienHe/>
    </>
  )
}

export default CEH