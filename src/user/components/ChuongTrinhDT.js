import React from 'react'
import hinh1 from '../access/img/ANM_1.png'
import hinh2 from '../access/img/ANM_3.png'
import hinh3 from '../access/img/ANM_2.png'
import { NavLink } from 'react-router-dom'

function ChuongTrinhDT() {
  return (
        <div className="container" id="other">
    <div className="row">
        <div className="col-md-4 py-3 py-md-0">
        <NavLink to='/an-ninh-mang' className="card">
            <img src={hinh1} alt="" />
        </NavLink>
        </div>
        <div className="col-md-4 py-3 py-md-0">
        <NavLink to='/thiet-ke-do-hoa' className="card">
            <img src={hinh2} alt="" />
        </NavLink>
        </div>
        <div className="col-md-4 py-3 py-md-0">
        <NavLink to='/phat-trien-phan-mem' className="card">
            <img src={hinh3} alt="" />
        </NavLink>
        </div>
    </div>
    </div>

  )
}

export default ChuongTrinhDT