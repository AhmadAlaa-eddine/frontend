import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/Home.css';
function Home() {
  return (
    <div className="home">
      <h2>Welcome to our store!</h2>
      <div className="categories">
        <Link to="/movies">
          <div className="category-movies">
            <h3>Movies</h3>
          </div>
        </Link>
        <Link to="/books">
          <div className="category-books">
            <h3>Books</h3>
          </div>
        </Link>
        <Link to="/games">
          <div className="category-games">
            <h3>Games</h3>
          </div>
        </Link>
        <Link to="/apps">
          <div className="category-apps">
            <h3>Apps</h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
