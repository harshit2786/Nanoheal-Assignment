import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/search';
import MovieCard from './components/moviebox';
import Navbar from './components/navbar';

function App() {
  const [movies, setMovies] = useState([]);
  

  const fetchMovies = (query) => {
    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/search/movie',
      params: { query, include_adult: 'false', language: 'en-US', page: '1' },
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YTEyMDlkMTMyZDJmYmIxMWU3MjQ5MDE1YmJiNzU2ZCIsInN1YiI6IjY2MjI0YmExY2NkZTA0MDEzMTA1MTNmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vArcnIRjekSHpuJKbTtEB44CmRGvHzu0u_XRUIwUbPs'
      }
    };

    axios.request(options)
      .then((response) => {
        setMovies(response.data.results.sort((a, b) => b.vote_average - a.vote_average));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
    <Navbar/>
    <div className="flex flex-col justify-center items-center container mt-32 mx-auto p-4">
      
      <h1 className=" text-white mx-8 text-4xl font-semibold my-4">Watch Unlimited movies</h1>
      <SearchBar onSearch={fetchMovies} />
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
    </>
  );
}

export default App;
