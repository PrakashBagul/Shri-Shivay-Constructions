import React from 'react';
import Header from './sections/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Portfolio from './sections/Portfolio';
import Working from './sections/Working';
import Testimonials from './sections/Testimonials';
import Contect from './sections/Contect';
import Footer from './sections/Footer';


const App = () => {
  return (
    <>
    <Header />
    <Hero />
    <About />
    <Services />
    <Working />
    <Portfolio />
    <Testimonials />
    <Contect/>
    <Footer />
    </>
  )
}

export default App