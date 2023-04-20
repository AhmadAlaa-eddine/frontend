import React from 'react';

const Item = ({ item }) => {
  return (
    <div className="item">
      <img src={item.image} alt={item.name} />
      <h4>{item.name}</h4>
      <p>{item.description}</p>
      <button>Add to Wishlist</button>
      <button>Buy Now</button>
    </div>
  );
};

export default Item;
