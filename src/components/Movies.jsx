import React, { useState } from 'react';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const response = await fetch(`http://www.omdbapi.com/?s=Thor&apikey=f9eaded`);
    const data = await response.json();
    if (data && data.Search) {
      setMovies(data.Search);
    }
  };

  return (
    <div>
      <button  className='moviebutton' onClick={getMovies}>Load Movies</button>
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
