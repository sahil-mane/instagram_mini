import React from 'react'
import Header from '../components/header'
import { Outlet } from "react-router-dom";

const MainLayout = () => {
	return (
		<>
			<Header />
			<div className='pt-[66px] max-w-[1104px] mx-auto min-h-screen'>
			<Outlet />
			</div>
		</>
	)
}

export default MainLayout