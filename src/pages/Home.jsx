import React from 'react'
import PostCard from '@/components/PostCard'

const Home = () => {
  return (
    <div className='max-w-[672px] pt-8 px-6 mx-auto bg-[#F8FAFC] pb-6 flex flex-col gap-8'>
      <div>
        <h1 className='font-normal text-[30px]'>Your Feed</h1>
        <p className='text-[16px] font-normal'>Discover mindful moments from your community</p>
      </div>
      {Array.from({ length: 10 }).map((_, index) => (
        <PostCard key={index} index={index+1} />
      ))}
    </div>
  )
}

export default Home