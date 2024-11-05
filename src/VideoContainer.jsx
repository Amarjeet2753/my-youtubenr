// import React from 'react'

import { useEffect, useState } from "react"
import { YOUTUBE_URL_API } from "./Constant";
import VideoCard from "./VideoCard";

import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import WatchPage from "./WatchPage";




const VideoContainer = () => {
   
    const [videoList,setVideoList] = useState([]);
    
    useEffect(()=>{
       
        getVideos();
    },[])


    const  getVideos = async ()=>{
           
        const data = await fetch(YOUTUBE_URL_API);

        const vidData = await data.json()

        console.log(vidData.items)
        console.log(vidData.items[0])
        setVideoList(vidData.items)
    }
    

    if(videoList.length===0) return null

  return (
    <div className='flex m-2 flex-wrap'>
      

       {
        videoList.map((video) => 
          (<Link to={"/watch?v="+video.id} key={video.id}>
           <VideoCard key={video.id} info={video}/>
          </Link>)
       )
       }
    </div>
  )
}

export default VideoContainer
