import { createSlice } from "@reduxjs/toolkit";

export const dataTabSlice = createSlice({
  name: 'dataTabs',
  initialState: [],
  reducers: {
    setDataTabs: (state, action) => {
      // console.log(action.payload)
      return action.payload  
    }
  }
})

export const { setDataTabs } = dataTabSlice.actions