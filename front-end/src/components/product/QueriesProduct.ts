import { graphql } from 'react-relay/hooks';

export const PRODUCTS_QUERY = graphql`
query QueriesProductQuery {
  products {
    title
  }
}`;
