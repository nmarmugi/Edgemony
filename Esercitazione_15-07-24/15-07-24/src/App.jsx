import Card from "./components/Card/Card"
import { useState, useEffect } from "react"

function App() {
  const [advice, setAdvice] = useState({slip: { id: null, advice: null },
                                        isLoading: false,
                                          isError: false})

  async function fetchAdvice() {
    try {
      setAdvice((prevState => ({...prevState, isError: false})))
      setAdvice((prevState => ({...prevState, isLoading: false})))
      const res = await fetch('https://api.adviceslip.com/advice');
      const {slip} = await res.json();
      setAdvice((prevState => ({...prevState, slip})))
    } catch {
      setAdvice((prevState => ({...prevState, isError: true})))
    } finally {
      setAdvice((prevState => ({...prevState, isLoading: true})))
    }
  }

  useEffect(() => {
    fetchAdvice();
  }, [])

  return (
    <>
    <div className="w-full min-h-dvh flex justify-center items-center bg-[#1E2632]">
      <Card isError={advice.isError} isLoading={advice.isLoading} adviceID={advice.slip.id} adviceText={advice.slip.advice} onClick={() => fetchAdvice()} />
    </div>
    </>
  )
}

export default App
