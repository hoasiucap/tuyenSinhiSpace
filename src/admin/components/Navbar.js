import React from 'react'
import { NavLink } from 'react-router-dom';

function Navbar() {
    const handleClick = () =>{
        var el = document.getElementById("wrapper");
        el.classList.toggle("toggled");
        
        var page = document.getElementById("page-content-wrapper");
        page.classList.toggle("ml-15rem")
    }
  return (
        <nav className="navbar navbar-expand-lg z-ad-100 navbar-light bg-ispace ad-fixed-top bg-transparent py-4 px-4">
    <div className="d-flex align-items-center">
        <button onClick={handleClick} className='hidden-button'>
            <i className="fas fa-align-left primary-text fs-4 me-3" id="menu-toggle" />
        </button>
        <h2 className="fs-2 m-0 primary-text">Thống kê</h2>
    </div>
    <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
    >
        <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item dropdown">
            <a
            className="nav-link dropdown-toggle primary-text fw-bold"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            >
            <i className="fas fa-user me-2" />
            Admin
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
                <a className="dropdown-item" href="#">
                Profile
                </a>
            </li>
            <li>
                <a className="dropdown-item" href="#">
                Settings
                </a>
            </li>
            <li>
                <NavLink className="dropdown-item" to='/tuyenSinhiSpace/'>
                Logout
                </NavLink>
            </li>
            </ul>
        </li>
        </ul>
    </div>
        </nav>

  )
}

export default Navbar