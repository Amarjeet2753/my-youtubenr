// import React from 'react'

import { Outlet } from "react-router-dom"
import ButtonList from "./ButtonList"
// import VideoContainer from "./VideoContainer"

const MainContainer = () => {
  return (
    <div>
      <ButtonList/>
      {/* <VideoContainer/> */}
      <Outlet/>
    </div>
  )
}

export default MainContainer
