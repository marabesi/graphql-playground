import React from 'react';

const Product: React.FC<{ title: string, imageLink: string }> = props => {
  return (
    <section className="product">
      <p>{props.title}</p>
      <img src={props.imageLink} alt={props.title} />
    </section>
  );
}

export default Product;