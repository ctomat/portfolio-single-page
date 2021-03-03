import React from 'react';

import Label from '../../components/atoms/label/label.component';
import StackSlider from '../../components/organisms/StackSlider/StackSlider.component';

import DesktopComputer from '../../image/desk-illustration.svg';

import './StackPage.style.scss';

const StackPage = () => {
  return (
    <div className='stackpage'>
      <div className='stacks-presentation'>
        <div className='stacks-presentation-title'>
          <Label
            labelText='How you whant to do this?'
            blueBackground
            labelType='header'
          />
        </div>
        <div className='stacks-presentation-description'>
          <Label
            labelText='With a powerful group of technologies we will be able to take your vision to the next level.'
            labelType='text'
            center
          />
        </div>
      </div>
      <div className='slider-container'>
        <StackSlider paginationItems={3} />
      </div>
      <div className='desktop-image'>
        <img src={DesktopComputer} alt='Desktop' />
      </div>
    </div>
  );
};

export default StackPage;
