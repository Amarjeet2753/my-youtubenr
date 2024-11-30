import { configureStore } from '@reduxjs/toolkit'

import appslice from './appSlice.js'
import searchSlice from './searchSlice.js'
import liveChatSlice from './liveChatSlice.js'

const store = configureStore({
  reducer: {
    app : appslice,
    search : searchSlice,
    liveChat : liveChatSlice,
  },
})

export default store