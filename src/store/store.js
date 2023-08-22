import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { dataTabSlice } from "./dataTabReducer";

const rootReducer = combineReducers({
dataTabs: dataTabSlice.reducer
})

const store = configureStore({
  reducer: rootReducer
})

export default store