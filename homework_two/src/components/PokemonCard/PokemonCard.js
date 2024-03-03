import React, {useEffect, useState} from 'react';
import axios from "axios";
import classes from "./PokemonCard.module.css";

const PokemonCard = ({pokemons}) => {
    const [pokemonObj, setPokemonObj] = useState({})
    console.log(pokemonObj)
    const getPokemons = async () => {
            const {data} = await axios.get(pokemons.url) //<- data {} получили сразу data
            setPokemonObj(data)
    }

    useEffect(() => {
        getPokemons()
    }, [])

    return (
        <div className={classes.pokemon_item}>
            <img src={pokemonObj?.sprites?.other?.dream_world?.front_default} alt=""/>
            <div className={classes.pokemon_info}>
                <p className={classes.pokemon_text}>Name:</p>
                <p className={classes.pokemon_name}>{pokemons.name}</p>
            </div>
        </div>
    );
};

export default PokemonCard;