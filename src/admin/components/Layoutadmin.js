import React, {useContext, useEffect, useState} from 'react'
import Sidebar from './Sidebar'
import PageContent from './PageContent'
import '../access/css/style.css'
import '../access/js/page.js'
import Navbar from './Navbar'
import {Outlet, Routes} from 'react-router-dom'
import Routing from './Routing'
import Content from './Content'
import Home from '../../user/components/Home'



function Layoutadmin({children}) {

  return (
    <div className='d-flex bg-content' id='wrapper'>
          <Sidebar cl='bg-ispace pos-fixed' id='sidebar-wrapper'/>
          <PageContent cl='ml-15rem' id='page-content-wrapper'>
            <Navbar/>
            <Outlet/>
          </PageContent>
          
    </div>
  )
}

export default Layoutadmin



// import React from 'react'



