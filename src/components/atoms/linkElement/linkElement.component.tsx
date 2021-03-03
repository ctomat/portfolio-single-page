import React from 'react';
import { Link } from 'react-router-dom';

import './linkElement.style.scss';

type LinkElmentProps = {
  route: string;
  isSelected?: boolean;
};

const LinkElement = ({ route, isSelected = false }: LinkElmentProps) => {
  return (
    <div className='link-container'>
      <Link
        className={`link-element ${isSelected ? 'blue-text-color' : ''}`}
        to={`/${route}`}
      >
        {route.replace(/[-]/g, ' ')}
      </Link>
    </div>
  );
};

export default LinkElement;
export type { LinkElmentProps };
