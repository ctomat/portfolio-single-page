import React from 'react';

import './label.style.scss';

type LabelProps = {
  labelText: string;
  labelType: 'header' | 'text';
  blueBackground?: boolean;
  center?: boolean;
};

const Label = ({
  labelText,
  labelType,
  blueBackground = false,
  center = false,
}: LabelProps) => {
  if (labelType === 'text') {
    return (
      <div
        className={`label-container ${
          blueBackground ? 'label-blue-background' : ''
        } ${center ? 'text-center' : ''} text-font`}
      >
        <p className='label-element'>{labelText}</p>
      </div>
    );
  }
  if (labelType === 'header') {
    return (
      <div
        className={`label-container ${
          blueBackground ? 'label-blue-background' : ''
        }`}
      >
        <h2 className='label-element'>{labelText}</h2>
      </div>
    );
  }
  return <p>Please, specify the label type</p>;
};

export default Label;
export type { LabelProps };
