import React from 'react';
import {ReactComponent as YoutubeSvg} from '../../../../assets/svg/youtube.svg';
import {ReactComponent as TwitterSvg} from '../../../../assets/svg/twitter.svg';
import {ReactComponent as FacebookSvg} from '../../../../assets/svg/facebook.svg';
import {ReactComponent as InstagramSvg} from '../../../../assets/svg/instagram.svg';
import './style.scss';

const FooterNewsletterAndSocial = () => {
return (

   <div className="footer-newsletter-and-social mt-lg-1 d-flex align-items-md-center align-items-lg-start flex-column">
    <section className="footer-sign-up-newsletter">
      <form
        action=""
        method="post"
        className="d-flex flex-column"
      >
        <label htmlFor="email-newsletter">sign up for our newsletter</label>
        <input
          type="email"
          name="email"
          id="email-newsletter"
          className="mt-2"
        />
        <button type="submit"  className="mt-2">SUMBIT</button>
      </form>
    </section>


    <section className="footer-social">
      <ul className="d-flex flex-row justify-content-around p-0">
        <li>
          <a
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
            title="youtube"
          ><YoutubeSvg/></a>
        </li>

        <li>
          <a
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
            title="Twitter"
          > <TwitterSvg/></a>
        </li>

        <li>
          <a
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
            title="Facebook"
          ><FacebookSvg/></a>
        </li>

        <li>
          <a
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
          > <InstagramSvg/></a>
        </li>
      </ul>
    </section>
  </div>

)
}

export default FooterNewsletterAndSocial
