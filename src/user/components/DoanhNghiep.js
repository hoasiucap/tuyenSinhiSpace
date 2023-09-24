import React from 'react'
import dt1 from '../access/img/doitac_1.jpg'
import dt2 from '../access/img/doitac_2.jpg'
import dt3 from '../access/img/doitac_3.jpg'
import dt4 from '../access/img/doitac_4.jpg'
import dt5 from '../access/img/doitac_5.jpg'
import dt6 from '../access/img/doitac_6.jpg'
import dt7 from '../access/img/doitac_7.jpg'
import dt8 from '../access/img/doitac_7.png'

function DoanhNghiep() {
  return (
    <>
        <div className="container" id="product-card">
            <h1 className="text-center">Doanh Nghiệp</h1>
            <div className="row" style={{ marginTop: 30 }}></div>
        </div>
    <div className="container" id="product-cards">
    <div className="row" style={{ marginTop: 30, gap: '18px 0' }}>
        <div className="col-md-3 py-3 py-md-0">
        <div className="card">
            <img src={dt1} alt="" />
        </div>
        </div>
        <div className="col-md-3 py-3 py-md-0">
        <div className="card">
            <img src={dt2} alt="" />
        </div>
        </div>
        <div className="col-md-3 py-3 py-md-0">
        <div className="card">
            <img src={dt3} alt="" />
        </div>
        </div>
        <div className="col-md-3 py-3 py-md-0">
        <div className="card">
            <img src={dt4} alt="" />
        </div>
        </div>
        <div className="col-md-3 py-3 py-md-0">
        <div className="card">
            <img src={dt5} alt="" />
        </div>
        </div>
        <div className="col-md-3 py-3 py-md-0">
        <div className="card">
            <img src={dt6} alt="" />
        </div>
        </div>
        <div className="col-md-3 py-3 py-md-0">
        <div className="card">
            <img src={dt7} alt="" />
        </div>
        </div>
        <div className="col-md-3 py-3 py-md-0">
        <div className="card">
            <img src={dt8} alt="" />
        </div>
        </div>
    </div>
        </div>
    </>


  )
}

export default DoanhNghiep