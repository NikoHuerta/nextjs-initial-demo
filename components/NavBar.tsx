import React from 'react'
import { ActiveLink } from './ActiveLink';
import style from './NavBar.module.css';


const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];


export const NavBar = () => {


  return (
    <nav className={ style['menu-container'] }>
      { 
        menuItems.map(({ text, href }) => ( 
          <ActiveLink key={ href } href={ href } text={ text } />
        ))
      }
    </nav>
  );
}
