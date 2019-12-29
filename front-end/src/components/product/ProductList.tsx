import React from 'react';
import { graphql } from 'relay-runtime';
import { createFragmentContainer } from 'react-relay';

const productFragment = graphql`
query QueriesProductQuery {
  products {
    title
  }
}
`

const ProductList: React.FC = props => {
  return (
    <>
      <h1>Product list</h1>
    </>
  )
};

export default ProductList;