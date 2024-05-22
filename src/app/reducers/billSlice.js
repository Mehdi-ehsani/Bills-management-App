import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    title: "mm",
    description: "salam",
    cost: "23232",
    tracking: "22",
    date: "1403/03/01",

   };

const billSlice = createSlice({
    name: "bills",
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
export const titleSelector = store => store.bills.title
export const descriptionSelector = store => store.bills.description
export const costSelector = store => store.bills.cost
export const dateSelector = store => store.bills.date
export const trackingSelector = store => store.bills.tracking