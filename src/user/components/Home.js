import React from 'react'
import Topnav from './Topnav'
import '../access/css/style11.css'
import NavbarU from './NavbarU'
import Banner from './Banner'
import ContentLyDo from './ContentLyDo'
import ChuongTrinhDT from './ChuongTrinhDT'
import ContentBanCoHop from './ContentBanCoHop'
import ContentCPCEH from './ContentCPCEH'
import ContentCPAWS from './ContentCPAWS'
import ContentTuyenSinh from './ContentTuyenSinh'
import DangKyNgay from './DangKyNgay'
import DoanhNghiep from './DoanhNghiep'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

function Home() {
  return (
    <>
    <Topnav/>
    <NavbarU/>

    <Outlet/>

        <Footer/>
    </>
  )
}

export default Home