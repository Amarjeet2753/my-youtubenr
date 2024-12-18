// import React, { useState } from 'react'

const SearchVideoCard = ({ info }) => {

    if (!info || !info.snippet) {
        return <div className="flex w-full justify-center">Loading...</div>; // Fallback UI
    }
    const { snippet, id } = info;
    const { channelTitle, title, thumbnails, description } = snippet;

    return (

        <div className="flex m-2 p-2 justify-center w-full h-[250px]">
            <div className="w-[30%] h-[200px] flex items-center justify-center overflow-hidden bg-gray-200">
                <img
                    className="w-full h-full object-cover"
                    src={thumbnails?.medium.url || "https://via.placeholder.com/400x200"}
                    alt="thumbnail"
                />
            </div>
            <div className="w-[70%] flex flex-col px-4 overflow-hidden">
                <h1 className='text-xl py-2 truncate'>{title}</h1>
                <p className='text-sm py-2 truncate'>{channelTitle}</p>
                <p className="text-sm truncate">{description}</p>
            </div>
        </div>
    )
}

export default SearchVideoCard;
