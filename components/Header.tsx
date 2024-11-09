import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import myImage from "../Public/logo.png"

function Header(){
    return (
        <div className='bg-[#044E83]  flex items-center justify-between h-20 '>
          <div>
            <Image
          src={myImage}
          width={120}
          height={140}
          alt='logo'
          className=' m-4 mt-20 w-[90px]  bg-transparent'
        
          >
          </Image></div>
          <div className='inline-block text-[22px] text-xl font-extrabold text-[#B9D8F3] '>
            <h2>Tuition Free Education Program on Latest Technologies</h2>
          </div>
          <div className='text-white p-5' >
            <ul >
             <Link href="/"> <li className='items-center  p-5 inline-block'>Home</li></Link>
             <Link href="/apply"> <li className='items-center  p-5  inline-block'>Apply</li></Link>
              <Link href="/jobs"><li className='items-center  p-5 inline-block'>Jobs</li></Link>
             <Link href="/results"> <li className='items-center p-5 inline-block'>Result</li></Link>
             <Link href="/courses"> <li className='items-center p-5 inline-block'>Courses</li></Link>
            </ul>
          </div>
        </div>
)
}
export default Header;