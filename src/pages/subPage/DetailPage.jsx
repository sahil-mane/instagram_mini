import React from 'react'
import LeftIcon from "../../assets/Left_Icon.svg?react"
import { Card } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { useNavigate } from 'react-router-dom'
import MessageIcon from "../../assets/Message_icon.svg?react"
import CommentIcon from "../../assets/Comment_icon.svg?react"
import LikeIcon from "../../assets/Like_icon.svg?react"
import SaveIcon from "../../assets/ActiveSave.svg?react"
import CustomTooltip from '@/components/CustomTooltip'

const DetailPage = () => {
	const navigate = useNavigate()

	return (
		<div className='bg-[#F8FAFC] px-6 pt-6 min-h-screen lg:min-h-[calc(100vh-80px)] flex flex-col'>

			<div onClick={() => { navigate(-1) }} className='flex gap-2 items-center pb-6 cursor-pointer'>
				<LeftIcon />
				<p>Back</p>
			</div>

			<div className='flex flex-col lg:flex-row flex-1 gap-8'>
				<div className=" lg:flex-1">
					<div className='h-75 lg:h-134 lg:w-134 bg-[#F1F5F9] rounded-[24px]'>
					</div>
				</div>
				<div className=' flex-1 flex flex-col gap-6'>
					<Card className="p-6.25 flex flex-col gap-0">
						<div className='flex justify-between mb-3'>
							<div className='flex gap-3'>
								<Avatar className="h-10 w-10">
									<AvatarImage src="https://randomuser.me/api/portraits/women/44.jpg" />
									<AvatarFallback>SM</AvatarFallback>
								</Avatar>
								<div>
									<p>Sophia Martinez</p>
									<p>@sophia_lens</p>
								</div>
							</div>
							<p>...</p>
						</div>
						<p className='mb-3'>Golden hour never disappoints. Finding peace in the quiet moments</p>
						<p>February 14, 2026 at 6:30 PM</p>
						<div className='border-t-2 border-[#E2E8F0] mt-6'>
							<div className='flex justify-between  py-3 mb-4'>
								<div className='flex gap-4'>
									<CustomTooltip title={"Like"}>
										<span className='flex'><LikeIcon /></span>
									</CustomTooltip>
									<CustomTooltip title={"comment"}>
										<span className='flex'><CommentIcon /></span>
									</CustomTooltip>
									<CustomTooltip title={"direct"}>
										<span className='flex'><MessageIcon /></span>
									</CustomTooltip>
								</div>
								<CustomTooltip title={"Save"}>
								<span className='flex'><SaveIcon /></span>
								</CustomTooltip>
							</div>
							<p>324 likes</p>
						</div>
					</Card>
					<Card className="p-6.25 flex flex-col gap-6">
						<p className='text-[18px]'>Comments (2)</p>
						<div className='flex gap-3'>
							<Avatar className="h-10 w-10">
								<AvatarImage src="https://randomuser.me/api/portraits/women/44.jpg" />
								<AvatarFallback>SM</AvatarFallback>
							</Avatar>
							<div>
								<Card className="bg-[#F8FAFC] shadow-none border-none p-4 rounded-[16px]">
									<h1 className='text-[16px]'>James Chen</h1>
									<p>Absolutely stunning! The colors are so calming 🌅</p>
								</Card>
								<div className='flex flex-col lg:flex-row gap-3.5 mt-3'>
									<p>February 14, 2026 at 7:15 PM</p>
									<p>12 likes</p>
									<p>Reply</p>
								</div>
							</div>

						</div>
						<div className='flex gap-3 border-t-2 border-[#E2E8F0] pt-6'>
							<Textarea className=" focus-visible:ring-0 focus:ring-0 border-none shadow-none bg-[#F8FAFC] rounded-3xl " placeholder="Add a thoughtful comment..." />
							<Button className="bg-linear-to-r from-[#9810FA] to-[#4F39F6] rounded-3xl opacity-50">Post</Button>
						</div>
					</Card>
				</div>
			</div>

		</div>
	)
}

export default DetailPage