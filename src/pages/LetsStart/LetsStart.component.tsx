import React from 'react';

import { motion } from 'framer-motion';

import Label from '../../components/atoms/label/label.component';
import ImageContainer from '../../components/atoms/imageContainer/imageContainer.component';

import './LetsStart.style.scss';

import Telegram from '../../image/telegram.svg';
import GitHub from '../../image/github.svg';
import Google from '../../image/google-plus.svg';
import Notification from '../../image/notification.svg';

const LetsStart = () => {
  return (
    <div className='start'>
      <div className='start-header'>
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, ease: 'easeInOut', duration: 0.5 }}
          className='start-header-title'
        >
          <Label labelText='Let’s start' blueBackground labelType='header' />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, ease: 'easeInOut', duration: 0.5 }}
          className='start-header-description'
        >
          <Label
            labelText='You can contact me through my email and social networks!'
            center
            labelType='text'
          />
        </motion.div>
      </div>
      <div className='contact-section'>
        <div className='social-section'>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, ease: 'easeInOut', duration: 0.5 }}
            className='social-section-contacts'
          >
            <div
              className='social-section-contacts-element'
              style={{ marginLeft: 0 }}
            >
              <ImageContainer imageUrl={Telegram} alternate />
            </div>
            <div className='social-section-contacts-element'>
              <ImageContainer imageUrl={GitHub} alternate />
            </div>
            <div className='social-section-contacts-element'>
              <ImageContainer imageUrl={Google} alternate />
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, ease: 'easeInOut', duration: 0.5 }}
          className='start-notification'
        >
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{
              repeat: Infinity,
              repeatType: 'loop',
              repeatDelay: 0.5,
              delay: 0.5,
              ease: 'easeInOut',
              duration: 10,
            }}
            className='start-notification-image'
          >
            <img src={Notification} alt='notifications' />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default LetsStart;
