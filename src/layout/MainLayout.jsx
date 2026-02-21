import React from 'react'
import Header from '../components/header'
import { Outlet } from "react-router-dom";

const MainLayout = () => {
	return (
		<>
			<Header />
			<div className='pt-[66px] max-w-[1104px] mx-auto overflow-scroll'>
			<Outlet />
			</div>
		</>
	)
}

export default MainLayout