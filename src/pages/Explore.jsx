import React, { useState } from 'react'
import ExploreDetailPage from '../components/DetailPage/ExploreDetailPage';

const Explore = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [open, setOpen] = useState(false);

  const images = [
    { id: 1, url: "https://picsum.photos/400/600?1", title: "Creative Shot" },
    { id: 2, url: "https://picsum.photos/400/500?2", title: "Mountain View" },
    { id: 3, url: "https://picsum.photos/400/700?3", title: "Street Mood" },
    { id: 4, url: "https://picsum.photos/400/550?4", title: "Minimal Vibes" },
  ];

  const handleClick = (img) => {
    setSelectedImage(img);
    setOpen(true);
  };
  return (
    <div className="bg-[#F8FAFC] py-8 px-6">
      <div className='flex flex-col gap-2 border-2 border-amber-600'>
        <h1 className='text-3xl'>
          Explore
        </h1>
        <p className='text-[20px]'>
          Discover inspiring moments from the community
        </p>
      </div>
      <div className='my-8'>
        <input className='bg-white text-[16px] rounded-3xl py-4 px-6 min-w-1/3 border border-gray-300  focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-200' type="search" placeholder='Search for inspiration...' name="" id="" />
      </div>
      {/* Masonry Images */}
      <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">
        {images.map((img, index) => (
          <div key={index} className="break-inside-avoid">
            <img
              src={img.url}
              alt="explore"
              onClick={() => handleClick(img)}
              className="w-full rounded-2xl mb-4 hover:scale-105 transition-transform duration-300 cursor-pointer"
            />
          </div>
        ))}
      </div>
      <ExploreDetailPage
        open={open}
        setOpen={setOpen}
        selectedImage={selectedImage}
      />
    </div>
  )
}

export default Explore