import React from 'react'
import { Outlet, useRoutes } from 'react-router-dom'
import Layoutadmin from '../admin/components/Layoutadmin'
import Content from '../admin/components/Content'
import Major from '../admin/components/Major'
import Course from '../admin/components/Course'
import Login from './Login'
import Home from '../user/components/Home'
import Page404 from '../user/components/Page404'
import DangKyNgay from '../user/components/DangKyNgay'
import TrangChu from '../user/components/TrangChu'
import AnNinhMang from '../user/components/AnNinhMang'
import PhanMem from '../user/components/PhanMem'
import DoHoa from '../user/components/DoHoa'
import AWS from '../user/components/AWS'
import CEH from '../user/components/CEH'
import DangKy from '../user/components/DangKy'
function Routingg() {
  const Rout = useRoutes([
    {
      path: '/tuyenSinhiSpace/admin',
      element: <Layoutadmin/>,
      children: [
        {index: true, element: <Major/>},
        {path: 'nganh-hoc', element: <Major/>},
        {path: 'khoa-hoc', element: <Course/>}
      ]
    },
    {
      path: '/tuyenSinhiSpace/', 
      element: <Home/>,
      children: [
        {index: true, element: <TrangChu/>},
        {path: 'dang-ky-ngay', element: <DangKy/>},
        {path: 'an-ninh-mang' ,element: <AnNinhMang/>},
        {path: 'phat-trien-phan-mem' ,element: <PhanMem/>},
        {path: 'thiet-ke-do-hoa' ,element: <DoHoa/>},
        {path: 'khoa-hoc-aws' ,element: <AWS/>},
        {path: 'khoa-hoc-ceh' ,element: <CEH/>},
      ]
    },
    {path: '/tuyenSinhiSpace/login', element: <Login/>},
    {path: '*', element: <Page404/>}
  ])
  return (
    <>
    {Rout || <Outlet/>}
    </>
  )
}

export default Routingg