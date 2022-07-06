import axios from './axios';
import React, { useState ,useEffect } from 'react'
import requests from './request';
import "./Banner.css";

const Banner = () => {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ]
            );
            return requests;
        }
        fetchData();
    }, []);
    function truncate(str, n) {
        return str?.length > n ? str.substring(0, n - 1) + "..." : str;
    }
    return (
        <header className="Banner" 
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`
            ,}}
        > 
            <div className="Banner_contains">
                <h1 className="Banner_title">
                    {movie?.name || movie?.title || movie?.original_name}
                </h1>
                <div className="Banner_btn">
                    <button className="Banner_btn1"><p>Play</p></button>
                    <button className="Banner_btn2"><p> More Info</p></button>                    
                </div>
                <h1 className="Banner_desc">{
                    truncate(movie?.overview|| movie?.description,150)
                } </h1>
            </div>
            <div className="Banner_fadeBottom"></div>
       
            </header>
    );
};

export default Banner;