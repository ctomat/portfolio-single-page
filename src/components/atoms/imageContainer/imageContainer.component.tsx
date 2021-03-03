import React from 'react';

import './imageContainer.style.scss';

type ImageContainerProps = {
  imageUrl: string;
  alternate?: boolean;
};

const ImageContainer = ({
  imageUrl,
  alternate = false,
}: ImageContainerProps) => {
  if (alternate) {
    return (
      <div
        className='image-container'
        style={{
          padding: 0,
          backgroundColor: 'transparent',
          borderRadius: '20px',
        }}
      >
        <div className='image-element-container'>
          <img
            className='image-element-size-alternate'
            src={imageUrl}
            alt='stack'
            style={{ borderRadius: '10px' }}
          />
        </div>
      </div>
    );
  }
  return (
    <div className='image-container'>
      <div className='image-element-container'>
        <img
          className='image-element-size-original'
          src={imageUrl}
          alt='stack'
        />
      </div>
    </div>
  );
};

export default ImageContainer;
export type { ImageContainerProps };
