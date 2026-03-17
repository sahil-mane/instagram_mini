import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import AppSidebar from "../components/AppSidebar";

const MainLayout = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="flex">
			<AppSidebar isOpen={isOpen} setIsOpen={setIsOpen} />

			{/* Overlay (Mobile only) */}
			{isOpen && (
				<div
					className="fixed inset-0 bg-black/40 md:hidden z-30"
					onClick={() => setIsOpen(false)}
				/>
			)}

			{/* Content */}
			<div className="flex-1 min-h-screen md:ml-20 lg:ml-20 transition-all duration-300">
				<Outlet />
			</div>
		</div>)
};

export default MainLayout;