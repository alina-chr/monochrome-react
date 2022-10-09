import React from 'react';
import HeaderContact from './HeaderContact';
import HeaderNav from './HeaderNav';
import MenuNav from './MenuNav';
import './style.scss';

const Header = () => {
  return (  <header className="header d-block">
  <div className="img-cover home-page">
    <div className="user-navigation d-flex justify-content-between">
     <HeaderContact/>
      <div className="header-controls">
      <MenuNav/>
      </div>
    </div>
  </div>
 <HeaderNav/>
</header>)
}

export default Header;
