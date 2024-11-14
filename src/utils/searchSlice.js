import { createSlice } from "@reduxjs/toolkit";



const searchSlice = createSlice({
    
    name : "searc",
    initialState :{},

    reducers:{
        
        cacheSearchSuggestion : (state,action) => {
            // state= {...state,...action.payload}
            state = Object.assign(state,action.payload)
        },
       
      
    },

}
)

export const { cacheSearchSuggestion} = searchSlice.actions;

export default searchSlice.reducer;