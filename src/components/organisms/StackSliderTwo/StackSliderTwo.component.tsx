import React, { useState } from 'react';

import StackCard from '../../molecules/stackCard/stackCard.component';

import stackData from '../../../data/stackData.json';

type StackSliderProps = {
  paginationItems: number;
};

const StackSliderTwo = ({ paginationItems }: StackSliderProps) => {
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
    <div>
      {data.map((stack, index) =>
        index >= firstValue && index <= lastValue ? (
          <div key={stack.labelText}>
            <StackCard
              imageUrl={stack.imageUrl}
              labelText={stack.labelText}
              labelType='header'
              progress={stack.progress}
            />
          </div>
        ) : null
      )}
      <button type='button' onClick={nextSlide}>
        Click
      </button>
      <button type='button' onClick={previusSlide}>
        Back
      </button>
    </div>
  );
};

export default StackSliderTwo;
