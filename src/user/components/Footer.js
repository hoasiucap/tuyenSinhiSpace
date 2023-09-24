import React from 'react'
import arrow from '../access/img/arrow.png'

function Footer() {
  return (
    <>
  <footer id="footer" style={{Width: '100vw'}}>
    <div className="container py-4 d-flex justify-content-center align-items-center">
      <div className="copyright">
        © Copyright{" "}
        <strong>
          <span>iSPACE</span>
        </strong>
        . All Rights Reserved
      </div>
    </div>
  </footer>
  {/* footer */}
  <a href="#" className="arrow">
    <i>
      <img src={arrow} alt="" />
    </i>
  </a>
</>

  )
}

export default Footer