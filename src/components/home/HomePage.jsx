import React, { useState, useEffect } from "react";

const HomePage = () => {
    
	const [name, setName] = useState("");
    //----------in start----------//
	useEffect(() => {
		const data = window.localStorage.getItem("data");
		setName(JSON.parse(data));
	}, []);
    //----------in data change----------//
	useEffect(() => {
		window.localStorage.setItem("data", JSON.stringify(name));
	}, [name]);
	return (
		<div>
			<h1>سلام</h1>
			<input
				type="text"
				value={name}
				placeholder="this"
				onChange={(e) => setName(e.target.value)}
			/>
		</div>
	);
};

export default HomePage;
