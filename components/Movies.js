import React, { useState } from "react";
import "./CSS/Movies.css";

import { getMovies } from "../API/api";

function FilterControls({
  selectedCategory,
  setSelectedCategory,
  selectedGenre,
  setSelectedGenre,
}) {
  return (
    <div>
      <nav>
        <ul>
          {["Top Selling", "New Releases", "Recommended"].map((category) => (
            <li
              key={category}
              className={selectedCategory === category ? "active" : ""}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </nav>
      <nav>
        <ul>
          {["All", "Romantic", "Comedy", "Action"].map((genre) => (
            <li
              key={genre}
              className={selectedGenre === genre ? "active" : ""}
              onClick={() => setSelectedGenre(genre)}
            >
              {genre}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

function MovieItem({ item }) {
  return (
    <div key={item.id} onClick={() => console.log(item.name)}>
      <div>
        <img className="icons" src={require('../images/THE GODFATHER.jpg')} alt={item.title} />
        <p>{item.description}</p>
      </div>
    </div>
  );
}

function Movies() {
  const [items, setItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Top Selling");
  const [selectedGenre, setSelectedGenre] = useState("All");


  const getMoviesFN = async () => {
    const res = await getMovies();
    setItems(res);
    console.log(res);
  }
  React.useEffect(() => {
    getMoviesFN();
  }, []);


  
  return (
    <div>
      <FilterControls
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedGenre={selectedGenre}
        setSelectedGenre={setSelectedGenre}
      />
      <div>
        
        <div className="movies-container">
          {items.map((item) => (
            <MovieItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Movies;
