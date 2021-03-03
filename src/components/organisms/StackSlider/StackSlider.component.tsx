import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import StackCard from '../../molecules/stackCard/stackCard.component';

import stackData from '../../../data/stackData.json';

import './StackSlider.style.scss';

type StackSliderProps = {
  paginationItems: number;
};

const StackSlider = ({ paginationItems }: StackSliderProps) => {
  const [firstValue, setFirstValue] = useState(0);
  const [lastValue, setLastValue] = useState(paginationItems - 1);
  const data = stackData.stacks;

  const nextSlide = () => {
    if (data[lastValue] === data[data.length - 1] || lastValue > data.length) {
      setFirstValue(0);
      setLastValue(paginationItems - 1);
    } else {
      setFirstValue(firstValue + paginationItems);
      setLastValue(lastValue + paginationItems);
    }
  };

  const previusSlide = () => {
    if (firstValue <= 0) {
      setLastValue(data.length - 1);
      setFirstValue(data.length - paginationItems);
    } else {
      setLastValue(lastValue - paginationItems);
      setFirstValue(firstValue - paginationItems);
    }
  };

  return (
    <div className='stack-slider'>
      <div className='direction-arrow-icon left-arrow-icon'>
        <FaArrowLeft onClick={previusSlide} style={{ padding: '10px' }} />
      </div>
      <div className='stack-slider-list'>
        {data.map((stack, index) =>
          index >= firstValue && index <= lastValue ? (
            <div
              key={stack.labelText}
              className='stack-slider-list-elements animate__animated animate__fadeIn'
            >
              <StackCard
                imageUrl={stack.imageUrl}
                labelText={stack.labelText}
                labelType='header'
                progress={stack.progress}
              />
            </div>
          ) : null
        )}
      </div>
      <div className='direction-arrow-icon right-arrow-icon'>
        <FaArrowRight onClick={nextSlide} style={{ padding: '10px' }} />
      </div>
    </div>
  );
};

export default StackSlider;
export type { StackSliderProps };
