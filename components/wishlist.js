import React, { useState } from 'react';
import Item from './Item';

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  const handleRemoveItem = (id) => {
    const newWishlist = wishlist.filter((item) => item.id !== id);
    setWishlist(newWishlist);
  };

  return (
    <div>
      <h2>Wishlist</h2>
      <div className="items">
        {wishlist.length === 0 ? (
          <p>Your wishlist is empty.</p>
        ) : (
          wishlist.map((item) => (
            <Item key={item.id} item={item}>
              <button onClick={() => handleRemoveItem(item.id)}>Remove from Wishlist</button>
            </Item>
          ))
        )}
      </div>
    </div>
  );
};

export default Wishlist;
