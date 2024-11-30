// import React from 'react'

import { useEffect, useState } from "react"
import ChatMessage from "./ChatMessage"

import { addMessage } from "./utils/liveChatSlice"
import { useDispatch, useSelector } from "react-redux"
import { generateName, generateRandomText } from "./helper"

const LiveChat = () => {

    const dispatch = useDispatch();

    const chatMessage = useSelector(store => store.liveChat.message);
    
    const [myChat ,setMyChat] = useState("");

    useEffect(() => {

        const timer = setInterval(() => {
            //  console.log("polling")

            dispatch(addMessage({
                name: generateName(),
                message: generateRandomText(20) + " 🎉"
            }))


        }, 1500);

        return () => {
            clearInterval(timer)
        }

    }, [])

    return (
        <div className="w-full flex flex-col">
            <div className="w-full h-[500px] mt-4 border-2 border-black rounded-lg bg-slate-50 overflow-hidden overflow-y-scroll flex flex-col-reverse">


                {
                    chatMessage.map((chat, ind) => (
                        <ChatMessage key={ind} name={chat.name} message={chat.message} />
                    ))
                }


            </div>
            <form className="w-full p-1 mt-1  border-gray-700 rounded-md" onSubmit={(e)=>{
                e.preventDefault();

                if(myChat.length>0)
                dispatch(addMessage({
                    name : "Ishan Kishan",
                    message : myChat
                }))

                setMyChat("");
            }}>
                <input type="text" className="w-72 bg-gray-200 px-2 py-1 rounded-md"
                placeholder="Chat.."
                 value={myChat}
                 onChange={(e)=>setMyChat(e.target.value)}
                />
                <button className="px-2 py-1 mx-2 bg-green-200 rounded-md ">Send</button>
            </form>
        </div>
    )
}

export default LiveChat
