import React from 'react'
import { ActiveLink } from './ActiveLink';
import style from './NavBar.module.css';

export const NavBar = () => {
  return (
    <nav className={ style['menu-container'] }>
        <ActiveLink text="Home" href='/' />
        <ActiveLink text="About" href='/about' />
        <ActiveLink text="Contact" href='/contact' />
    </nav>
  );
}
