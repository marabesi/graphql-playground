import {
  Environment,
  Network,
  RecordSource,
  Store,
} from 'relay-runtime';

const GRAPHQL_HOST = process.env.GRAPHQL_HOST || '';

function fetchQuery(
  operation: any,
  variables: any,
) {
  return fetch(GRAPHQL_HOST, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => {
    return response.json();
  });
}

export const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
});
