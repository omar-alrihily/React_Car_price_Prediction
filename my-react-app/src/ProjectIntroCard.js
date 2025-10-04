import React from 'react';
import { motion } from 'framer-motion';
import Logo from './icons/car_Logo.png';

function ProjectIntroCard() {
  return (
    <div className="w-11/12 sm:w-5/6 md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto my-16 text-center px-4">
      
      <motion.div
        initial={{ scale: 0.3, opacity: 0, rotate: -15 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="flex flex-col items-center mb-8"
      >
        <img 
          src={Logo} 
          alt="منصة تقدير" 
          className="h-40 w-40 object-contain mb-4 drop-shadow-2xl" 
        />
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="font-bold text-3xl md:text-4xl text-green-700 tracking-tight"
        >
          منصة تقدير
        </motion.span>
      </motion.div>

      <motion.p 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.9 }}
        className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed md:leading-loose mt-10 "
      >
منصة ذكاء اصطناعي لتقدير أسعار السيارات في السوق السعودي      </motion.p>

      <motion.p 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.9 }}
        className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed md:leading-loose m-10 mt-6"
      >
        أدخل بيانات سيارتك في النموذج أدناه واحصل على تقدير سريع وسهل لسعرها.
      </motion.p>
    </div>

  );
}

export default ProjectIntroCard;

