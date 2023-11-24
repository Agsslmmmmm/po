import React from 'react';
import { motion } from 'framer-motion';

const Main = () => {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1.5, ease: 'anticipate' } },
  };

  const itemVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1.5, ease: 'anticipate' } },
  };

  return (
    <motion.div
      className="bg-transparent py-8 lg:py-24 mt-18 md:py-22 sm:py-20 p-2 overflow-hidden flex flex-col lg:flex-row justify-between items-center" variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{paddingTop: '12rem'}}
    >
      <div className="flex flex-col">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:justify-between">

            <motion.div
              className="lg:w-1/2"
              variants={itemVariants}
            >
              <h2 id="entry-text" className="text-2xl sm:text-2xl font-bold tracking-tight text-gray-600">
                HI👋, I'm
                <span className="text-blue-400"> MOHAMMAD AGUS SALIM</span>
              </h2>
              <p id="entry-paragraph1" className="mt-2 text-lg sm:text-xl leading-8 text-gray-600">Student & Front-end
                Web
                Developer
              </p>
              <p id="entry-paragraph2" className="mt-6 text-base sm:text-lg leading-7 text-gray-600">
                Welcome to my personal blog, a place where stories and knowledge meet! In our hero
                section,
                you will immediately feel the energetic vibrations of the interesting topics we discuss.
                With captivating titles and high-quality images or videos, we invite you to reflect and
                explore the unique world we present. Every design element is carefully chosen to provide
                a
                compelling experience, from calls to action that invite you to read more to short
                descriptions that encapsulate the beauty of our blog content. We believe that a clean,
                responsive layout is the key to providing information in the most understandable way.
                Come
                join us on an adventure of knowledge, and don't miss the opportunity to explore every
                corner
                of the stories we share. Happy reading!
              </p>
            </motion.div>
            <motion.div
              className="mx-auto max-w-2xl lg:max-w-xl lg:mx-0 lg:flex-2"
              variants={itemVariants}
            >
              <div className="md:flex-shrink-0 md:flex-grow">
                <motion.img
                  src="../images/profile.png"
                  alt="Your Image"
                  id="entry-image"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Main;
