import React from 'react';
import {ReactComponent as AddSvg} from '../../../assets/svg/add.svg';
import {ReactComponent as HeartSvg} from '../../../assets/svg/heart.svg';
import './style.scss';

const Article = ({ productImg, productName, productPrice}) => {
return (
        <article className="product-tile">
        <div className="product-image-container  position-relative">
          <a href="/"
            title={productName}
          >
            <img
              src={productImg}
              alt={productName}
            />
          </a>
          <div className="product-tile-controls position-absolute top-0 end-0 me-1 me-lg-2 mt-1">
            <a href="/"
              title=""
            >
              <HeartSvg className="me-2"/>
            </a>

            <a href="/"
              title=""
            >
              <AddSvg />
            </a>
          </div>

        </div>


        <div className="product-tile-details mt-2">
          <h2 className="text-center">
            <a href="/"
              title={productName}
            ><span>{productName}</span>
            </a>
          </h2>

          <div className="product-tile-pricing text-center">
            <span>{productPrice}</span>
          </div>

        </div>

      </article>
)
}

export default Article;
