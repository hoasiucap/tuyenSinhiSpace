import React from 'react'
import '../access/css/404.css'
import { NavLink } from 'react-router-dom'

function Page404() {
  return (
    <section id="wrapper" className="error-page">
        <div className="error-box">
            <div className="error-body text-center">
            <h1 className="text-danger404">404</h1>
            <h3 className="text-u-404">Page Not Found !</h3>
            <p className="text-muted mt-4 mb-4">
                YOU SEEM TO BE TRYING TO FIND HIS WAY HOME
            </p>
            <NavLink
                to={'/tuyenSinhiSpace/'}
                href="index.html"
                className="btn btn-danger bg-bt404 btn-rounded waves-effect waves-light mb-4"
            >
                Back to home
            </NavLink>
            </div>
            <footer className="footer text-center">2017 © Ample Admin.</footer>
        </div>
    </section>
  )
}

export default Page404