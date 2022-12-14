import React from "react"
import './App.css';
import {Routes, Route, Link , NavLink} from "react-router-dom"
import Pokemonlist from "./Containers/Pokemonlist"
import Pokemon from "./Containers/Pokemon"

function App() {
  return ( 
    <div className="App">
      <nav>
    <NavLink to={"/"}> Search</NavLink>
    </nav>
    <Routes> 
      <Route path="/" exact element={<Pokemonlist />}></Route>
      <Route path="/pokemon/:pokemon" exact element={<Pokemon/>}></Route>
    </Routes>

    </div>
  )
  };

  export default App;