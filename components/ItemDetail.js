
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ItemDetail = ({ item }) => {
  const { name, description, price, image, category } = item;

  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Price: ${price.toFixed(2)}</p>
      <p>Category: {category}</p>
      <img src={image} alt={name} />
      <Link to={`/category/${category}`}>
        <button>Back to {category}</button>
      </Link>
    </div>
  );
};

ItemDetail.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default ItemDetail;
