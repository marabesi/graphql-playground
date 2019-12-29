import { graphql } from 'react-relay/hooks';

export const PRODUCTS_QUERY = graphql`
query QueriesProductsQuery {
  products {
    title
    image_link
  }
}`;

export const PRODUCT_BY_ID = graphql`
query QueriesProductQuery($id: ID!) {
  product(id: $id) {
    id
    title
    image_link
    price
  }
}`;
