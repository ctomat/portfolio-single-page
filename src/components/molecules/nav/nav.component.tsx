import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../../atoms/button/button.component';
import LinkElement from '../../atoms/linkElement/linkElement.component';

import './nav.style.scss';

const Nav = () => {
  return (
    <div className='nav-container'>
      <nav className='nav-element'>
        <ul className='nav-list-element'>
          <li className='nav-list-item-element'>
            <LinkElement route='stacks' />
          </li>
          <li className='nav-list-item-element'>
            <LinkElement route='about-me' />
          </li>
          <li className='nav-list-item-element'>
            <Link to='/start'>
              <Button labelText={`Let's start`} />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
