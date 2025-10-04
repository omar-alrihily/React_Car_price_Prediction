import React from 'react';
import { motion } from 'framer-motion';
import Logo from './icons/car_Logo.png';

const NavBar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }} // Initial animation values
      animate={{ opacity: 1, y: 0 }} // Animation when component mounts
      exit={{ opacity: 0, y: -50 }} // Animation when component unmounts
      transition={{ duration: 2.5 }} // Increased duration for a slower animation
    >
      <main className="js">
        <section className="aw-header bg-green-600 border-b border-gray-200 shadow-md" >
          <header className="container mx-auto flex items-center justify-between flex-wrap px-2 py-4 lg:p-6 " >
            

            <div className="flex items-center flex-shrink-0 text-white hover:text-white mx-2 lg:mr-6 order-1 transition">
    <img 
      src={Logo} 
      alt="منصة تقدير" 
      className="h-20 w-20 mr-4 object-contain" 
    />
    <span className="font-bold text-2xl leading-none tracking-tight">
      منصة تقدير
    </span>
  </div>
          </header>
        </section>
      </main>
    </motion.div>
  );
};

export default NavBar;
