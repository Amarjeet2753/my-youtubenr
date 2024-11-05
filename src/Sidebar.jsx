// import React from 'react'

import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const Sidebar = () => {
   
    const isMenuOpen  = useSelector(state =>state.app.isMenuOpen)

    if(!isMenuOpen) return null

  return (
    <div className="p-5 m-2 w-52 shadow-lg">
       
       <div className=" m-2">
       <ul className="">
        
       <li>
       <Link to="/">Home</Link>
     </li>
        <li>Shorts</li>
        <li>Subscription</li>
      
        
      </ul>

       </div>
       <div className=" m-2">
      <h2 className="font-bold">You</h2>
   
      <ul className="">
        <li>History</li>
        <li>Playlist</li>
        <li>Your Videos</li>
        <li>Watch Later</li>
        <li>Liked Video</li>
        
      </ul>
       </div>

       <div className=" m-2">
      <h2 className="font-bold">Subscription</h2>
      <ul className="">
        <li>Amar Ujala</li>
        <li>News 24</li>
        <li>Ani News</li>
        <li>NDTV</li>
        
      </ul>
       </div>

       <div className=" m-2">
      <h2 className="font-bold">Explore</h2>
      <ul className="">
        <li>Trending</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>News</li>
        <li>Sport</li>
      </ul>
       </div>
        
    </div>
  )
}

export default Sidebar
