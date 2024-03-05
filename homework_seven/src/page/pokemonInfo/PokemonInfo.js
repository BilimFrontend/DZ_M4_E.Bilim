import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, useParams} from "react-router-dom";
import classes from "./PokemonInfo.module.css";

const PokemonInfo = () => {

    const [pokemons, setPokemons] = useState({})
    const {name} = useParams(pokemons.name)
    console.log(pokemons)
    const getPokemons = async () => {
        try {
            const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`) //<- data {} получили сразу data
            return data
        }catch (e) {
            console.log(e.message)
        }
    }

    useEffect(() => {
        getPokemons().then((pokemons) => setPokemons(pokemons))
    }, [name])



    return (
        <div className={classes.pokemon}>
            <div className={classes.pokemon_item}>
                <img src={pokemons?.sprites?.other?.dream_world?.front_default} alt=""/>
                <div className={classes.pokemon_info}>
                    <div className={classes.pokemon_card}>
                        <p className={classes.pokemon_title}><strong>Name: </strong>{pokemons.name}</p>
                        <p className={classes.pokemon_title}>
                            <strong>Type: </strong>{pokemons?.types?.map(value => value.type.name).join(', ')}</p>
                        <p className={classes.pokemon_title}>
                            <strong>Stats: </strong>{pokemons?.stats?.map(value => value.stat.name).join(', ')}</p>
                        <p className={classes.pokemon_title}>
                            <strong>Abilities: </strong>{pokemons?.abilities?.map(value => value.ability.name).join(', ')}
                        </p>
                        <p className={classes.pokemon_title}><strong>Some
                            Moves: </strong>{pokemons?.moves?.map(value => value.move.name).splice(0, 5).join(', ')}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PokemonInfo;