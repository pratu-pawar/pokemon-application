import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetPokemon } from "../actions/pokemonAction";
import _ from "lodash";



const Pokemon = (props) => { 
    const pokemonName = props.match.params.Pokemon;
    const dispatch = useDispatch()
    const pokemonSate = useSelector(state => state.Pokemon);
    React.useEffect ( effect: () =>{ 
        dispatch(GetPokemon(pokemonName))
    }, [])

    const ShowData = () =>{ 
        if(_isEmpty(pokemonSate.data[pokempnName])){ 
            const pokeData = pokemonSate.data[pokempnName]
            return ( 
                <div className={" pokemon-wrapper"}> 
                    <div className={"items"}> 
                     <h1>speites</h1>
                    <img src={pokeData.sprites.front_default} alt=""></img>
                    <img src={pokeData.sprites.back_default} alt=""></img>
                    <img src={pokeData.sprites.front_shiny} alt=""></img>
                    <img src={pokeData.sprites.front_shiny} alt=""></img>
             </div>
             <div className="items"> 
                <h1>Stats</h1>
                {pokeData.state.map(el =>{ 
                    return <p>{el.stat.name} {el.stat.base_stat}</p>
                })}
             </div>

             <div className="items"> 
                <h1>Abilities</h1>
                {pokeData.abilities.map(el =>{ 
                    return <p>{el.abilities.name}</p>
                })}
             </div>
                </div>
            )
            
        }
        if (pokemonState.loading){ 
            return<p>loading...</p>
        }
        if(pokemonSate.errormsg !== ""){ 
            return <p>{pokemonState.errorMsg}</p>
        }
        return  <p> error getting pokemon</p>
        

    }


    return( 
        <div className="poke"> 
            <h1>{pokemonName}</h1>
            {ShowData}
        </div>
    )
};

export default Pokemon;

