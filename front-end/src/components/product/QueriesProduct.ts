// @ts-ignore
import { graphql } from 'babel-plugin-relay/macro';

export const PRODUCTS_QUERY = graphql`
query QueriesProductQuery {
  products {
    title
  }
}`;
