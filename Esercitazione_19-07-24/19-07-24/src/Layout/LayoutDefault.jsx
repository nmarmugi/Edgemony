import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"

function LayoutDefault() {
	return (
		<div className="w-full h-full">
			<Navbar />
			<div>
				<Outlet />
			</div>
			<Footer />
		</div>
	)
}

export default LayoutDefault