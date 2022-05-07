import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        address: ''
    },
    reducers: {
        setAddress: (state, payload: any) => { return state.address = payload.address; },
    }
});

export const { setAddress } = counterSlice.actions;

export default counterSlice.reducer;