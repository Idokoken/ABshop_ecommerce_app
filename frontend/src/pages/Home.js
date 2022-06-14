import React from 'react'
import Navbar from '../components/Navbar'
import Anouncement from '../components/Anouncement'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Product from '../components/Product'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'


function Home() {
  return (
   <>
    <Anouncement />
    <Navbar />
    <Slider />
    <Categories />
    <Product />
    <NewsLetter />
    <Footer />
  </>    
  );
}

export default Home;