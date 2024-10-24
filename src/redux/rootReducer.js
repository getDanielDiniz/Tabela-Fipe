import { combineReducers } from "redux";
import configSlice from "./configSlice/slice"
import localStorageSlice from "./localStorageSlice/slice"

export default combineReducers({
    config : configSlice,
    localStorage : localStorageSlice
})