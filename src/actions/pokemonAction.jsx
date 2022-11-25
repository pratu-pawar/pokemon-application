import axios from "axios";



export const GetPokemonList = (page) => async dispatch =>{ 
try { 
   dispatch({ 
      type:"POKEMOM_LIST_LOADING"
   })
   const perPage = 15;
   const offset = (page * perPage) - perPage;

   // 1 = 0
   // 2 = 15 28
   // 3 = 30 3*15 - 15 = 30
   let url = "https://pokeapi.co/api/v2/pokemon?limitandoffset"
   

   const res =  await axios.get( `https://pokeapi.co/api/v2/pokemon?limit=${perPage}and offset=${offset}`)
   dispatch({ 
      type:"POKEMOM_LIST_SUCCESS",
      payload:res.data
   })


}catch(e) { 
   dispatch({ 
      type:"POKEMON_LIST _FAIL"
   })
}
};

export const GetPokemon = (pokemon) => async dispatch =>{ 
   try { 
      dispatch({ 
         type:"POKEMOM_MULTIPLE_LOADING"
      });
      
      let url = "https://pokeapi.co/api/v2/pokemon?limitandoffset"
      
   
      const res =  await axios.get( `https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      dispatch({ 
         type:"POKEMOM_MULTIPLE_SUCCESS",
         payload:res.data,
         pokemonName:pokemon
      })
   
   
   }catch(e) { 
      dispatch({ 
         type:"POKEMON_MULTIPLE _FAIL"
      })
   }
};

