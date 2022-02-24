import PokemonList from "./pokemonList/PokemonList";
import SearchBar from "./searchBar/SearchBar";



function PokemonListPage() {
    return (
        <div className='pokemon-List'>
            <SearchBar></SearchBar>
            <PokemonList></PokemonList>
        </div>

    )
}

export default PokemonListPage