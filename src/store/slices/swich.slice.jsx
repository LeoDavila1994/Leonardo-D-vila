import { createSlice } from '@reduxjs/toolkit';

export const swichSlice = createSlice({
    name: 'swich',
    initialState: true,
    reducers: {
        setSwich: (state, action) => {
            return !state;
        }
    }
})

export const { setSwich } = swichSlice.actions;

export default swichSlice.reducer;