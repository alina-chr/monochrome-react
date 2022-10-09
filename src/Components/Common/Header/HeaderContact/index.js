import React from 'react';
import {ReactComponent as YoutubeSvg} from '../../../../assets/svg/youtube.svg';
import {ReactComponent as TwitterSvg} from '../../../../assets/svg/twitter.svg';
import {ReactComponent as FacebookSvg} from '../../../../assets/svg/facebook.svg';
import {ReactComponent as InstagramSvg} from '../../../../assets/svg/instagram.svg';
import './style.scss';



const HeaderContact = () => {
 return (
  <div className="header-contact d-lg-inline-flex mt-lg-3 d-md-block" >
  <ul className="d-inline-flex m-0">
    <li className="me-3">
      <a
        href="http://www.youtube.com"
        title="Youtube"
        target="_blank"
        rel="noopener noreferrer"
      >
        <YoutubeSvg/>
        </a>
    </li>

    <li className="me-3">
      <a
        href="http://www.twitter.com"
        title="Twitter"
        target="_blank"
        rel="noopener noreferrer"
      ><TwitterSvg/></a>
    </li>

    <li className="me-3">
      <a
        href="http://www.facebook.com"
        title="Facebook"
        target="_blank"
        rel="noopener noreferrer"
      ><FacebookSvg/></a>
    </li>

    <li className="me-3">
      <a
        href="http://www.instagram.com"
        title="Instagram"
        target="_blank"
        rel="noopener noreferrer"
      ><InstagramSvg/></a>
    </li>
  </ul>

  <p>
    <a
      href="tel:+44(0)1023456789"
      title="Call us"
    >CALL US +44 (0)10 2345 6789</a>
  </p>
</div>

 )
}

export default HeaderContact;
