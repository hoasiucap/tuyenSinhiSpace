import React from 'react'
import hk1 from '../access/img/TKHD_HK1.png'
import hk2 from '../access/img/TKDH_HK2.png'
import hk3 from '../access/img/TKDH_HK3.png'
import hk4 from '../access/img/TKDH_HK4.png'
import hk5 from '../access/img/TKDH_HK5.png'
import hk6 from '../access/img/TKDH_HK6.png'
import hk7 from '../access/img/ANM_HK7 (1).png'
import hkss from '../access/img/songsong.png'

function DHLoTrinh() {
  return (
    <>
  <h1 className="text-center">Lộ Trình Học</h1>
  <div className="row" style={{ marginTop: 20 }}>
    <div className="container" id="product-cards">
      <div className="row" style={{ marginTop: 30 }}>
        <div className="col-md-3 py-3 py-md-0">
          <div className="card">
            <img src={hk1} alt="" />
          </div>
        </div>
        <div className="col-md-3 py-3 py-md-0">
          <div className="card">
            <img src={hk2} alt="" />
          </div>
        </div>
        <div className="col-md-3 py-3 py-md-0">
          <div className="card">
            <img src={hk3} alt="" />
          </div>
        </div>
        <div className="col-md-3 py-3 py-md-0">
          <div className="card">
            <img src={hk4} alt="" />
          </div>
        </div>
      </div>
      <div className="row" style={{ marginTop: 30 }}>
        <div className="col-md-3 py-3 py-md-0">
          <div className="card">
            <img src={hk5} alt="" />
          </div>
        </div>
        <div className="col-md-3 py-3 py-md-0">
          <div className="card">
            <img src={hk6} alt="" />
          </div>
        </div>
        <div className="col-md-3 py-3 py-md-0">
          <div className="card">
            <img src={hk7} alt="" />
          </div>
        </div>
      </div>
      <div className="container" id="product-cards">
        <div className="row" style={{ marginTop: 30 }}>
          <img src={hkss} alt="" />
        </div>
      </div>
    </div>
  </div>
</>

  )
}

export default DHLoTrinh