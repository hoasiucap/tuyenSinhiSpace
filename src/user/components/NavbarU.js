import React from 'react'
import logo from '../access/img/logo1.jpg'
import { NavLink } from 'react-router-dom'

function NavbarU() {
  return (
    <>
  {/* navbar */}
  <nav className="navbar navbar-expand-xl custom-nav navbar-light bg-light">
    <div className="container">
      <NavLink to={'/tuyenSinhiSpace/'}>
      <img src ={logo} alt="" />
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarDark"
        aria-controls="navbarDark"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse show" id="navbarDark">
        <ul className="navbar-nav ms-auto mb-2 mb-xl-0 fs-5 ms-auto p-2 text-center">
          <li className="nav-item me-3">
            <NavLink
              className="nav-link active text-color fw-600"
              aria-current="page"
              to='/tuyenSinhiSpace/'
            >
              <i className="fas fa-home" />
            </NavLink>
          </li>
          <li className="nav-item me-3 item-nav">
            <a className="nav-link text-color fw-600" href="#">
              Ngành học <i className="fas fa-angle-down" />
            </a>
            <ul className="nav-child">
              <li className="nav-child-item">
                <NavLink className="nav-link text-color fw-600 text-l" to='an-ninh-mang'>
                  An ninh mạng
                </NavLink>
              </li>
              <li className="nav-child-item">
                <NavLink className="nav-link text-color fw-600 text-l" to='phat-trien-phan-mem'>
                  Phát triển phần mềm
                </NavLink>
              </li>
              <li className="nav-child-item">
                <NavLink className="nav-link text-color fw-600 text-l" to='thiet-ke-do-hoa'>
                  Thiết kế đồ họa
                </NavLink>
              </li>
            </ul>
          </li>
          <li className="nav-item me-3 item-nav">
            <a className="nav-link text-color fw-600" href="#">
              Khóa ngắn hạn <i className="fas fa-angle-down" />
            </a>
            <ul className="nav-child">
              <li className="nav-child-item">
                <NavLink className="nav-link text-color fw-600 text-l" to='khoa-hoc-ceh'>
                  CEH
                </NavLink>
              </li>
              <li className="nav-child-item">
                <NavLink className="nav-link text-color fw-600 text-l" to='khoa-hoc-aws'>
                  AWS Cloud Foundation
                </NavLink>
              </li>
            </ul>
          </li>
          <li className="nav-item me-3">
            <NavLink className="nav-link text-color fw-600" to='dang-ky-ngay'>
              Đăng kí ngay
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  {/* navbar */}
</>

  )
}

export default NavbarU