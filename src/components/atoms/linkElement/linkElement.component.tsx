import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import './linkElement.style.scss';

type LinkElmentProps = {
  route: string;
};

const LinkElement = ({ route }: LinkElmentProps) => {
  const location = useLocation();
  return (
    <div className='link-container'>
      <Link
        className={`link-element ${
          location.pathname === `/${route}` ? 'blue-text-color' : ''
        }`}
        to={`/${route}`}
      >
        {route.replace(/[-]/g, ' ')}
      </Link>
    </div>
  );
};

export default LinkElement;
export type { LinkElmentProps };
