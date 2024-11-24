import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MenuButton } from './menu/Menu'
import { HomeHero } from './textAnimation/TextAnimation'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HomeHero/>
    </>
  )
}

export default App
