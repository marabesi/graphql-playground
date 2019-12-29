/* tslint:disable */
/* @relayHash 9a320f661a2cc2d522372cb4f695ba7e */

import { ConcreteRequest } from "relay-runtime";
export type QueriesProductsQueryVariables = {};
export type QueriesProductsQueryResponse = {
    readonly products: ReadonlyArray<{
        readonly title: string | null;
        readonly image_link: string | null;
    } | null> | null;
};
export type QueriesProductsQuery = {
    readonly response: QueriesProductsQueryResponse;
    readonly variables: QueriesProductsQueryVariables;
};



/*
query QueriesProductsQuery {
  products {
    title
    image_link
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "title",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "image_link",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "QueriesProductsQuery",
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
          (v0/*: any*/),
          (v1/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "QueriesProductsQuery",
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
          (v1/*: any*/),
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
    "name": "QueriesProductsQuery",
    "id": null,
    "text": "query QueriesProductsQuery {\n  products {\n    title\n    image_link\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'b9db543fd85779c66e692496066fc9ca';
export default node;
