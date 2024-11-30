import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_SIZE } from "../Constant";


const liveChatSlice = createSlice({
     name : 'chat',
     initialState : {
        message : [],
     },

     reducers :{
          
        addMessage : (state,action)=>{
            //   state.message.push(action.payload)
            state.message.splice(LIVE_CHAT_SIZE,1);
              state.message.unshift(action.payload)
        }

     }

})




export const { addMessage} = liveChatSlice.actions;

export default liveChatSlice.reducer;