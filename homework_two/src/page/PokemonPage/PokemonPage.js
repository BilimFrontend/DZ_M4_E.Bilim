import React, {useEffect, useState} from 'react';
import axios from "axios";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import classes from "./PokemonPage.module.css";


const PokemonPage = () => {
    const [pokemons, setPokemons] = useState([])
    console.log(pokemons)
    const getPokemons = async () => {
            const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/`) //<- data {} получили сразу data
            setPokemons(data.results)
    }

    useEffect(() => {
        getPokemons()
    }, [])

    return (
        <div className={classes.pokemon_card}>
            {
                pokemons.map(pokemon => <PokemonCard pokemons={pokemon}/>)
            }
        </div>
    );
};

export default PokemonPage;