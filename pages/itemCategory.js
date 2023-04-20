import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ItemList from '../components/ItemList';
import { getItemsByCategory } from '../api';

const ItemCategory = ({ match }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const category = match.params.category;
      const items = await getItemsByCategory(category);
      setItems(items);
    };
    fetchItems();
  }, [match.params.category]);

  return (
    <div>
      <Header />
      <h2>{match.params.category}</h2>
      <ItemList items={items} />
      {/* Add other content for the item category page here */}
      <Footer />
    </div>
  );
}

export default ItemCategory;
