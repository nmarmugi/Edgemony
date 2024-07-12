import { useState } from "react"
import LayoutCard from "./Layout/LayoutCard"
import Card from "./components/Card/Card"
import Modal from "./components/Modal/Modal"

function App() {
  const [isOpen, setIsOpen] = useState(false)

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <>
      <LayoutCard>
        <Card onClick={openModal} />
        <Modal isOpen={isOpen} onClick={closeModal} />
      </LayoutCard>
    </>
  )
}

export default App
