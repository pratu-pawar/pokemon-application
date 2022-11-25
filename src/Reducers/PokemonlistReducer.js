const DefaultState = { 
    loading: false,
    date: [],
    errormsg : "",
    count: 0

};

const PokemonlistReducer = ( state = DefaultState, action) =>{ 
    switch (action.type) { 
        case "POKEMOM_LIST_LOADING":
        return { 
            ...state,
            loading :true,
        };
        case "POKEMOM_LIST_FAIL":
        return { 
            ...state,
            loading :false,
            errormsg : "unable to get pokemon"
        };
        case "POKEMOM_LIST_SUCCESS":
        return { 
            ...state,
            loading :false,
            data: action.payload.results,
            errormsg: "",
            count: action.payload.count
        };
        
        default:
       return state
    }

};

export default PokemonlistReducer;