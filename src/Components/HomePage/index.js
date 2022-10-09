import React from 'react';
import CatalogPeview from './CatalogPeview';
import PromoSection from './PromoSection';
import promoImg from '../../assets/promo/promoImg.png';
import './style.scss';

const HomePage = () => {
  return (
    <main className="main">
<CatalogPeview cateoryName={'New Stuff'}/>
<CatalogPeview cateoryName={'Most Loved'}/>

<PromoSection imgProps={promoImg}/>
<CatalogPeview cateoryName={'Men`s'}/>
<CatalogPeview cateoryName={'Women`s'}/>
  </main>
  )
}

export default HomePage;
