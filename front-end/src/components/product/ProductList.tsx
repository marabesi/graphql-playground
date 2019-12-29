// @ts-nocheck
import React from 'react';
import { QueryRenderer } from 'react-relay';
import { environment } from '../../relay';
import { PRODUCTS_QUERY } from './QueriesProduct';
import Product from './Product';

const ProductListQuery: React.FC<{}> = () => {
  return (
    <QueryRenderer
      environment={environment}
      query={PRODUCTS_QUERY}
      render={RenderProductList}
    />
  )
};

export const RenderProductList = ({ error, props }) => {
  if (error) {
    return <div style={{ color: 'red' }}>{error.message}</div>;
  }

  if (props) {
    return props.products.map((item, index) =>
      <Product
        key={index}
        title={item.title}
        imageLink={item.image_link}
      />
    )
  }

  return <div>Loading</div>;
}

export default ProductListQuery;