import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Aboutus from '../components/Home/AboutSection';
import Heromenu from '../components/Menu/Heromenu'
import Steake from '../components/Menu/Steake'
import Grill from '../components/Menu/Grill'
import Dessert from '../components/Menu/Dessert'
import Drinks from '../components/Menu/Drinks'
import Salads from '../components/Menu/Salads'

const HomePage = () => {
  return (
    <div>
      <Header />
      <Heromenu/>
      <Steake/>
      <Grill/>
      <Dessert/>
      <Drinks/>
      <Salads/>

      <Aboutus/>
      <Footer />
    </div>
  );
}

export default HomePage;
