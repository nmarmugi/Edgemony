import './App.css'
import posts from './assets/data/data.json'
import Main from './components/layout/Main/Main'

function App() {

  return (
    <>
      <Main posts={posts}/>
    </>
  )
}

export default App
