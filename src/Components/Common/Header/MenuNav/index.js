import React from 'react';
import {ReactComponent as AccountSvg} from '../../../../assets/svg/user.svg'
import {ReactComponent as HeartSvg} from '../../../../assets/svg/heart.svg'
import {ReactComponent as ShoppingSvg} from '../../../../assets/svg/shopping.svg'



import SearchForm from '../../Search';

const MenuNav = () => {
 return (
  <div className="menu-nav mt-4">
          <div className="user-control d-flex justify-content-between">
            <SearchForm/>
            <ul className="d-flex justify-content-between">
              <li>
                <a
                  href="signIn.html"
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
                  href="shoppingbag.html"
                  title="cart"
                >
                  <ShoppingSvg/>
                </a>
              </li>
            </ul>
          </div>
    </div>
 )
}

export default MenuNav;
