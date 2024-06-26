import React, { useState, useEffect } from "react";
import searchIMG from "../../../assets/search.png"

const Bills = () => {
	const [data, setData] = useState([]);
	const [newData, setNewData] = useState([]);
	const [search, setSearch] = useState("");

	useEffect(() => {
		setData(JSON.parse(localStorage.getItem("data")) || []);
	}, []);
	useEffect(() => {
		const filter = (bills, searcher) => {
			if (!search) return bills;
			else {
				return bills.filter((b) => b.title.includes(searcher));
			}
		};
		let finalBill = filter(data, search);
		setNewData(finalBill);
	}, [search]);

	const searchHandler = (event) => {
		setSearch(event.target.value);
	};

	return (
		<div className="mx-4">
			<div className="  flex items-center justify-between ">
				<p className=" text-xl  lg:text-3xl font-bold mt-5">قبض ها</p>
				<div className=" w-60  lg:w-auto flex items-center gap-2 border-2 border-[#333] py-1 px-2 rounded-lg">
                    <img className="w-6 h-6" src={searchIMG} />
					<input className="w-64 h-6 bg-transparent outline-none" placeholder="جستجو..." type="text" value={search} onChange={searchHandler} />
				</div>
			</div>
			<div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 mb-8 mt-3">
				{search
					? newData.map((bill) => (
							<div
								className={
									"block max-w-[550px]  bg-gray-200 border-r-2 border-yellow-400 p-3 rounded-xl shadow-md"
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
					  ))
					: data.map((bill) => (
							<div
								className={
									"block max-w-[550px] bg-gray-200 border-r-2 border-yellow-400 p-3 rounded-xl shadow-md"
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

export default Bills;
