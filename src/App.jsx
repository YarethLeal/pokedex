import { useState } from 'react'
import SideBar from './components/SideBar'
import PokemonDetails from './pages/PokemonDetails'

function App() {
  const [currentPokemon, setCurrentPokemon] = useState(1)
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
      <SideBar activePokemon={currentPokemon} setActive={setCurrentPokemon} searchTerm={searchTerm} />
      <PokemonDetails activePokemon={currentPokemon} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    </>
  )
}

export default App
