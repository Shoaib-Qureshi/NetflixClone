import React, { useState ,useEffect } from 'react';
import axios from "./axios";
import "./Row.css";

const   Base_Url="https://image.tmdb.org/t/p/original/"

 function Row  ({title,fetchUrl,islargeRow})  {
    const [movies,setMovies]=useState([]);
    const [trailerUrl,setTrailerUrl]=useState(""); 
   
    useEffect(() => {
        async function fetchData(){
            const request= await axios.get(fetchUrl);
            console.log(request.data.results);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl])
    
  return (
    <div class='row'>
        <h2 className='RowTitle'>{title}</h2>
        <div className="row_posters">
            {movies.map((movies)=>(
                <img 
                key={movies.id}
                className={`row_poster ${islargeRow && "row_posterLarger"}`}
                src={`${Base_Url}${
                    islargeRow ? movies.poster_path:movies.backdrop_path
                }`}
                alt={movies.name}
                ></img>
            ))}
        </div>
    </div>
  );
}

export default Row;