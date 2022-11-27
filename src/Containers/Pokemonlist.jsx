import React from "react";
import {useDispatch, useSelector} from  "react-redux"
import  _ from "lodash"
import { GetPokemonList } from "../actions/pokemonAction";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import ReactPaginate from "react-paginate"




const Pokemonlist = (props) => { 
    const [search, setSearch] = useState("")
    const dispatch = useDispatch();
    const Pokemonlist = useSelector(state => state.PokemonList);
    const navigate = useNavigate()

    React.useEffect(() =>{ 
        FetchData(1)
    },[]);

    const FetchData = (page) => { 
        dispatch(GetPokemonList(page))

    }

    const ShowData = () =>{ 
        if(Pokemonlist.loading){ 
            return<p>loading...</p>
        }


        if (!_.isEmpty(Pokemonlist.data)){ 
            return(  
                 <div className={"list-wrapper"}> 
                {Pokemonlist.data.map(el =>{ 
                return (<div className={"pokemon-item"} key={el.name}> 
                    <p>{el.name}</p>
                    <Link  to ={`/pokemon/${el.name}`}>view</Link>
               </div> 
               )
            })}
            </div>
            )  
        }   


        if(Pokemonlist.errorMsg !== ""){ 
            return <p>{Pokemonlist.errorMsg}</p>
        }

        return <p>unable to get data</p>

    };
    return( 
        <div> 
            <div className={"search-wrapper"}> 
            <p>search:</p>
            <input type='text' onChange = {e =>setSearch(e.target.value)}></input>
            <button onClick={()=>navigate(`/pokemon/${search}`)}>search</button>

            </div>
            {ShowData()}
            {!_.isEmpty(Pokemonlist.data) && ( 
                <ReactPaginate 
                pageCount={Math.ceil(Pokemonlist.count / 15)} 
                pageRangeDisplayed = {2} 
                marginPagesDisplayed = {1} 
                onPageChange = {(data) =>FetchData(data.selected +1)} 
                containerClassName = "pagination"
                />
            )}
        </div>
    
    )
};

export default Pokemonlist;