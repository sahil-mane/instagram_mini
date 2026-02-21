import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Explore from '../pages/Explore'
import Profile from '../pages/Profile'
import MainLayout from '../layout/MainLayout'
import Login from '../pages/Login'

const AppRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route element={<MainLayout />}>
					<Route path='/' element={<Home />} />
					<Route path='/explore' element={<Explore />} />
					<Route path='/profile' element={<Profile />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default AppRoutes