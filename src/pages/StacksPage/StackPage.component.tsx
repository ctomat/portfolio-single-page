import React from 'react';

import { motion } from 'framer-motion';

import Label from '../../components/atoms/label/label.component';
import StackSlider from '../../components/organisms/StackSlider/StackSlider.component';

import DesktopComputer from '../../image/desk-illustration.svg';

import './StackPage.style.scss';

const StackPage = () => {
  return (
    <div className='stackpage'>
      <div className='stacks-presentation'>
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, ease: 'easeInOut', duration: 0.5 }}
          className='stacks-presentation-title'
        >
          <Label
            labelText='How you whant to do this?'
            blueBackground
            labelType='header'
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, ease: 'easeInOut', duration: 0.5 }}
          className='stacks-presentation-description'
        >
          <Label
            labelText='With a powerful group of technologies we will be able to take your vision to the next level.'
            labelType='text'
            center
          />
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, ease: 'easeInOut', duration: 0.5 }}
        className='slider-container'
      >
        <StackSlider paginationItems={3} />
      </motion.div>
      <div className='desktop-image'>
        <img src={DesktopComputer} alt='Desktop' />
      </div>
    </div>
  );
};

export default StackPage;
