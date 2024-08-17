import { useState } from 'react'
import SideBar from './components/SideBar'

function App() {
  const [currentPokemon, setCurrentPokemon] = useState(1)

  return (
    <>
      <SideBar activePokemon={currentPokemon} setActive={setCurrentPokemon}/>
      <main>{currentPokemon}</main>
    </>
  )
}

export default App
