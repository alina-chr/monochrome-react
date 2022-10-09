import React from 'react';
import {ReactComponent as AccountSvg} from '../../../../assets/svg/user.svg';
import {ReactComponent as HeartSvg} from '../../../../assets/svg/heart.svg';
import {ReactComponent as ShoppingSvg} from '../../../../assets/svg/shopping.svg';
import './style.scss';


const UserControls = () => {

  return (
    <div className="user-control d-flex justify-content-around mt-2">
    <div>
      <a
        href="/"
        title="homepage"
        className="logo"
      >MONOCHROME</a>
    </div>

    <ul className="d-flex justify-content-end">
      <li>
        <a
          href="/"
          title="Account"
        >
          <AccountSvg/>
        </a>
      </li>

      <li>
        <a
          href="/"
          title="wishlist"
        >
          <HeartSvg/>
        </a>
      </li>

      <li>
        <a
          href="/"
          title="cart"
        >
          <ShoppingSvg/>
        </a>
      </li>
    </ul>
  </div>
  )
}

export default UserControls;
