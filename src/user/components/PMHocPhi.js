import React from 'react'
import hinh1 from '../access/img/Hocphi_2.jpg'
import hinh2 from '../access/img/BIEU-PHI-CHINH-CQ-A5-02.jpg'

function PMHocPhi() {
  return (
    <div className="container" id="product-cards">
  <h1 className="text-center">Học Phí</h1>
  <div className="row" style={{ marginTop: 30 }}>
    <img src={hinh1} alt="" />
  </div>
  <div className="row" style={{ marginTop: 30 }}>
    <img src={hinh2} alt="" />
  </div>
</div>

  )
}

export default PMHocPhi