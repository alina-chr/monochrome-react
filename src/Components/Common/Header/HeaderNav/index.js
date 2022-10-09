import React from 'react';
import './style.scss';

const HeaderNav = () => {
 return (
  <nav className="nav d-flex justify-content-center">
  <ul className="cont d-flex justify-content-between p-0">
    <li>
      <a
        href="/"
        title="New Arrivals"
      >New Arrivals</a>
    </li>

    <li>
      <a
        href="/"
        title="Brands"
      >Brands</a>
    </li>

    <li>
      <a
        href="menspage.html"
        title="Men`s"
      >Men`s</a>
    </li>

    <li>
      <a
        href="/"
        title="Women`s"
      >Women`s</a>
    </li>

    <li>
      <a
        href="/"
        title="Accessories"
      >Accessories</a>
    </li>

    <li>
      <a
        href="lookBook.html"
        title="Lookbook"
      >Lookbook</a>
    </li>
  </ul>

</nav>
 )
}

export default HeaderNav;
