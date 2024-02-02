import React from 'react'
import { BsInstagram } from 'react-icons/bs'
import { RiCodepenLine, RiGithubLine, RiTwitterLine } from 'react-icons/ri'
import { FaLinkedinIn } from 'react-icons/fa'
import { AiOutlineStar } from 'react-icons/ai'
import { IoIosGitBranch } from 'react-icons/io'


function Contact() {
  const handleClick = (e) => {
    console.log(e)
  }
  const redirectLink = () => {
    <a href='https://github.com/EmekaDollar'>a</a>
  }
  return (
    <div className='px-[25px] mx-auto max-w-[60rem] mt-20 bottom-0 pb-5'>
      <footer className='flex flex-col items-center mb-3'>
        <h3 className='text-[16px] font-normal font-mono text-[#64ffda] mb-[20px]'>04. What's Next?</h3>
        <h2 className='text-[clamp(33px,3vw,60px)]'>Get In Touch</h2>
        <p className="mt-3">
          Whether you have a question or just want to say hi, i'll
          try my best to get back to you!
        </p>
        <button onClick={handleClick} className='rounded mt-[50px] text-[#64ffda] border bg-transparent border-[#64ffda] py-[1rem] px-[1.75rem] text-[14px] font-mono text-'>
          Say Hello
        </button>
        <div className="flex gap-6 mt-12 md:hidden">
          <RiGithubLine className='fill-gray-100'/>
          <BsInstagram className='fill-gray-100'/>
          <RiTwitterLine className='fill-gray-100'/>
          <FaLinkedinIn className='fill-gray-100'/>
          <RiCodepenLine onClick={redirectLink} className='fill-gray-100'/>
        </div>
        {/* <p className='mt-4 text-gray-100'>Designed by Brittany Chiang & Built by Chukwuemeka Abuba</p>
        <div className='flex gap-4 mt-1'>
          <div className='flex'>
            <AiOutlineStar className='fill-gray-100'/>
            <small className='text-gray-100'>5,870</small>
          </div>
          <div className='flex  '>
            <IoIosGitBranch className='fill-gray-100'/>
            <small className='text-gray-100'>5,870</small>
          </div>
        </div> */}
      </footer>
    </div>
  )
}

export default Contact