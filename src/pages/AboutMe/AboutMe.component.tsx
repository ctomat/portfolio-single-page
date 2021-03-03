import React from 'react';

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
        <div className='about-header-title'>
          <Label labelText='About Me!' blueBackground labelType='header' />
        </div>
        <div className='about-header-text'>
          <Label
            labelText='My full name is Cristian Tomat, I am 22 years old. I love what I do and how I do it. My passions are computers, reading and games.'
            labelType='text'
            center
          />
        </div>
      </div>
      <div className='about-section'>
        <div className='about-photo'>
          <div className='about-photo-box'>
            <div className='about-photo-box-inside'>
              <img src={Photo} alt={`It's me!`} />
            </div>
          </div>
        </div>
        <div className='about-hobbys'>
          <div className='about-hobbys-images'>
            <div
              className='about-hobbys-images-element'
              style={{ marginLeft: 0 }}
            >
              <ImageContainer imageUrl={Megadrive} alternate />
            </div>
            <div className='about-hobbys-images-element'>
              <ImageContainer imageUrl={MacBook} alternate />
            </div>
            <div className='about-hobbys-images-element'>
              <ImageContainer imageUrl={Pencil} alternate />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
