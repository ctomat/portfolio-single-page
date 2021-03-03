import React from 'react';

import './Wave.style.scss';

import WaveSvg from '../../../image/wave(3).svg';

const Wave = () => {
  return (
    <div className='wave'>
      <div className='wave-svg'>
        <img src={WaveSvg} alt='wave' />
      </div>
    </div>
  );
};

export default Wave;
