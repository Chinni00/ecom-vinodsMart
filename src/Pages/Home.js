import React from 'react';
import Navbar from '../Components/Navbar';
import Announcement from '../Components/Announcement';
import Slider from '../Components/Slider';
import Categories from '../Components/Categories';
import Products from '../Components/Products';
import NewsLetter from '../Components/NewsLetter';
import Cart from './Cart'
import Footer from '../Components/Footer';
import {Routes,Route,Link} from 'react-router-dom'
import { useSelector } from 'react-redux';

 const Home = () => {
  const state = useSelector(state=>state.cart)
  console.log(state.token)
  return (
    <div>
        <Announcement />
        <Navbar />
        <Slider />
        <Categories />
        <NewsLetter />
        <Footer />
       
        
    </div>
  )
}
export default Home;
