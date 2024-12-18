import React, { useEffect, useState } from 'react'

import { Link, useSearchParams } from 'react-router-dom'
import { API_RESULT_SEARCH_BY_KEYWORD } from './Constant';
import SearchVideoCard from './SearchVideoCard';





const VideoSearchResults = () => {

    const [searchParams] = useSearchParams();
    const [searchKey, setSearchKey] = useState("");
    
    const [searchResult ,setSearchResult] =useState([])

    useEffect(() => {
        const query = searchParams.get('search_query');
        if (query && query !== searchKey) {
            setSearchKey(query);  // Update searchKey when searchParams change
        }
    }, [searchParams]);

    useEffect(() => {
        if (searchKey) {
            getSearchResult();
        }
    }, [searchKey]);

    const getSearchResult = async () => {
        const res = await fetch(`${API_RESULT_SEARCH_BY_KEYWORD}${searchKey}`);

        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await res.json();
        
        console.log("data = ", data.items)
        console.log("data0 = ", data.items[0].id.videoId)
        console.log("datasp-0 = ", data.items[0].snippet.channelTitle);
        setSearchResult(data.items);
    }


    return (
        <div className='flex flex-col w-full'>

            {
                searchResult.map((video)=>(
                    <Link to={"/watch?v="+video.id.videoId} key={video.id.videoId}>
                    <SearchVideoCard key={video.id.videoId} info={video}/>
                    </Link>
                ))
            }
          
        </div>
    )
}

export default VideoSearchResults
