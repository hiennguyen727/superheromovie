import React, { useState } from 'react';
import "../App.css"
import "../index.css"
const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  

  const getMovies = async (searchTerm) => {
    const response = await fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=f9eaded`);
    const data = await response.json();
    if (data && data.Search) {
      setMovies(data.Search);
    }
  };

  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      getMovies(searchTerm);
    }
  };

  const Searches = ['Thor', 'One Piece', 'Naruto', 'Spiderman', 'Ironman', 'Harry Potter','Loki'];

  return (
    <div>
        <button className='login' >LOGIN</button>
        <h1  className='header' >👿 HIEN MOVIES 😈</h1>
      <div className="search-container">
        <input
        className='inputsize'
          type="text"
          placeholder="SEARCH FOR A MOVIE!!!!!!!!!!!!!!!"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        /><div className='searchbutton1'>
        <button className="search-button" onClick={handleSearch}>
          LOOK
        </button></div>
      </div>
      <div className="searches">
        {Searches.map((term, index) => (
          <button key={index} onClick={() => getMovies(term)}>
            {term}
          </button>
        ))}
      </div>
      <div className="movie-container">
        {movies.map((movie, index) => (
          <div key={index} className="movie-item">
            <img src={movie.Poster} alt={movie.Title} />
            <div className="movie-details">
              <h2>{movie.Title}</h2>
              <p>Year: {movie.Year}</p>
              <p>IMDB ID: {movie.imdbID}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
