import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';

const Home = () => {
  return (
    <div>
      <Header />
      <Carousel />
      {/* Add other content for the home page here */}
      <Footer />
    </div>
  );
}

export default Home;
