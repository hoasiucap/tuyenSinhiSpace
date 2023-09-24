import { useState } from "react"
import React from 'react'
import axios from 'axios'

function DangKyKH(props) {
  const {option} = props
    const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [target, setTarget] = useState('')
  const handleSubmit = (e) =>{
    e.preventDefault()
    const data = {
      Name: name,
      Phone: phone,
      Email: email,
      Major: option,
      Target: target,
      Time: new Date().toString()
  }
    axios.post('https://sheet.best/api/sheets/62172f81-7cc8-454a-951c-ece76cdea654', data)
    .then (res => {
        console.log(res)
        setName('')
        setEmail('')
        setPhone('')
        setTarget('')
        alert('Gửi thông tin đăng ký thành công')
    })
    .catch(err => {
      console.log(err)
      alert('Đã Có Lỗi xảy ra vui lòng thử lại sau')
    })
  } 
  return (
    <>
        <div className="container" id='dangkys1' style={{ margin: "54px auto" }}>
  <div className="row"> 
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="card card-registration my-4">
              <div className="row g-0 d-flex justify-content-center align-items-center">
                <div className="col-xl-4 d-none d-xl-block">
                  {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp" alt="Sample photo" class="img-fluid" style="border-top-left-radius: .25rem; border-bottom-left-radius: .25rem;" /> */}
                  <img
                    src="https://w.ladicdn.com/s700x850/61a046d06f6075006912857e/z3795812854537_d194a40e868f769458c1d25511e3cbed-20221013082034-yqu8m.jpg"
                    alt="Sample photo"
                    className="img-fluid"
                    style={{
                        height: '600px',
                      borderTopLeftRadius: ".25rem",
                      borderBottomLeftRadius: ".25rem"
                    }}
                  />
                </div>
                <div className="col-xl-6">
                  <div className="card-body p-md-5 text-black">
                    <h3
                      className="mb-5 fw-bold text-center fs-2r"
                      style={{ fontSize: '2rem !important' }}
                    >
                      Đăng kí ngay
                    </h3>
                    <form onSubmit={handleSubmit}>
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example8">
                          Họ và tên <span style={{color: 'red', fontSize: '20px'}}>*</span>
                        </label>
                        <input
                          value={name}
                          onChange={(e)=> {setName(e.target.value)}}
                          required
                          type="text"
                          id="form3Example8"
                          className="form-control form-control-lg"
                        />
                      </div>
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example8">
                          Số điện thoại <span style={{color: 'red', fontSize: '20px'}}>*</span>
                        </label>
                        <input
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          required
                          type="text"
                          id="form3Example8"
                          className="form-control form-control-lg"
                        />
                      </div>
                      <div className="form-outline mb-4">
                        <label className="form-label"  htmlFor="form3Example8">
                          Email <span style={{color: 'red', fontSize: '20px'}}>*</span>
                        </label>
                        <input
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          type="email"
                          id="form3Example8"
                          className="form-control form-control-lg"
                        />
                      </div>
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example97">
                          Đối tượng đăng kí <span style={{color: 'red', fontSize: '20px'}}>*</span>
                        </label>
                        <select
                          value={target}
                          onChange={(e) => setTarget(e.target.value)}
                          required
                          id="form3Example97"
                          className="form-control form-control-lg"
                        >
                          <option value="" disabled="" selected="">
                            --Vui lòng chọn--
                          </option>
                          <option value="1">Học sinh đang học lớp 12</option>
                          <option value="2">Học sinh tốt nghiệp THPT</option>
                          <option value="3">Học sinh hoàn thành chương trình 12</option>
                          <option value="4">Sinh viên</option>
                          <option value="5">Người đi làm</option>
                        </select>
                      </div>
                      <div className="d-flex justify-content-end pt-3">
                        <button
                          type="submit"
                          className="btn btn-warning btn-lg w-50 ms-2 fw-bold text-dark"
                        >
                          Đăng kí
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
    </div>
    </>
    
  )
}

export default DangKyKH