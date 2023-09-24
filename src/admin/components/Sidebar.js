import React from 'react'
import {NavLink} from 'react-router-dom'
import ispace from '../access/img/bg-logo.png';

function Sidebar(props) {
    const {cl , id} = props
  return (
    <div className={cl} id={id}>
  <div className="sidebar-heading text-center primary-text fs-4 fw-bold border-bottom" style={{padding: '15px 0 !important'}}>
    <NavLink to='/admin' style={{textDecoration:'none', color: 'orange'}}>
      <img src={ispace} alt="ispace" style={{objectFit: 'cover', width: '58px'}} />
      <span style={{marginLeft: '7px'}}>iSPACE</span>
    </NavLink>
    {/* <i className="fas fa-user-secret me-2" /> */}
    {/* iSPACE */}
  </div>

  <div className="list-group list-group-flush my-3">
    <NavLink
      to={'/admin/nganh-hoc'}
      className="list-group-item list-group-item-action bg-transparent second-text fw-bold"
    >
      <i className="fas fa-tachometer-alt me-2" />
      Ngành học
    </NavLink>
    <NavLink to={'/admin/khoa-hoc'}
      href="#"
      className="list-group-item list-group-item-action bg-transparent second-text fw-bold"
    >
      <i className="fas fa-project-diagram me-2" />
      Khóa học ngắn hạn
    </NavLink>
    <NavLink to = '/'
      href="#"
      className="list-group-item list-group-item-action bg-transparent text-danger fw-bold"
    >
      <i className="fas fa-power-off me-2" />
      Logout
    </NavLink>
  </div>
</div>

  )
}

export default Sidebar