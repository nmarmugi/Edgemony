function CountDown({days, hours, minutes, seconds}) {
	return (
		<div className="w-full flex gap-4 justify-center relative">
			<div className="w-44 max-w-44 h-44 max-h-44 bg-[#46393D] flex flex-col justify-center items-center gap-3 rounded-2xl">
				<h2 className="text-[#F8C272] text-8xl">{days}</h2>
				<span className="text-[#F8C272] tracking-widest">days</span>
			</div>
			<div className="h-44 max-h-44 flex justify-center items-center text-8xl text-[#46393D]">:</div>
			<div className="w-44 max-w-44 h-44 max-h-44 bg-[#46393D] flex flex-col justify-center items-center gap-3 rounded-2xl">
				<h2 className="text-[#F8C272] text-8xl">{hours}</h2>
				<span className="text-[#F8C272] tracking-widest">hours</span>
			</div>
			<div className="h-44 max-h-44 flex justify-center items-center text-8xl text-[#46393D]">:</div>
			<div className="w-44 max-w-44 h-44 max-h-44 bg-[#46393D] flex flex-col justify-center items-center gap-3 rounded-2xl">
				<h2 className="text-[#F8C272] text-8xl">{minutes}</h2>
				<span className="text-[#F8C272] tracking-widest">minutes</span>
			</div>
			<div className="h-44 max-h-44 flex justify-center items-center text-8xl text-[#46393D]">:</div>
			<div className="w-44 max-w-44 h-44 max-h-44 bg-[#46393D] flex flex-col justify-center items-center gap-3 rounded-2xl">
				<h2 className="text-[#F8C272] text-8xl">{seconds}</h2>
				<span className="text-[#F8C272] tracking-widest">seconds</span>
			</div>
		</div>
	)
}

export default CountDown