import React from 'react'
import { FaInstagram } from 'react-icons/fa'
import { RiGithubLine } from 'react-icons/ri'
import { CiTwitter } from 'react-icons/ci'
import { FiLinkedin } from 'react-icons/fi'

function LeftStyledComponent() {
  return (
    <div className='hidden lg:z-50 lg:w-[40px] lg:bottom-0 lg:left-[40px] lg:right-auto lg:fixed lg:text-2xl lg:flex lg:justify-center lg:items-center' >
        <ul className='flex flex-col gap-[30px] after:inline-block after:w-[1px] after:h-[90px] after:my-[0px] after:mx-[auto] after:bg-[#a8b2d1]'>
            <li className=''><RiGithubLine className="text-[#a8b2d1] w-[1.4rem] h-[1.4rem]" /></li>
            <li className=''><FaInstagram className="text-[#a8b2d1] w-[1.4rem] h-[1.4rem]" /></li>                      
            <li className=''><CiTwitter className="text-[#a8b2d1] w-[1.4rem] h-[1.4rem]" /></li>                      
            <li className=''><FiLinkedin className="text-[#a8b2d1] w-[1.4rem] h-[1.4rem]" /></li>                      
        </ul>
    </div>
  )
}

export default LeftStyledComponent