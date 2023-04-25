import React from 'react'
import Nav from './Nav';
import "../../Styles/header.css";
import Hero from './Hero';

const Header = () => {
  return (
    <div id='header'>
      <Nav />
      <Hero />
    </div>
  )
}

export default Header
