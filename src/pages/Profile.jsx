import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import React from 'react'
import SettingIcon from "../assets/setting.svg?react"

const Profile = () => {

 const stats = [
  { id: 1, label: "Posts", value: 42 },
  { id: 2, label: "Followers", value: 1247 },
  { id: 3, label: "Following", value: 389 },
];

  return (
    <div className="bg-[#F8FAFC] px-6 pt-8 max-w-[1024px] mx-auto">
      <Card className="p-8 max-w-[976px] shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)]">
        <div className='flex flex-col lg:flex-row gap-8'>
          <div className='image-section relative w-fit h-fit'>
            <div className='h-32 w-32 bg-amber-300 rounded-full border-2 border-amber-800'></div>
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
                <SettingIcon/><p>Edit Profile</p>
              </Button>
            </div>
            <div>
              <p>Living mindfully, creating intentionally</p>
            </div>
             <div className='flex gap-8 mt-6'>
              {stats.map((item)=>(
              <div>
                <p className='text-[24px]'>{item.value}</p>
                <p className='text-[14px] text-[#45556C]'>{item.label}</p>
              </div>
              ))}              
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default Profile