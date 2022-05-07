import { configureStore } from "@reduxjs/toolkit";
import userReducer from 'redux/slices/user';

const store = configureStore({
    reducer: {
        user: userReducer
    }
});

export default store;