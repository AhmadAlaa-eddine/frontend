// ItemDetailPage.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../components/ItemDetail';
import itemService from '../services/itemService';

const ItemDetailPage = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      const data = await itemService.getItem(id);
      setItem(data);
    };
    fetchItem();
  }, [id]);

  return (
    <div>
      {item ? (
        <ItemDetail item={item} />
      ) : (
        <p>Loading item...</p>
      )}
    </div>
  );
};

export default ItemDetailPage;
