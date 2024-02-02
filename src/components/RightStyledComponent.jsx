import React from 'react'

function RightStyledComponent() {
  return (
    <div className='hidden lg:z-50 lg:w-[40px] lg:bottom-0 lg:right-[40px] lg:left-auto lg:fixed lg:text-2xl lg:flex lg:justify-center lg:items-center' >
        <ul className='flex flex-col gap-[170px] after:inline-block after:w-[1px] after:h-[90px] after:my-[0px] after:mx-[auto] after:bg-[#a8b2d1]'>
            <div className='mb-[-50px] p-[10px] text-[12px] leading-[18px] mx-auto rotate-90 text-[#a8b2d1] tracking-widest'>abubachukwuemeka@outlook.com</div>
        </ul>
    </div>
  )
}

export default RightStyledComponent