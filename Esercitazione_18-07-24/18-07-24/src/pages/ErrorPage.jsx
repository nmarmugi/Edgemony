import { NavLink, useRouteError } from "react-router-dom"

function ErrorPage() {
	const error = useRouteError();
	console.error(error);
	return (
		<div className="relative w-full h-dvh flex">
			<div className="w-1/2 h-full flex items-center justify-center">
				<img className="w-96" src="/img/man-holding-laptop-with-system-error.png" alt="Immagine" />
			</div>
			<div className="w-1/2 h-full flex items-center justify-center flex-col gap-6">
				<h1 className="text-7xl font-extrabold">OPS!</h1>
				<p className="bg-[#FBCA32] p-8 pt-11 pb-11 rounded-full font-extrabold">Error!</p>
				<p className="font-extrabold text-lg">{error.statusText || error.message}</p>
				<NavLink className='cursor-pointer border p-2 rounded-md hover:bg-[#FBCA32] transition-all duration-300 ease' to={'/'}>BACK TO HOME</NavLink>
			</div>
		</div>
	)
}

export default ErrorPage