import './pokemonCard.css'

function PokemonCard({id, name, image}) {
    id = ("00" + id).slice (-3);
    return (
        <div>
            <div className="PokemonCard">
                <div className="pokemon-number">No.{id}</div>
                <div className="pokemon-name">{name}</div>
                <img src={image}/>
            </div>
        </div>
    )
}


export default PokemonCard