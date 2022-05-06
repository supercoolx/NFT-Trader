import { combineReducers } from "@reduxjs/toolkit";
import counter from "./slices/counter";

const rootReducer = combineReducers({ counter });

export type IState = ReturnType<typeof rootReducer>;
export default rootReducer;