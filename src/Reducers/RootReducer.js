import { combineReducers } from "redux";
import PokemonlistReducer from "./PokemonlistReducer";
import PokemonMultipleReducer from "./PokemonMultipleReducer";

export default combineReducers({ 
    PokemonList : PokemonlistReducer,
    Pokemon : PokemonMultipleReducer
});