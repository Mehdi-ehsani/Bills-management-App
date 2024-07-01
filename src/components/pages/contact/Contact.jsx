import React from 'react'
import contactImg from "../../../assets/contact.png"
import phoneImg from "../../../assets/telephone.png"
import mailImg from "../../../assets/mail.png"
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div className='flex flex-col items-center'>
      <img className='w-full md:w-2/5' src={contactImg} alt="contact" />
      <div className='flex items-center flex-col md:flex-row gap-10'>
        <div className=' flex  items-center gap-4'>
          <Link to="tel:09919979510"  className='text-2xl '>09919979510</Link>
          <img className='w-[28px] h-[28px]' src={phoneImg} alt="icon" />
        </div>
        <div className='flex items-center gap-4'>
          <Link to="mailto:metti.work@gmail.com" className='text-2xl '>metti.work@gmail.com</Link>
          <img className='w-[28px] h-[28px]' src={mailImg} alt="icon" />
        </div>
      </div>
    </div>
  )
}

export default Contact