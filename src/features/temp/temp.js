
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    temp : {
    number:null,
    description : "",
    min: null,
    max: null,
    icon : null
  }
}

export const TempSlice = createSlice ({
    name : 'temp',
    initialState,
    reducers : {
        
    }
})