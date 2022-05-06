import { configureStore } from "@reduxjs/toolkit";
import counterReducer from 'redux/slices/counter';

const store = configureStore({
    reducer: {
        counter: counterReducer
    }
});

export default store;