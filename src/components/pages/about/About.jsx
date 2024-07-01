import React from "react";
import billImg from "../../../assets/bill.png"

const About = () => {
	return (
		<div className="flex flex-col items-center">
      <img className="md:w-2/4 w-fit h-[300px] sm:h-[450px] md:h-[520px]" src={billImg} alt="" />
			<p className="md:text-2xl text-xl text-center px-4">قبضینو یک وب  اپیکیشن با رابط کاربری بسیار جذاب است که شما بدون نیاز به اینترنت میتوانید پرداختی های خود را با اطلاعات کامل ذخیره کنید </p>
      <p className="md:text-2xl text-lg my-6"><span className="text-yellow-500">برنامه نویس:</span> مهدی احسانی</p>
      <p className="md:text-2xl text-lg"><span className="text-yellow-500">استاد:</span> علی جعفری پاسکایی</p>
		</div>
	);
};

export default About;
