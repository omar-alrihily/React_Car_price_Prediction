import React from 'react';
import { motion } from 'framer-motion';
import EmailIcon from './icons/email-icon.png';
import LinkedInIcon from './icons/linkedin-icon.png';
import GitHubIcon from './icons/github-icon.png';

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} // Initial animation values
      animate={{ opacity: 1, y: 0 }} // Animation when component mounts
      transition={{ duration: 2.5 }} // Duration for the animation
      className="bg-green-400 text-white py-6"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <p className="mb-4 md:mb-0">&copy; 2023 Saudi Cars</p>
        <ul className="flex flex-wrap justify-center md:justify-end items-center">
          <li className="mr-4">
            <a href="mailto:omar.8260@gmail.com" className="text-white flex items-center">
              <motion.img
                initial={{ opacity: 0, scale: 0.5 }} // Initial animation values for the image
                animate={{ opacity: 1, scale: 1 }} // Animation when component mounts
                transition={{ duration: 0.5 }} // Duration for the animation
                src={EmailIcon}
                alt="Email"
                className="h-6 w-6 mr-2"
              />
              Email
            </a>
          </li>
          
          <li>
            <a href="https://github.com/omar-alrihily" target="_blank" rel="noopener noreferrer" className="text-white flex items-center">
              <motion.img
                initial={{ opacity: 0, scale: 0.5 }} // Initial animation values for the image
                animate={{ opacity: 1, scale: 1 }} // Animation when component mounts
                transition={{ duration: 0.5 }} // Duration for the animation
                src={GitHubIcon}
                alt="GitHub"
                className="h-6 w-6 mr-2"
              />
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Footer;
