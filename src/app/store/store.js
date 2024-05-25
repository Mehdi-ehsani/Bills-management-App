import { configureStore } from "@reduxjs/toolkit";

import billSlice from "../reducers/billSlice";


const store = configureStore({
	reducer: {
		bill: billSlice,	
	},
});
export default store;
