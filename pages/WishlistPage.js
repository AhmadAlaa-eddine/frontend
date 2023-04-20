import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getItems } from '../API/api';
import Item from '../components/Item';

const WishlistPage = () => {
  const [wishlistItems, setWishlistItems] = useState([]);

  // Fetch wishlist items from API
  useEffect(() => {
    const fetchWishlistItems = async () => {
      const items = await getItems();
      setWishlistItems(items.filter((item) => item.isInWishlist));
    };
    fetchWishlistItems();
  }, []);

  return (
    <div className="wishlist-page">
      <h2>Wishlist</h2>
      {wishlistItems.length === 0 ? (
        <div className="empty-message">Your wishlist is empty.</div>
      ) : (
        <div className="items">
          {wishlistItems.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </div>
      )}
      <Link to="/" className="back-link">
        Back to Home
      </Link>
    </div>
  );
};

export default WishlistPage;
