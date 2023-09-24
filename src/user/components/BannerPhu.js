import React from 'react'
import banner from '../access/img/bannervip.jpeg'

function BannerPhu(props) {
    const {title} = props 
  return (
    <>
    <section className="bg-ban-phu">
    <div className="container mt-72">
      <div className="row home" style={{background: 'transparent'}}>
        <div className="">
          <div className="content" style={{zIndex: '12 !'}}>
            {/* <div class="content" style="padding: 0 108px;"> */}
            <h1>
              <span></span>
              <br />
            </h1>
          </div>
        </div>
        <div className="">
          <div className="col">
            <div className=" d-flex justify-content-center">
              {/* <img src={banner} className='banner-phu' alt="" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
      </section>

      <section className="bg-ban-phu-hoa">
    <div className="container">
      <div className="row home" style={{background: 'transparent'}}>
        <div className="">
          <div className="content" style={{zIndex: '12 !'}}>
            {/* <div class="content" style="padding: 0 108px;"> */}
            <h1>
            <i class="fas fa-user-astronaut" style={{color:'#fff'}}></i>
              <span style={{color: '#fff'}}> {title}</span>
              <br />
            </h1>
          </div>
        </div>
        <div className="">
          <div className="col">
            <div className=" d-flex justify-content-center">
              {/* <img src={banner} className='banner-phu' alt="" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
      </section>
    </>

  )
}

export default BannerPhu