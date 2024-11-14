import { configureStore } from '@reduxjs/toolkit'

import appslice from './appSlice.js'
import searchSlice from './searchSlice.js'

const store = configureStore({
  reducer: {
    app : appslice,
    search : searchSlice
  },
})

export default store