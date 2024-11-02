import React from 'react'
import { FaFacebookF, FaYoutube, FaTwitter, FaInstagram, FaTiktok } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

function Footer() {
    return (
        <div >
            <div className='bg-gray-200 p-10 items-center justify-center '>
                <div className='inline-block pr-40  ' >
                    <h1 className='font-bold text-[24px] '>Core Courses</h1>
                    <div className='mt-5 flex  flex-col gap-3 text-[15px]'>
                        <a href='#'>Programming Fundamentals</a>
                        <a href='#'>Web2 Using NextJs</a>
                        <a href='#'>Earn as You Learn</a></div>
                </div>
                <div className='inline-block pr-40 text-25'>
                    <h1 className='font-bold text-[24px] ' >Advanced Courses</h1>
                    <div className='mt-5 flex  flex-col gap-3 text-[15px]' > <a href='#'>Web 3 and Metaverse</a>
                        <a href='#'>Cloud-Native Computing</a>
                        <a href='#'>Artificial Intelligence (AI) and Deep Learning</a>
                        <a href='#'>Ambient Computing and IoT</a>
                        <a href='#'>Genomics and Bioniformatics</a>
                        <a href='#'>Network Programmbility and Automation</a></div>
                </div>
                <div className='inline-block pr-20 text-25'>
                    <h1 className='font-bold text-[24px]'>Social Links</h1>
                    <div className='mt-5 flex  flex-col  text-[15px]'>
                        <div className="flex items-center space-x-4">
                            <a href="https://www.facebook.com/TeamKTessori" target="_blank" rel="noopener noreferrer">
                                <FaFacebookF className="text-blue-600 text-3xl" />
                            </a>
                            <a href="https://www.youtube.com/@KamranTessorikk" target="_blank" rel="noopener noreferrer">
                                <FaYoutube className="text-red-600 text-3xl" />
                            </a>
                            <a href="https://twitter.com/KamranTessoriPk" target="_blank" rel="noopener noreferrer">
                                <FaTwitter className="text-blue-600 text-3xl" />
                            </a>
                            <a href="https://www.instagram.com/KamranTessoriPk/" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className="text-pink-600 text-3xl" />
                            </a>
                            <a href="https://www.tiktok.com/@KamranTessoriPk" target="_blank" rel="noopener noreferrer">
                                <FaTiktok className="text-black-600 text-3xl" />
                            </a>
                        </div>
                        <div className='flex mt-3 items-center space-x-2'>
                            <MdEmail className='text-3xl text-blue-600' />
                            <a href="mailto:education@governorsindh.com" className='text-blue-500 underline' >
                            education@governorsindh.com
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </div>


    )
}

export default Footer