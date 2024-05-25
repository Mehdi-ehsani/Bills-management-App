import { configureStore } from "@reduxjs/toolkit";

import billSlice from "../reducers/billSlice";
import billsSlice from "../reducers/billsSlice";

const store = configureStore({
	reducer: {
		bill: billSlice,
		bills: billsSlice,
	},
});
export default store;
