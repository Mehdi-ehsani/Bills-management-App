import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
	ADD_TITLE,
	ADD_COST,
	ADD_DATE,
	ADD_DESCRIPTION,
	ADD_TRACKING,
	titleSelector,
	costSelector,
	trackingSelector,
	dateSelector,
	descriptionSelector,
} from "../../app/reducers/billSlice";

const HomePage = () => {
	const dispatch = useDispatch();
	const title = useSelector(titleSelector);
	const description = useSelector(descriptionSelector);
	const cost = useSelector(costSelector);
	const date = useSelector(dateSelector);
	const tracking = useSelector(trackingSelector);

	//----------in start----------//
	useEffect(() => {
		// const data = window.localStorage.getItem("data");
		// setName(JSON.parse(data));
	}, []);
	//----------in data change----------//
	// useEffect(() => {
	// 	window.localStorage.setItem("data", JSON.stringify(name));
	// }, [name]);
	return (
		<div>
			<h1>سلام</h1>
			<input
				className="border-2 border-sky-500"
				type="text"
				value={title}
				placeholder="نام قبض"
				onChange={(e) => dispatch(ADD_TITLE(e.target.value))}
			/>
			<input
				className="border-2 border-sky-500"
				type="text"
				value={date}
				onChange={(e) => dispatch(ADD_DATE(e.target.value))}
			/>
			<input
				className="border-2 border-sky-500"
				type="text"
				value={description}
				placeholder="یادداشت"
				onChange={(e) => dispatch(ADD_DESCRIPTION(e.target.value))}
			/>
			<input
				className="border-2 border-sky-500"
				type="text"
				value={tracking}
				placeholder="شماره پیگیری"
				onChange={(e) => dispatch(ADD_TRACKING(e.target.value))}
			/>
			<input
				className="border-2 border-sky-500"
				type="text"
				value={cost}
				placeholder="مبلغ"
				onChange={(e) => dispatch(ADD_COST(e.target.value))}
			/>
		</div>
	);
};

export default HomePage;
