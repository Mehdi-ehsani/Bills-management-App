import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    title: "",
    description: "",
    cost: "",
    tracking: "",
    date: "",

   };

const billSlice = createSlice({
    name: "bill",
    initialState,
    reducers: {
        ADD_TITLE: (state, action) => {
          state.title = action.payload
        },
        ADD_DESCRIPTION: (state, action) => {
            state.description = action.payload
        },
        ADD_COST: (state, action) => {
            state.cost = action.payload
        },
        ADD_TRACKING: (state, action) => {
            state.tracking = action.payload
        },
        ADD_DATE: (state, action) => {
            state.date = action.payload
        }

    }
})   

export default billSlice.reducer
export const { ADD_TITLE , ADD_DESCRIPTION , ADD_COST , ADD_DATE ,ADD_TRACKING} = billSlice.actions
//----------------selectors----------------//
export const titleSelector = store => store.bill.title
export const descriptionSelector = store => store.bill.description
export const costSelector = store => store.bill.cost
export const dateSelector = store => store.bill.date
export const trackingSelector = store => store.bill.tracking