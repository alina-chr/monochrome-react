import React from 'react';
import './style.scss';
import { isHandheld } from '../../../../utils';


const FooterNavigation = () => {
  console.log(isHandheld)
return (
  <div className="footer-nav d-flex flex-lg-column-row pt-2">
  {
      !isHandheld && <section className="footer-contact">
        <ul>
          <li>
            <a
              href="tel:+44 (0)10 2345 6789"
              title="  CALL US"
            />CALL US
          </li>
          <li>
            <a
              href="tel:+44 (0)10 2345 6789"
              title="  CALL US"
            >1-977-666-1840
            </a>
          </li>
          <li>
            <a
              href="mailto:customercare@monochrome.com"
              title="EMAIL CUSTOMER CARE"
            >email customer care</a>
          </li>
        </ul>
      </section>
  }


      <section className="footer-nav-style">
        <nav>
          <ul>
            <li>
              <a
                href="/"
                title="STYLE & FIT ADVICE"
              >STYLE & FIT ADVICE</a>
            </li>
            <li>
              <a
                href="/"
                title="FAQS"
              >FAQS</a>
            </li>
            <li>
              <a
                href="/"
                title="DELIVERY"
              >DELIVERY</a>
            </li>
            <li>
              <a
                href="/"
                title="EXCHANGES & RETURNS"
              >EXCHANGES & RETURNS</a>
            </li>
          </ul>
        </nav>
      </section>

      <section className="footer-nav-about-us">
        <nav>
          <ul>
            <li>
              <a
                href="/"
                title="ABOUT US"
              >ABOUT US</a>
            </li>
            <li>
              <a
                href="/"
                title="CAREERS"
              >CAREERS</a>
            </li>
            <li>
              <a
                href="/"
                title="AFFILIATES"
              >AFFILIATES</a>
            </li>
            <li>
              <a
                href="/"
                title="ADVERTISING"
              >ADVERTISING</a>
            </li>
          </ul>
        </nav>
      </section>
  </div>
)
}

export default FooterNavigation;
