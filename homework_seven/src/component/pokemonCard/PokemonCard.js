import axios from "axios";
import classes from "./PokemonCard.module.css";
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const PokemonCard = ({pokemons}) => {
    const [pokemonObj, setPokemonObj] = useState({})
    console.log(pokemonObj)
    const getPokemons = async () => {
        try {
            const {data} = await axios.get(pokemons.url) //<- data {} получили сразу data
            return data
        }catch (e) {
            console.log(e.message)
        }
    }

    useEffect(() => {
        getPokemons().then((pokemonObj) => setPokemonObj(pokemonObj))
    }, [])

    return (
        <div className={classes.pokemon_item}>
            <img src={pokemonObj?.sprites?.other?.dream_world?.front_default} alt=""/>
            <div className={classes.pokemon_card}>
                <div className={classes.pokemon_info}>
                    <p className={classes.pokemon_text}>Name:</p>
                    <p className={classes.pokemon_name}>{pokemons.name}</p>
                </div>
                    <Link className={classes.link} to={`/pokemon/${pokemons.name}`}>Подробнее</Link>
            </div>
        </div>
    );
};

export default PokemonCard;