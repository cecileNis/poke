import './App.css'
import Header from './header/Header'
import PokemonListPage from "./pokemonListPage/PokemonListPage";



function App() {
  return (
      <div className='App'>
          <Header></Header>
          <div className='pokemon-List'>
              <PokemonListPage></PokemonListPage>
          </div>
      </div>
  )
}

export default App

