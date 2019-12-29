import React from 'react';

const Product = props => {
  return (
    <section className="product">
      <p>{props.title}</p>
      <img src={props.imageLink} alt={props.title} />
    </section>
  );
}

export default Product;