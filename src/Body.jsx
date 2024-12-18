// import React from 'react'

import { useSelector } from "react-redux"
// import MainContainer from "./MainContainer"
import Sidebar from "./Sidebar"

// import { toggleMenu } from "./utils/appSlice"
// import appSlic
import { Outlet } from "react-router-dom"
import Header from "./Header"

const Body = () => {
 
    const isMenuOpen = useSelector(state => state.app.isMenuOpen)

  return (
    <div>
      <Header/>
       <div className="flex">
       <Sidebar/>
       {/* <MainContainer/> */}
       <Outlet/>
    </div>
 

    </div>
    )
}

export default Body
