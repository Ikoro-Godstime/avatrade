import React from 'react'
import Hero from '../Hero/Hero'

// import the navbar 
import Navbar from '../Navbar/Navbar'
import MobileNav from "../Navbar/MobileNav";

const Header = () => {
    return (
      <React.Fragment>
        <Navbar />
        <MobileNav />
        <Hero />
      </React.Fragment>
    );
}

export default Header
