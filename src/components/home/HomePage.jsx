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

	const [data , setData] = useState([])

	//----------in start----------//

	useEffect(() => {
		setData(JSON.parse(localStorage.getItem("data")) || []);
	}, []);
	const addToLocalStorage = (title , description , date , cost , track) => {
		// setData(JSON.parse(localStorage.getItem("data")) || []);
		
		data.push({title , description , date , cost , track });

		localStorage.setItem("data" , JSON.stringify(data))

		dispatch(ADD_COST(""));
		dispatch(ADD_DESCRIPTION(""));
		dispatch(ADD_TRACKING(""));
		dispatch(ADD_TITLE(""));
		dispatch(ADD_DATE(""));
	}
	//----------in data change----------//
	const deleteBill = (title) => {
		Array.prototype.remove = function() {
			var what, a = arguments, L = a.length, ax;
			while (L && this.length) {
				what = a[--L];
				while ((ax = this.indexOf(what)) !== -1) {
					this.splice(ax, 1);
				}
			}
			return this;
		};
		data.map(bill => {
			bill.title == title ? data.remove(bill) : null
		})
		setData(data)
		localStorage.setItem("data" , JSON.stringify(data))
		
	};

	return (
		<div>
			<h1>سلام</h1>
			<form >
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
			<button onClick={() => addToLocalStorage(title , description , date , cost , tracking)}>add</button>
			</form>

			<div>
				{data.map(bill => (
					<div key={bill.title}>
                       <p>{bill.title}</p>
					   <button onClick={() => deleteBill(bill.title)} >delete</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default HomePage;
