import React from 'react'
import LeftIcon from "../../assets/Left_Icon.svg?react"

const DetailPage = () => {
    
  return (
    <div className='bg-[#F8FAFC] px-6 pt-6 min-h-screen lg:min-h-[calc(100vh-80px)] flex flex-col'>

        <div className='flex gap-2 items-center pb-6'>
            <LeftIcon />
            <p>Back</p>
        </div>

        <div className='flex flex-col lg:flex-row flex-1 gap-8'>
            <div className=" lg:flex-1">
                <div className='h-[300px] lg:h-[536px] lg:w-[536px] bg-[#F1F5F9] rounded-[24px]'>
                </div>
            </div>
            <div className=' flex-1'>content</div>
        </div>

    </div>
  )
}

export default DetailPage