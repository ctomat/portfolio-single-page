import React from 'react';

import ImageContainer from '../../atoms/imageContainer/imageContainer.component';
import Label from '../../atoms/label/label.component';
import ProgressBar from '../../atoms/progressBar/progressBar.component';

import './stackCard.style.scss';

type StackCardProps = {
  imageUrl: string;
  labelText: string;
  labelType: 'header';
  progress: number;
};

const StackCard = ({
  imageUrl,
  labelText,
  labelType = 'header',
  progress,
}: StackCardProps) => {
  return (
    <div className='stackcard-container'>
      <div className='stack-image-container'>
        <ImageContainer imageUrl={imageUrl} />
      </div>
      <div className='stack-data-container'>
        <div className='label-data-container'>
          <Label labelText={labelText} labelType={labelType} blueBackground />
        </div>
        <div className='progress-data-container'>
          <ProgressBar progress={progress} />
        </div>
      </div>
    </div>
  );
};

export default StackCard;
export type { StackCardProps };
