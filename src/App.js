import { useEffect, useState } from 'react'; 

import MovieCard from './MovieCard';

import './App.css';
import SearchIcon from './search.svg';


const API_URL = 'http://www.omdbapi.com?apikey=b6003d8a';

const movie1 = {
Poster : "https://m.media-amazon.com/images/M/MV5BZWQxMjcwNjItZjI0ZC00ZTc4LWIwMzItM2Q0YTZhNzI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg",
Title : "Italian Spiderman",
Type : "movie",
Year : "2007",
imdbID : "tt2705436"
}

const App = () => {
  const [movies, setMovies]= useState([]);

  const searchMovies = async (tittle) => {
    const response = await fetch (`${API_URL}&S=${tittle}`);
    const data = await response.json();

    console.log(data.Search);
  }
   useEffect(() => {
     searchMovies('spiderman');
   }, []);

  return (
    <div className="app">
      <h1>MELIX</h1>
      <div className="search">
        <input
           placeholder = "Search for movies"
           value="superman"
           onChange={() => {}}
           />
           <img
           src={SearchIcon}
           alt="search"
           onClick={() => {}}
           />
    </div>

    <div className="container">
      <div className="movie">
        <div>
          <p>{movie1.Year}</p>
        </div>
        <div>
          <img src={movie1.Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400' } alt={movie1.Tittle}/>
        </div>
        <div>
          <span>{movie1.Type}</span>
          <h3>{movie1.Title}</h3>
        </div>
      </div>
    </div>
    </div>
    )

}

export default App;