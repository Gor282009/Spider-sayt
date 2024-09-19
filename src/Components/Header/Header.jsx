import React from 'react'
import { FaSearch } from "react-icons/fa";

const headerItems = [
    {id:1, name:"Home"},
    {id:2, name:"Movies"},
    {id:3, name:"Series"},
    {id:4, name:"Trending"},
    {id:5, name:"Categories"},
]

function Header() {
  return (
    <div>
        <header className='w-full flex justify-between
        items-center p-4 fixed'>
            <nav>
                <ul className='flex gap-[32px]'>
            <div className='flex'>
            <h1 className='font-bold relative text-3xl text-[#FFFFFF]'>Stream</h1>
                <h1 className='text-[#FF4949] text-4xl font-bold'>X</h1>
            </div>
                    {
                        headerItems.map(item => (
                            <li key={item.id}>
                                <a href="" className='text-[#FFFFFF] text-xl'>{item.name}</a>
                            </li>
                        ))
                    }
                </ul>
            </nav>
            <FaSearch className='text-[#FFFFFF] absolute right-[50px]'/>
            <input type="Search" placeholder='Search Movies, Series... />'
            className='rounded-[40px] pl-[14px] pt-[10px] pr-[100px]
            pb-[9px] bg-[#000000] text-[#FFFFFF]'/>
        </header>
    </div>
  )
}

export default Header