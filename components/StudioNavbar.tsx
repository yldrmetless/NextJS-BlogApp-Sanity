import Link from 'next/link'
import React from 'react'
import {IoReturnDownBack} from 'react-icons/io5'

const StudioNavbar = (props: any) => {
  return (
    <div>
        <div className='p-5 bg-black  text-gray-100 flex items-center justify-between'>
            <Link className='flex items-center justify-center gap-x-4 font-semibold hover:text-blue-600 duration-200' href={"/"}>
                <IoReturnDownBack
                    className= "text-2xl cursor-pointer"
                />
                Go to Website
            </Link>
            <h1 className='text-white text-2xl hidden md:inline-flex font-extrabold uppercase cursor-pointer'>Bloggers Studio</h1>
            <p className='text-sm'>Studio for blog content</p>
        </div>
        {props.renderDefault(props)}
    </div>
  )
}

export default StudioNavbar