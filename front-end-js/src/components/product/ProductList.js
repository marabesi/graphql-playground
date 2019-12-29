import React from 'react';
import { useLazyLoadQuery, graphql } from 'react-relay/hooks';
import { PRODUCTS_QUERY } from './QueriesProduct';
import { QueriesProductQuery } from '../../__generated__/QueriesProductQuery.graphql';

const ProductList = props => {
  const data = useLazyLoadQuery(PRODUCTS_QUERY, {});

  return (
    <>
      <h1>Product list</h1>
    </>
  )
};

export default ProductList;