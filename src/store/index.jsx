import { configureStore } from '@reduxjs/toolkit'
import  swichSlice  from './slices/swich.slice'

export default configureStore({
    reducer: {
        swich: swichSlice
    }
})
