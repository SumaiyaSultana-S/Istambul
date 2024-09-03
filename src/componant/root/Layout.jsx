import React from 'react'
import { Outlet } from 'react-router-dom'
import Menu from '../header/Menu'
import Footer from '../footer/Footer'

const Layout = () => {
  return (
    <div>
        <Menu/>
        <Outlet/>
        
    </div>
  )
}

export default Layout
