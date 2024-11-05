import React, { useState } from 'react'

const VideoCard = ({info}) =>{
    
    console.log("info",info?.snippet);
    console.log("info",info);
    
    const {snippet ,statistics} = info;
    const {channelTitle ,title, thumbnails} = snippet;

    return (
       <div className="m-2 p-2 shadow-md w-72">
           <img className='rounded-md' src={thumbnails?.medium.url} alt="thumbnail" />
           <h1 className='font-bold py-2'>{channelTitle}</h1>
           <h1>{title}</h1>
           <h1>{statistics.viewCount}</h1>
           
       </div>
    )
}

export default VideoCard
