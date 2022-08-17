import { createSlice } from '@reduxjs/toolkit';

export const swichSlice = createSlice({
    name: 'swich',
    initialState: false,
    reducers: {
        setSwich: (state, action) => {
            return !state;
        }
    }
})

export const { setSwich } = swichSlice.actions;

export default swichSlice.reducer;