import { combineReducers } from "@reduxjs/toolkit";
import user from "./slices/user";

const rootReducer = combineReducers({ user });

export type IState = ReturnType<typeof rootReducer>;
export default rootReducer;