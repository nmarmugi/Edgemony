import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar/Navbar"

function LayoutDefault() {
	return (
		<div className="w-full min-h-dvh flex justify-center items-center">
			<Navbar />
			<div>
				<Outlet />
			</div>
		</div>
	)
}

export default LayoutDefault