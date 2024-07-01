import React from "react";
import billImg from "../../../assets/bill.png"

const About = () => {
	return (
		<div className="flex flex-col items-center">
      <img className="w-2/4 h-[520px]" src={billImg} alt="" />
			<p className="text-2xl">قبضینو یک وب  اپیکیشن با رابط کاربری بسیار جذاب است که شما بدون نیاز به اینترنت میتوانید پرداختی های خود را با اطلاعات کامل ذخیره کنید </p>
      <p className="text-2xl my-6"><span className="text-yellow-500">برنامه نویس:</span> مهدی احسانی</p>
      <p className="text-2xl"><span className="text-yellow-500">استاد:</span> علی جعفری پاسکایی</p>
		</div>
	);
};

export default About;
