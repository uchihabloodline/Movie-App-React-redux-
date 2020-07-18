import React from 'react';
import Navbar from './navbar';
import MovieCard from './MovieCard';

import { data } from '../data';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <div className="tabs">Movies</div>
        <div className="tabs">Favourites</div>
      </div>

      <div className="list">
        {data.map((movie,index)=>(                        //function writing doubt
          <MovieCard movie = {movie} key={`movies ${index}`} />
        ))}

      </div>
    </div>
  );
}

export default App;
