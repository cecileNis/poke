import './pokemonList.css'
import PokemonCard from "./pokemonCard/PokemonCard";
import pokemons from '../../pokemons.json';

function PokemonList() {
    const pokemonList = pokemons.map((pokemon)=>{
        return   <PokemonCard id={pokemon.id} name={pokemon.names.fr} image={pokemon.image}></PokemonCard>
    })
    return (
        <div className="pokemon-List">
            {pokemonList}
        </div>
    )
}

export default PokemonList