import React from 'react';

import { motion } from 'framer-motion';

import Label from '../../components/atoms/label/label.component';
import ImageContainer from '../../components/atoms/imageContainer/imageContainer.component';

import './AboutMe.style.scss';
import Photo from '../../image/photo-me.jpeg';
import Megadrive from '../../image/110-sega-megdrive.svg';
import MacBook from '../../image/118-macbook.svg';
import Pencil from '../../image/120-power-of-pen.svg';

const AboutMe = () => {
  return (
    <div className='about'>
      <div className='about-header'>
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, ease: 'easeInOut', duration: 0.5 }}
          className='about-header-title'
        >
          <Label labelText='About Me!' blueBackground labelType='header' />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, ease: 'easeInOut', duration: 0.5 }}
          className='about-header-text'
        >
          <Label
            labelText='My full name is Cristian Tomat, I am 22 years old. I love what I do and how I do it. My passions are computers, reading and games.'
            labelType='text'
            center
          />
        </motion.div>
      </div>
      <div className='about-section'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, ease: 'easeInOut', duration: 0.5 }}
          className='about-photo'
        >
          <div className='about-photo-box'>
            <div className='about-photo-box-inside'>
              <img src={Photo} alt={`It's me!`} />
            </div>
          </div>
        </motion.div>
        <div className='about-hobbys'>
          <div className='about-hobbys-images'>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5, ease: 'easeInOut', duration: 0.5 }}
              className='about-hobbys-images-element'
              style={{ marginLeft: 0 }}
            >
              <ImageContainer imageUrl={Megadrive} alternate />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3, ease: 'easeInOut', duration: 0.5 }}
              className='about-hobbys-images-element'
            >
              <ImageContainer imageUrl={MacBook} alternate />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.5, ease: 'easeInOut', duration: 0.5 }}
              className='about-hobbys-images-element'
            >
              <ImageContainer imageUrl={Pencil} alternate />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
