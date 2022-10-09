import React from 'react';
import FooterNavigation from './FooterNavigation';
import FooterNewsletterAndSocial from './FooterNewsletterAndSocial';
import './style.scss';

const Footer = () => {
  return (
<footer className="footer mt-4">
<section className="footer-container pt-lg-2">
<FooterNavigation/>
<FooterNewsletterAndSocial/>
</section>

</footer>
  )
}

export default Footer;
