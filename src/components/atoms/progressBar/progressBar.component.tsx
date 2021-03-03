import React from 'react';

import './progressBar.style.scss';

type ProgressBarProps = {
  progress: number;
};

const ProgressBar = ({ progress }: ProgressBarProps) => {
  return (
    <div className='progressbar-container'>
      <div
        className={`progress-done progress-${progress}`}
        style={{
          width: `${progress}%`,
        }}
      >
        <br />
      </div>
    </div>
  );
};

export default ProgressBar;
export type { ProgressBarProps };
