import React from 'react';
import FaqSection from './components/FaqSection/FaqSection';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

const DemoComponent = () => {
  return (
    <div className='overflow-hidden'>
      <Navbar/>
      <FaqSection/>
      <Footer/>
    </div>
  );
}

export default DemoComponent;
