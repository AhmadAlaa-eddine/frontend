import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ItemList from '../components/ItemList';
import { searchItems } from '../api';

const SearchResults = ({ location }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const searchQuery = new URLSearchParams(location.search).get('q');
    const fetchItems = async () => {
      const items = await searchItems(searchQuery);
      setItems(items);
    };
    fetchItems();
  }, [location.search]);

  return (
    <div>
      <Header />
      <h2>Search Results for "{new URLSearchParams(location.search).get('q')}"</h2>
      <ItemList items={items} />
      {/* Add other content for the search results page here */}
      <Footer />
    </div>
  );
}

export default SearchResults;
