import React, { useEffect, useRef } from 'react'
import PostCard from '@/components/PostCard'
import { useFeed } from '@/api/feed';

const Home = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isFetchingNextPage,
  } = useFeed();

  const loadMoreRef = useRef(null);

  // Infinite Scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasNextPage) {
        fetchNextPage();
      }
    });

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => observer.disconnect();
  }, [hasNextPage, fetchNextPage]);

  if (isLoading) {
    return <p className="text-center mt-10">Loading feed...</p>;
  }

  // flatten pages
  const posts = data?.pages?.flatMap((page) => page?.posts) || [];
 

  return (
    <div className='max-w-[672px] pt-8 px-6 mx-auto bg-[#F8FAFC] pb-6 flex flex-col gap-8'>
      <div>
        <h1 className='font-normal text-[30px]'>Your Feed</h1>
        <p className='text-[16px] font-normal'>Discover mindful moments from your community</p>
      </div>
      {posts.map((post) => (
        <PostCard key={post.id} index={post.id} post={post} />
      ))}

      {/* infinite scroll trigger */}
      <div ref={loadMoreRef} className="text-center py-4">
        {isFetchingNextPage && <p>Loading more...</p>}
      </div>
    </div>
  )
}

export default Home