import React, { useState } from 'react'
import axios from 'axios'

const AxiosPokemon = () => {
    // STATE
    const [pokemons, setPokemons] = useState([])

    // BUTTON HANDLER
    const buttonHandler = (e) => {
        axios.get("https://pokeapi.co/api/v2/pokemon")
            // SUCCCESSFUL
            .then(finalResponse => setPokemons(finalResponse.data.results))
            // NOT SUCCESSFUL
            .catch(error => console.log(error))
    }

return (
    <div>
        <button onClick={buttonHandler}>Fetch Pokemons</button>

        {/* DISPLAY POKEMONS */}
        {
            pokemons.map((pokemon) => {
                return (
                    (pokemon) ?
                    <>
                        <p>{pokemon.name}</p>
                    </> : <h4>Loading...</h4>
                )
            })
        }
    </div>
)
}

export default AxiosPokemon