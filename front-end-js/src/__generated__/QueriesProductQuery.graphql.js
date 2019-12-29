/**
 * @flow
 * @relayHash 7de5bc21187fa1b103acc30ccf3a98f6
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type QueriesProductQueryVariables = {||};
export type QueriesProductQueryResponse = {|
  +products: ?$ReadOnlyArray<?{|
    +title: ?string
  |}>
|};
export type QueriesProductQuery = {|
  variables: QueriesProductQueryVariables,
  response: QueriesProductQueryResponse,
|};
*/


/*
query QueriesProductQuery {
  products {
    title
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "title",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "QueriesProductQuery",
    "type": "Root",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "products",
        "storageKey": null,
        "args": null,
        "concreteType": "ProductType",
        "plural": true,
        "selections": [
          (v0/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "QueriesProductQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "products",
        "storageKey": null,
        "args": null,
        "concreteType": "ProductType",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "QueriesProductQuery",
    "id": null,
    "text": "query QueriesProductQuery {\n  products {\n    title\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'caa694ca39db2d2b0eb9ad4b088d3dd3';
module.exports = node;
