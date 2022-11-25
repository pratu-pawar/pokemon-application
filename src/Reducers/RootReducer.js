import { combineReducers } from "redux";
import PokemonlistReducer from "./PokemonlistReducer";
import PokemonMultipleReducer from "./PokemonMultipleReducer";

export default combineReducers({ 
    reducer:{},

    PokemonList : PokemonlistReducer,
    Pokemon : PokemonMultipleReducer
});