// @ts-nocheck
import React from 'react';
import { QueryRenderer } from 'react-relay';
import { environment } from '../../relay';
import { PRODUCTS_QUERY } from './QueriesProduct';

const ProductListQuery: React.FC<{}> = () => {
  return (
    <QueryRenderer
      environment={environment}
      query={PRODUCTS_QUERY}
      variables={{}}
      render={renderProductList}
    />
  )
};

export const renderProductList = ({ error, props }) => {
  if (error) {
    return <div style={{ color: 'red' }}>{error.message}</div>;
  }

  if (props) {
    return <div>{props.title} is great!</div>;
  }

  return <div>Loading</div>;
}

export default ProductListQuery;