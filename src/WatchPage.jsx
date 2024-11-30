// import React from 'react'

import { useEffect } from "react"
import { useSearchParams } from "react-router-dom"

import { closeMenu } from "./utils/appSlice"
import { useDispatch } from "react-redux"
import CommentContainer from "./CommentContainer"
import LiveChat from "./LiveChat"

const WatchPage = () => {

  const [searchParams] = useSearchParams()
  const dispatch  = useDispatch()
  useEffect(()=>{
      dispatch(closeMenu())
  })

  return (

    <div className="flex flex-col m-2 p-2 w-full">
    <div className="flex w-full">

    <div className="m-2 p-2 w-full">
      <iframe width="1000" height="500" src={"https://www.youtube.com/embed/" + searchParams.get("v")}
       title="YouTube video player" 
       frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" 
       ></iframe>
    </div> 
    <div className="w-full">
       <LiveChat/>
    </div>
    </div>
    <CommentContainer/>
    </div>
  )
}

export default WatchPage
