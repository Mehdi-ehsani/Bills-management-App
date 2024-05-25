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

	let bills = [];
	useEffect(() => {
		if (bills.length) {
			
		} else {
			const data = window.localStorage.getItem("data");
			bills = JSON.parse(data);
			console.log("reload");
		}
	}, []);
	
	//----------in data change----------//
	const addBill = () => {
		if(window.localStorage.length){
		const data = window.localStorage.getItem("data");
		bills = JSON.parse(data);
		bills.push({
			title: title,
			date: date,
			description: description,
			tracking: tracking,
			cost: cost,
		});
	}else {
		bills = [{
			title: title,
			date: date,
			description: description,
			tracking: tracking,
			cost: cost,
		}]
		
	}
		dispatch(ADD_COST(""));
		dispatch(ADD_DESCRIPTION(""));
		dispatch(ADD_TRACKING(""));
		dispatch(ADD_TITLE(""));
		dispatch(ADD_DATE(""));
		window.localStorage.setItem("data" , JSON.stringify(bills))

		console.log("add", bills);
	};
	const deleteBill = (title) => {
		// dispatch(DELETE(title));
		console.log("delete");
	};

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
			<button onClick={addBill}>add</button>

			<div>
				{bills.length > 0
					? bills.map((bill) => (
							<div key={bill.title}>
								<p>{bill.title}</p>
								<p>{bill.description}</p>
								<button onClick={() => deleteBill(bill.title)}>delete</button>
							</div>
					  ))
					: null}
			</div>
		</div>
	);
};

export default HomePage;
