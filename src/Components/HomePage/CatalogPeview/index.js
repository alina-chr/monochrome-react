import React from 'react';
import Article from '../Article';
import img1 from '../../../assets/products/product01.png';
import img2 from '../../../assets/products/product02.png';
import img3 from '../../../assets/products/product03.png';
import img4 from '../../../assets/products/product04.png';
import './style.scss';


 const CatalogPeview = ({cateoryName}) => {
   return (
    <section className="catalog-preview">
    <div className="border"></div>

    <h1 className="text-center mt-3">{cateoryName}</h1>

    <div className="catalog-tiles d-lg-flex justify-content-between">
      <Article productImg={img1} productName ={'Product01'} productPrice={`$425`} />
      <Article productImg={img2} productName ={'Product02'} productPrice={`$425`} />
      <Article productImg={img3} productName ={'Product03'} productPrice={`$425`} />
      <Article productImg={img4} productName ={'Product04'} productPrice={`$425`} />
    </div>

  </section>
   )

 }

 export default CatalogPeview
