import React from 'react';
import {ReactComponent as MenuSvg} from '../../../../assets/svg/menu.svg';
import SearchForm from '../../Search';
import './style.scss';


const HeaderMenu = () => {
  return(
    <div className="menu-nav">
            <div className="nav-container d-flex justify-content-between mt-2 pt-2 pb-2">
              <a href="/"
                title="menu"
                className="menu-bars"
              ><MenuSvg className="menu"/></a>
            <SearchForm/>
            </div>
     </div>
  )
}

export default HeaderMenu;
