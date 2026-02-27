import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import React, { useState } from 'react'
import SettingIcon from "../assets/setting.svg?react"
import ActivePost from "../assets/ActivePost.svg?react";
import DisablePost from "../assets/DisablePost.svg?react"
import DisableSave from "../assets/disableSave.svg?react"
import ActiveSave from "../assets/ActiveSave.svg?react"
import ProfilePic from "../assets/profile_pic.jpg"

const Profile = () => {

  const [activeSection, setActiveSection] = useState("Posts")

  const stats = [
    { id: 1, label: "Posts", value: 42 },
    { id: 2, label: "Followers", value: 1247 },
    { id: 3, label: "Following", value: 389 },
  ];

  const postData = [
  { id: 1, image: "https://picsum.photos/400?1", isSaved: true },
  { id: 2, image: "https://picsum.photos/400?2", isSaved: false },
  { id: 3, image: "https://picsum.photos/400?3", isSaved: true },
  { id: 4, image: "https://picsum.photos/400?4", isSaved: false },
  { id: 5, image: "https://picsum.photos/400?5", isSaved: true },
  { id: 6, image: "https://picsum.photos/400?6", isSaved: false },
  { id: 7, image: "https://picsum.photos/400?7", isSaved: true },
  { id: 8, image: "https://picsum.photos/400?8", isSaved: false },
  { id: 9, image: "https://picsum.photos/400?9", isSaved: true },
  { id: 10, image: "https://picsum.photos/400?10", isSaved: false },
  { id: 11, image: "https://picsum.photos/400?11", isSaved: true },
  { id: 12, image: "https://picsum.photos/400?12", isSaved: false },
].filter((d) =>
  activeSection === "saved" ? d.isSaved : !d.isSaved
);

  return (
    <div className="bg-[#F8FAFC] px-6 py-8 max-w-[1024px] mx-auto">
      <Card className="p-8 max-w-[976px] shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)] mb-8">
        <div className='flex flex-col lg:flex-row gap-8'>
          <div className='image-section relative w-fit h-fit'>
            <div className='h-32 w-32  rounded-full border-2 border-[#F1F5F9]'>
              <img src={ProfilePic} className="rounded-full" alt="" />
            </div>
            <div className='h-10 w-10 bg-gradient-to-r from-[#AD46FF] to-[#4F39F6] rounded-full flex justify-center items-center absolute bottom-1 right-0'>
              ✨
            </div>
          </div>
          <div className='profile-detail'>
            <div className='flex gap-4 mb-4'>
              <div>
                <p className='text-[24px] text-[#0F172B]'>You</p>
                <p className='text-[16px] text-[#45556C]'>@you</p>
              </div>
              <Button className="bg-[#F1F5F9] flex gap-3 hover:bg-[#F1F5F9] text-black rounded-[14px]">
                <SettingIcon /><p>Edit Profile</p>
              </Button>
            </div>
            <div>
              <p>Living mindfully, creating intentionally</p>
            </div>
            <div className='flex gap-8 mt-6'>
              {stats.map((item) => (
                <div>
                  <p className='text-[24px]'>{item.value}</p>
                  <p className='text-[14px] text-[#45556C]'>{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>
      <div>
        <div className="relative flex justify-center gap-12 border-b">
          <div
            className="absolute bottom-0 h-[2px] bg-[#9810FA] transition-all duration-300"
            style={{
              width: activeSection === "Posts" ? "70px" : "70px",
              left: activeSection === "Posts" ? "calc(50% - 90px)" : "calc(50% + 20px)",
            }}
          />

          <div onClick={() => setActiveSection("Posts")} className="pb-5 cursor-pointer flex gap-1.75">
            <span>
              {activeSection === "Posts" ? <ActivePost /> : <span className='flex justify-center items-center h-4 w-4'><DisablePost /></span>}
            </span>
            <p className={`flex ${activeSection === "Posts" ? `text-[#0F172B]` : `text-[#62748E]`} text-[16px]/[15px]`}>
              Posts
            </p>
          </div>

          <div onClick={() => setActiveSection("saved")} className="pb-5 cursor-pointer flex gap-1.75">
            <span>
              {activeSection === "saved" ? <span className='flex justify-center items-center h-4 w-4'><ActiveSave /></span> : <span className='flex justify-center items-center h-4 w-4'><DisableSave /></span>}
            </span>
            <p className={`flex ${activeSection === "saved" ? `text-[#0F172B]` : `text-[#62748E]`} text-[16px]/[15px]`}>
              Saved
            </p>
          </div>
        </div>
        <div className='border-t-0 border-[#E2E8F0] mb-8'></div>
        <div>
          {postData.length === 0 ?
            <>
              <div className='h-56 w-full flex justify-center items-center'>
                <div className='w-fit flex flex-col items-center'>
                  <div className='h-20 w-20 bg-[#F1F5F9] rounded-full flex justify-center items-center mb-4'>
                    <DisablePost />
                  </div>
                  <p className='mb-2 text-[16px]'>No {activeSection} yet</p>
                  <p className='text-[#62748E] text-[14px]'>{activeSection !== "Posts" ? "save" : "Share"} your first moment</p>
                </div>
              </div>
            </>
            : <>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {postData.map((post) => (
                  <div
                    key={post.id}
                    className="relative w-full aspect-square overflow-hidden rounded-lg cursor-pointer group"
                  >
                    <img
                      src={post.image}
                      alt="post"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />

                    {/* Hover Overlay (Desktop Only Feel) */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition duration-300" />
                  </div>
                ))}
              </div>
            </>}
        </div>
      </div>
    </div>
  )
}

export default Profile