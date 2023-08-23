import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { dataTabSlice } from "./dataTabReducer";
import { loggedInUserSlice } from "./loggedInUserReducer";


const rootReducer = combineReducers({
dataTabs: dataTabSlice.reducer,
loggedInUser: loggedInUserSlice.reducer,

})

const store = configureStore({
  reducer: rootReducer
})

export default store