import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex my-8 h-20 items-center justify-between p-4 bg-gradient-to-tl from-yellow-400 to-yellow-500 rounded-2xl shadow-lg'>
       <h1 className='font-bold text-3xl'>قبضینو</h1>
        <ul className='flex items-center gap-8 text-xl '>    
          <li><Link to="/">خانه</Link></li>
          <li> <Link to="/bills">قبض ها</Link></li>
          <li> <Link to="/about">درباره ما</Link></li>
          <li><Link to="/contact">تماس با ما</Link></li>
        </ul>
        <button className='rounded-full w-10 h-10 bg-white leading-10 text-center shadow-md' >☀</button>
    </nav>
  )
}

export default Navbar