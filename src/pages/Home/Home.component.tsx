import React from 'react';

import { motion } from 'framer-motion';

import Button from '../../components/atoms/button/button.component';
import Label from '../../components/atoms/label/label.component';

import './Home.style.scss';
import robotImage from '../../image/robot-javascript.svg';
import LandigPage from '../../image/landing-page.png';

const Home = () => {
  return (
    <div className='home'>
      <div className='header'>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1, ease: 'easeInOut' }}
          className='home-header'
        >
          <h1 className='home-header-title'>
            <span className='hello-title-blue'>Hello!</span> I am <br />
            <span className='hello-title-line'>Cristian</span>
          </h1>
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{
              repeat: Infinity,
              repeatType: 'loop',
              repeatDelay: 0.5,
              duration: 10,
              ease: 'easeInOut',
            }}
            className='home-robot-image'
          >
            <img className='robot-image-element' src={robotImage} alt='robot' />
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5, duration: 0.5, ease: 'easeInOut' }}
          className='home-welcome-message'
        >
          <Label
            blueBackground
            labelType='text'
            labelText='Together we will make the landing that your company deserves.'
          />
        </motion.div>
        <div className='home-button'>
          <Button labelText="Let's start" />
        </div>
      </div>
      <div className='section-start'>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className='section-start-landing'
        >
          <img src={LandigPage} alt='landing-page' />
        </motion.div>
        <div className='section-start-button'>
          <Button labelText="Let's start" />
        </div>
      </div>
    </div>
  );
};

/*
<div className='home'>
  <div className='home-header'>
    <h1 className='home-header-title'>
      <span className='hello-title-blue'>Hello!</span> I am <br />
      <span className='hello-title-line'>Cristian</span>
    </h1>
    <div className='home-robot-image'>
      <img className='robot-image-element' src={robotImage} alt='robot' />
    </div>
    <div className='home-welcome-message'>
      <Label
        blueBackground
        labelType='text'
        labelText='Together we will make the landing that your company deserves.'
      />
    </div>
  </div>
  <div className='section-start'>
    <div className='section-start-landing'>
      <img src={LandigPage} alt='landing-page' />
    </div>
    <div className='section-start-button'>
      <Button labelText="Let's start" />
    </div>
  </div>
</div>;

*/

export default Home;
