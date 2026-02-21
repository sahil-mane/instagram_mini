import React from 'react'
import post from "../utils/post.json"
import PostCard from '@/components/PostCard'

const Home = () => {
  console.log("post", post)
  return (
    <div className='max-w-[672px] pt-8 px-6 mx-auto bg-[#F8FAFC] pb-6 flex flex-col gap-8'>
      <div>
        <h1>Your Feed</h1>
        <p>Discover mindful moments from your community</p>
      </div>
      {Array.from({ length: 10 }).map((_, index) => (
        <PostCard key={index} />
      ))}
    </div>
  )
}

export default Home