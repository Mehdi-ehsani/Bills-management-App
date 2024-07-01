import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import profImg from "../../assets/user.png"
import menuImg from "../../assets/Union.png"
import delImg from "../../assets/del.png"

const Navbar = () => {
  const [show , setShow] = useState(false)
  return (
    <nav className='relative flex m-4 md:my-8 h-20 items-center justify-between p-4 bg-gradient-to-tl from-yellow-400 to-yellow-500 rounded-2xl shadow-lg'>
       <h1 className='font-bold text-3xl'>قبضینو</h1>
        <ul className='  hidden  lg:flex items-center gap-8 text-xl '>    
          <li><Link to="/">خانه</Link></li>
          <li> <Link to="/bills">قبض ها</Link></li>
          <li> <Link to="/about">درباره ما</Link></li>
          <li><Link to="/contact">تماس با ما</Link></li>
        </ul>
        <img className='hidden lg:block w-8 cursor-pointer' src={profImg} alt="" />
        <img className='block lg:hidden w-8 cursor-pointer' src={show ? delImg : menuImg} alt=""  onClick={() => setShow(!show)}/>
        
        <ul className={show ? 'shadow-lg left-1/2 translate-x-[-50%] rounded-lg absolute flex items-center p-4 gap-4 flex-col bg-gradient-to-tl from-yellow-400 to-yellow-500 top-24 w-full' : "hidden"}>    
          <li className='text-xl'><Link to="/">خانه</Link></li>
          <li className='text-xl'> <Link to="/bills">قبض ها</Link></li>
          <li className='text-xl'> <Link to="/about">درباره ما</Link></li>
          <li className='text-xl'><Link to="/contact">تماس با ما</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar