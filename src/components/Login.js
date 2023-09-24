import React, { useState } from 'react'
import '../access/login.css'
import { NavLink } from 'react-router-dom'

function Login() {
    const [userName, setUserName] = useState('')
    const [pass, setPass] = useState('')
    const [canLog, setCanLog] = useState(false)
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(userName === 'admin' && pass === '123abc'){
            setCanLog(true)
        }
        else{
            alert('Thông tin tài khoản hoặc mật khẩu không chính xác')
        }
    }
  return (
    <div className='d-flex bg-log h-100vh'>
    <div className="container-fluid bg-log">
  <form className="mx-auto form-login" onSubmit={handleSubmit}>
    <h4 className="text-center text-fm text-log">Đăng nhập</h4>
    <div className="mb-3 mt-5">
      <label htmlFor="exampleInputEmail1" className="form-label text-fm">
        Tên đăng nhập
      </label>
      <input
        value={userName}
        type="text"
        className="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        onChange={(e) => setUserName(e.target.value) }
      />
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label text-fm">
        Mật khẩu
      </label>
      <input
        value={pass}
        type="password"
        className="form-control"
        id="exampleInputPassword1"
        onChange={(e) => setPass(e.target.value)}
      />
    </div>
    <div className='d-flex justify-content-center'>
        {canLog? (
            <NavLink to='/admin' className='btn btn-success text-white mt-5'>Xem thống kê</NavLink>): 
            <button type="submit" className="btn btn-primary-log mt-5 text-white">
            Đăng nhập
            </button>
        }


    </div>

  </form>
</div>

    </div>
  )
}

export default Login