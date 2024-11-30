// import React from 'react'

import { USER_LOGO } from "./Constant"

// eslint-disable-next-line react/prop-types
const ChatMessage = ({ name, message }) => {
    return (
        <div className='flex flex-row p-2  items-center shadow-sm'>

            <img className="h-6 w-6" alt="logo" src={USER_LOGO} />


            <div className="font-semibold ml-3 ">{name}</div>
            <div className="ml-2">{message}</div>



        </div>
    )
}

export default ChatMessage
