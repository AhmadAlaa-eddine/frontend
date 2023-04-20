import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CategoryList from '../components/CategoryList';

const Category = () => {
  return (
    <div>
      <Header />
      <CategoryList />
      {/* Add other content for the category page here */}
      <Footer />
    </div>
  );
}

export default Category;
