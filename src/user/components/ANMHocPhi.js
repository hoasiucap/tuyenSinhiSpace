import React from 'react'
import hocphi from '../access/img/Hocphi_2.jpg'
import hocphi2 from '../access/img/BIEU-PHI-CHINH-CQ-A5-02.jpg'

function ANMHocPhi() {
  return (
    <div className="container" id="product-cards">
  <h1 className="text-center">Học Phí</h1>
  <div className="row" style={{ marginTop: 30 }}>
    <img src={hocphi} alt="" />
  </div>
  <div className="row" style={{ marginTop: 30 }}>
    <img src={hocphi2} alt="" />
  </div>
</div>

  )
}

export default ANMHocPhi