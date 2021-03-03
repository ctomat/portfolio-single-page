import React from 'react';

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
        <div className='start-header-title'>
          <Label labelText='Let’s start' blueBackground labelType='header' />
        </div>
        <div className='start-header-description'>
          <Label
            labelText='You can contact me through my email and social networks!'
            center
            labelType='text'
          />
        </div>
      </div>
      <div className='contact-section'>
        <div className='social-section'>
          <div className='social-section-contacts'>
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
          </div>
        </div>
        <div className='start-notification'>
          <div className='start-notification-image'>
            <img src={Notification} alt='notifications' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetsStart;
