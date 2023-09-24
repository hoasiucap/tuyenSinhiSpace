import React from 'react'
import DangKyNgay from './DangKyNgay'
import Map from './Map'
import BannerPhu from './BannerPhu'
import AWSCEHLienHe from './AWSCEHLienHe'

function DangKy() {
  return (
    <>
    <BannerPhu title='ĐĂNG KÍ'/>
    <div className="container-fluid">
        <div className="row d-flex justify-content-center">
            <div className="col" style={{display: 'flex', justifyContent: 'center'}}>
                <DangKyNgay/>
            </div>
        </div>
        <div className="row">
        </div>
    </div>
    <AWSCEHLienHe/>
    </>
  )
}

export default DangKy