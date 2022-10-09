import React from 'react';
import './style.scss';


const PromoSection = ({imgProps}) => {

  return (
    <section className="home-promo cont d-lg-flex justify-content-between">
    <img
      className="img-promo"
      alt="promo"
      src={imgProps}
    />

    <div className="para-home">
      <h2 className="mt-4 mb-1"> <span>Watches for entrepreneurs</span> </h2>

      <p>
        But I must explain to you how all this mistaken idea of
        denouncing pleasure and praising pain was born and I will
        give you a complete account of the system, and expound the
        actual teachings of the great explorer of the truth, the
        master-builder of human happiness. No one rejects, dislikes,
        or avoids pleasure itself, because.
      </p>

      <p>
        But I must explain to you how all this mistaken idea of denouncing
        pleasure and praising pain was born and I will give you a complete
        account of the system, and expound the actual teachings of the great
        explorer of the truth, the master-builder of human happiness. No one
        rejects, dislikes, or avoids pleasure itself, because.
      </p>
    </div>
  </section>
  )
}

export default PromoSection;
