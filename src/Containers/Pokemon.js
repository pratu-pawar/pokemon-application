import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetPokemon } from "../actions/pokemonAction";
import { isEmpty } from "lodash";
import { useParams } from "react-router-dom";



const Pokemon = (props) => {
    //debugger
    const params = useParams() 
    const pokemonName = params.pokemon;
    const dispatch = useDispatch()
    const pokemonState = useSelector(state => state.Pokemon);
    React.useEffect (() =>{ 
        dispatch(GetPokemon(pokemonName))
    }, [])

    const ShowData = () =>{ 
       
        if(!isEmpty(pokemonState.data)){ 
            const pokeData = pokemonState.data
            return ( 
                <div className="pokemon-wrapper"> 
                    <div className="items"> 
                     <h1>sprites</h1>
                    <img src={pokeData.sprites.front_default} alt=""></img>
                    <img src={pokeData.sprites.back_default} alt=""></img>
                    <img src={pokeData.sprites.front_shiny} alt=""></img>
                    <img src={pokeData.sprites.front_shiny} alt=""></img>
             </div>
             <div className="items"> 
                <h1>Stats</h1>
                {pokeData.stats.map(el =>{ 
                    return <p key={el.stat.name}>{el.stat.name} {el.stat.base_stat}</p>
                })}
             </div>

             <div className="items"> 
                <h1>Abilities</h1>
                {pokeData.abilities.map(el =>{ 
                    return <p key={el.ability.name}>{el.ability.name}</p>
                })}
             </div>
                </div>
       
            )
            
        }
        if (pokemonState.loading){ 
            return<p>loading...</p>
        }
        if(pokemonState.errormsg !== ""){ 
            return <p>{pokemonState.errorMsg}</p>
        }
        return  <p> error getting pokemon</p>
        

    }


    return( 
        <div className="poke"> 
            <h1>{pokemonName}</h1>
            <ShowData/>
        </div>
    )
};

export default Pokemon;

