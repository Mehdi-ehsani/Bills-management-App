import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    
]


const billsSlice = createSlice({
    name: "bills",
    initialState,
    reducers: {
      ADD: (state , action) => {
        state.push(action.payload)
      },
      DELETE: (state , action) => {
        console.log("delete")
      }
    }
})

export default billsSlice.reducer
export const { ADD , DELETE } = billsSlice.actions

export const billsSelector = store => store.bills