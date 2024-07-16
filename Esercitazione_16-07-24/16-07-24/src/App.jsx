import { useEffect, useState } from "react";
import CountDown from "./components/CountDown/CountDown";
import Button from "./components/Button/Button";

const resetState = { days: 0, hours: 0, minutes: 0, seconds: 0 };
const resetInput = { days: "", hours: "", minutes: "", seconds: "" };

function App() {
  const [countDown, setCountDown] = useState(resetState);
  const [inputValue, setInputValue] = useState(resetInput);
  const [isClick, setIsClick] = useState(false);
  const [modal, setModal] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setInputValue((prevState) => ({ ...prevState, [name]: value }));
    setCountDown((prevState) => ({ ...prevState, [name]: parseInt(value, 10) }));
  }

  function handleClick() {
    setInputValue(resetInput);
    setIsClick(true);
  }

  useEffect(() => {
    if (!isClick) return;

    const interval = setInterval(() => {
      setCountDown((prevState) => {
        let { days, hours, minutes, seconds } = prevState;

        if (seconds > 0) {
          seconds--;
        } else {
          if (minutes > 0) {
            minutes--;
            seconds = 59;
          } else {
            if (hours > 0) {
              hours--;
              minutes = 59;
              seconds = 59;
            } else {
              if (days > 0) {
                days--;
                hours = 23;
                minutes = 59;
                seconds = 59;
              } else {
                clearInterval(interval);
                setModal(true);
                setIsClick(false);
              }
            }
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isClick]);

  function handleCloseModal() {
    setModal(false);
  }

  return (
    <>
      <div className="w-full min-h-screen flex flex-col gap-14 items-center justify-center relative">
        <div className="absolute w-full h-full top-0 left-0">
          <img
            className="object-cover w-full h-full"
            src="./img/3d-render-sunset-landscape-with-mountains-strees-lake.jpg"
            alt="Background Image"
          />
        </div>
        <h1 className="relative text-5xl text-[#46393D]">Set your countdown</h1>
        <CountDown
          days={isClick ? countDown.days : 0}
          hours={isClick ? countDown.hours : 0}
          minutes={isClick ? countDown.minutes : 0}
          seconds={isClick ? countDown.seconds : 0}
        />
        <div className="flex justify-center items-center relative gap-2">
          <input
            value={inputValue.days}
            name="days"
            onChange={handleChange}
            placeholder="dd"
            className="p-1 w-9 max-w-9 rounded placeholder:text-[#46393D] placeholder:text-center no-scrollbar focus:border-[#46393D] focus:outline-none focus:border-2"
            type="number"
          />
          <div className="text-[#46393D]">:</div>
          <input
            value={inputValue.hours}
            name="hours"
            onChange={handleChange}
            placeholder="hh"
            className="p-1 w-9 max-w-9 rounded placeholder:text-[#46393D] placeholder:text-center no-scrollbar focus:border-[#46393D] focus:outline-none focus:border-2"
            type="number"
          />
          <div className="text-[#46393D]">:</div>
          <input
            value={inputValue.minutes}
            name="minutes"
            onChange={handleChange}
            placeholder="mm"
            className="p-1 w-9 max-w-9 rounded placeholder:text-[#46393D] placeholder:text-center no-scrollbar focus:border-[#46393D] focus:outline-none focus:border-2"
            type="number"
          />
          <div className="text-[#46393D]">:</div>
          <input
            value={inputValue.seconds}
            name="seconds"
            onChange={handleChange}
            placeholder="ss"
            className="p-1 w-9 max-w-9 rounded placeholder:text-[#46393D] placeholder:text-center no-scrollbar focus:border-[#46393D] focus:outline-none focus:border-2"
            type="number"
          />
        </div>
        <Button onClick={handleClick} isClicked={isClick} />
      </div>
      <div className={modal ? "absolute w-full min-h-screen bg-black bg-opacity-50 top-0 flex justify-center items-center" : 'hidden'}>
        <span onClick={handleCloseModal} className="text-8xl absolute top-7 right-7 mr-7 mt-7 text-[#46393D] hover:text-white transition-all duration-300 ease cursor-pointer">&times;</span>
        <h2 className="bg-white text-7xl text-center p-12 rounded-3xl">🎉🎉🎉 good end countdown 🎉🎉🎉</h2>
      </div>
    </>
  );
}

export default App;

