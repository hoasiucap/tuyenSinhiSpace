import React from 'react'
import BannerPhu from './BannerPhu'
import DangKyKH from './DangKyKH'
import AWSCEHLienHe from './AWSCEHLienHe'
import DHXetHocBa from './DHXetHocBa'
import DHKhoiDauST from './DHKhoiDauST'
import DHTaiiSpace from './DHTaiiSpace'
import DHTuyenSinh from './DHTuyenSinh'
import DHLoTrinh from './DHLoTrinh'
import DHCTHoc from './DHCTHoc'
import DHHocPhi from './DHHocPhi'

function DoHoa() {
  return (
    <>
    <BannerPhu title='NGÀNH THIẾT KẾ ĐỒ HỌA'/>
    <DHXetHocBa/>
    <DHKhoiDauST/>
    <DHTaiiSpace/>
    <DHTuyenSinh/>
    <div class="container" id="product-cards">
      <DHLoTrinh/>
      <DHCTHoc/>
      <DHHocPhi/>
    </div>



    <DangKyKH option='3'/>


    <AWSCEHLienHe/>
    </>
  )
}

export default DoHoa