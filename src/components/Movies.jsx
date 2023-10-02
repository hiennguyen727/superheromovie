import React, { useState } from 'react'; //imports react and the hook used for movie
import "../App.css" // import app css
import "../index.css" // import index css but i matched them anyways
const Movies = () => { //core function
  const [movies, setMovies] = useState([]); //setting movies and allowing setmovies to update the data using usestate
  const [searchTerm, setSearchTerm] = useState(''); //same thing but with search term
  const getMovies = async (searchTerm) => { //function for fetching movies with the argument searchTerm
    const response = await fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=f9eaded`); //gives variable to the fetch call. inside fetch, we call searchterm as the query to make it dynamic
    const data = await response.json(); //converts the response to json and asigns it to data
    if (data && data.Search) { //if it matches it'll run this if statement
      setMovies(data.Search); //makes movies = data.search
    }}; 
  const handleSearch = () => { //new function for handlesearch
    if (searchTerm.trim() !== '') { //makes sure its not empty before it runs the line
      getMovies(searchTerm); //callsthe getmovies function with the searchterm when handlesearch is called
    }
  };
  const Searches = ['Thor', 'One Piece', 'Naruto', 'Spiderman', 'Ironman', 'Harry Potter','Loki']; //made searches for users
  return (
    <div>
        
        <h1  className='header' > HIEN.TV </h1>     
      <div className="search-container">                
        <input
        className='inputsize'             
          type="text"                 //made the search bar take in text
          placeholder="Search for your favorite movie :)"   //says this underneath the text
          value={searchTerm}        //passes in searchTerm through the searchbar to make it work with the button
          onChange={(e) => setSearchTerm(e.target.value)} //onChange is listening for e which is event and changes setSearchTerm to the value of the target.
        /><div className='searchbutton1'>
        <button className="search-button" onClick={handleSearch}> 
          LOOK
        </button></div>
      </div>
      <div className="searches">
        {Searches.map((term, index) => (    //maps Searches and gives each value = term and an index
          <button key={index} onClick={() => getMovies(term)}>    
            {term}
          </button>
        ))}
      </div><div className="movie-container">
        {movies.map((movie, index) => ( //maps movies and names it movie and gives index
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
