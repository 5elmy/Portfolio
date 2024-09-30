import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidenav from '../Sidenav/Sidenav'

export default function MasterPage() {
  return (
    // <div className='xl:flex items-center '>
     
    //   <Sidenav/>
    //   <Outlet/>
    // </div>
    <div className='xl:grid xl:grid-cols-12 '>
      <div className='col-span-2 '>

      <Sidenav/>
      </div>
     <div className='col-span-10'>
      
      <Outlet/>
     </div>
    </div>
  )
}
