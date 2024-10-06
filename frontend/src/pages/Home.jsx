import React from 'react'
import roomImg from '../assets/homeRoomImage.jpg'
import { AiOutlineSearch } from "react-icons/ai";

const Home = () => {
  return (
    <div className='w-full h-auto py-20 font-poppins linear-gradient(0deg, rgba(174,174,174,1) 0%, rgba(255,255,255,1) 100%)'>
        <div className='justify-center flex-col pb-10'>
            <h1 className='text-6xl font-bold text-gray-700 pb-3 text-center'>IMPERIAL SPACES</h1>
            <p className='text-center pb-6'>Elevating Every Corner of Your Home.</p>
            <div className='flex items-center justify-center'>
              <div className='flex items-center border-slate-900 border-2 rounded-full'>
                <input type='text' placeholder='Search' className='px-6 py-3 rounded-full outline-none'/>
                <button className='pr-4'><AiOutlineSearch className='text-3xl'/></button>
              </div>
            </div>
        </div>
        <div>
            <img src={roomImg} alt='Landing Page' className="w-full h-auto
            object-cover object-center px-20 " />
        </div>
    </div>
  )
}

export default Home