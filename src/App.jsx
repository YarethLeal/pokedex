import { useState } from 'react'
import SideBar from './components/SideBar'
import PokemonDetails from './pages/PokemonDetails'

function App() {
  const [currentPokemon, setCurrentPokemon] = useState(1)

  return (
    <>
      <SideBar activePokemon={currentPokemon} setActive={setCurrentPokemon} />
      <PokemonDetails activePokemon={currentPokemon} />
    </>
  )
}

export default App
