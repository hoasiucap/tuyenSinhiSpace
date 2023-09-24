import React from 'react'
import {Routes, Route, Outlet} from 'react-router-dom'
import Navbar from './Navbar'
import Content from './Content'
import LineChart from './Major'
import Major from './Major'
import Course from './Course'
import Page404 from '../../user/components/Page404'
import Layoutadmin from './Layoutadmin'

function Routing() {
  return (
    <Routes>
        {/* <Route path="/admin" element={<Layoutadmin />}/> */}
        {/* <Outlet/> */}
        <Route path="/admin/content" element={<Content />}></Route>
        <Route path='/admin/nganh-hoc' element={<Major/>}></Route>
        <Route path='/admin/khoa-hoc'element={<Course/>}/>
        <Route path='/*' element= {<Page404/>}></Route>
        {/* </Route> */}

    </Routes>
  )
}

export default Routing