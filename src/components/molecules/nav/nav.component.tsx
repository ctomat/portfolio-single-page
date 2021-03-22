import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

import Button from '../../atoms/button/button.component';
import LinkElement from '../../atoms/linkElement/linkElement.component';

import Logo from '../../../image/cover.png';

import './nav.style.scss';

const Nav = () => {
  const location = useLocation();
  return (
    <motion.div
      className='nav-container'
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5, ease: 'easeInOut' }}
    >
      <div className='logo-container'>
        <Link to='/'>
          <img src={Logo} alt='Logo' width='300px' />
        </Link>
      </div>
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
              <Button
                labelText={`Let's start`}
                secundary={location.pathname === '/start'}
              />
            </Link>
          </li>
        </ul>
      </nav>
    </motion.div>
  );
};

export default Nav;
