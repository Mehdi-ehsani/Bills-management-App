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

	const [data, setData] = useState([]);

	let localData = JSON.parse(localStorage.getItem("data")) || [];

	//----------in start----------//

	useEffect(() => {
		setData(JSON.parse(localStorage.getItem("data")) || []);
	}, []);

	const addToLocalStorage = (title, description, date, cost, track) => {
		data.push({ title, description, date, cost, track });

		localStorage.setItem("data", JSON.stringify(data));

		dispatch(ADD_COST(""));
		dispatch(ADD_DESCRIPTION(""));
		dispatch(ADD_TRACKING(""));
		dispatch(ADD_TITLE(""));
		dispatch(ADD_DATE(""));
	};
	//----------in data change----------//
	const deleteBill = (title) => {
		Array.prototype.remove = function () {
			var what,
				a = arguments,
				L = a.length,
				ax;
			while (L && this.length) {
				what = a[--L];
				while ((ax = this.indexOf(what)) !== -1) {
					this.splice(ax, 1);
				}
			}
			return this;
		};
		data.map((bill) => {
			bill.title == title ? data.remove(bill) : null;
		});
		localStorage.setItem("data", JSON.stringify(data));
		setData(JSON.parse(localStorage.getItem("data")));
	};

	return (
		<div>
			<form onClick={(e) => e.preventDefault()}>
				<div className="flex gap-3">
					<div className="w-2/5">
						<label className="block text-xl font-semibold mb-1">نام قبض:</label>
						<input
							className="border-2 border-gray-600 w-full h-9 rounded-lg"
							type="text"
							value={title}
							maxLength={30}
							placeholder=" "
							onChange={(e) => dispatch(ADD_TITLE(e.target.value))}
						/>
					</div>
					<div className="w-1/5">
						<label className="block text-xl font-semibold mb-1">تاریخ:</label>
						<input
							className="border-2 border-gray-600 w-full h-9 rounded-lg"
							type="text"
							value={date}
							onChange={(e) => dispatch(ADD_DATE(e.target.value))}
						/>
					</div>
					<div className="w-1/5">
						<label className="block text-xl font-semibold mb-1">
							شماره پیگیری:
						</label>
						<input
							className="border-2 border-gray-600 w-full h-9 rounded-lg"
							type="text"
							value={tracking}
							placeholder=" "
							onChange={(e) => dispatch(ADD_TRACKING(e.target.value))}
						/>
					</div>
					<div className="w-1/5">
						<label className="block text-xl font-semibold mb-1">مبلغ:</label>
						<input
							className="border-2 border-gray-600 w-full h-9 rounded-lg"
							type="text"
							value={cost}
							placeholder=""
							onChange={(e) => dispatch(ADD_COST(e.target.value))}
						/>
					</div>
				</div>
				<div className="mt-2">
					<label className="block text-xl font-semibold mb-1">مبلغ:</label>
					<input
						className="border-2 border-gray-600 w-full h-24 rounded-lg"
						type="text"
						value={description}
						placeholder=""
						onChange={(e) => dispatch(ADD_DESCRIPTION(e.target.value))}
					/>
				</div>
				<button
				    className="w-full my-4 rounded-lg text-xl font-semibold   h-10 bg-yellow-400"
					onClick={() =>
						addToLocalStorage(title, description, date, cost, tracking)
					}
				>
					اضافه کردن
				</button>
			</form>

			<div className="grid grid-cols-3 gap-4 my-8">
				{data.map((bill) => (
					<div
						className={
							"block bg-gray-200 border-r-2 border-yellow-400 p-3 rounded-xl shadow-md"
						}
						key={bill.title}
					>
						<p className="text-2xl font-bold mb-2">{bill.title}</p>
						<p>
							<span className="text-lg text-yellow-600 font-semibold">
								توضیحات:
							</span>
							{bill.description ? bill.description : "مشخص نشده"}
						</p>
						<div>
							<p className="text-lg mt-1">
								<span className="text-lg text-yellow-600 font-semibold">
									کد پیگیری:
								</span>
								{bill.track ? bill.track : "مشخص نشده"}
							</p>
							<p className="text-lg mt-1">
								<span className="text-lg text-yellow-600 font-semibold">
									تاریخ:
								</span>
								{bill.date ? bill.date : "مشخص نشده"}
							</p>
						</div>
						<div className="flex gap-2 mt-3">
							<p className="w-2/3 h-8 bg-yellow-500 text-xl rounded-md font-semibold text-center leading-8 shadow-md">
								{" "}
								{bill.cost} <span>تومان</span>{" "}
							</p>
							<button
								className="w-1/3 h-8 text-xl leading-8 font-semibold border-2 cursor-pointer text-red-500 rounded-md border-red-500 hover:bg-red-500 hover:text-white transition-colors"
								onClick={() => deleteBill(bill.title)}
							>
								حذف
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default HomePage;
