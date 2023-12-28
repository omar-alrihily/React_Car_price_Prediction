import React from 'react';
import { motion } from 'framer-motion';

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
            <div id="mobile-menu__toggler" className="block lg:hidden"></div>

            <div className="aw-header__logo flex items-center flex-shrink-0 text-white hover:text-white mx-2 lg:mr-6 order-1 transition">
              <svg
                className="fill-current h-8 w-8 mr-2"
                viewBox="0 0 54 54"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"
                />
              </svg>
              <span className="font-semibold text-lg tracking-tight mr-4" style={{ fontWeight: 700, fontSize: '24px'}}>السيارات السعودية </span>
            </div>
          </header>
        </section>
      </main>
    </motion.div>
  );
};

export default NavBar;
