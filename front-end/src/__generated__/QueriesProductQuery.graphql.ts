/* tslint:disable */
/* @relayHash dcc72b803c23f39769b911bbb62dbe2d */

import { ConcreteRequest } from "relay-runtime";
export type QueriesProductQueryVariables = {
    id: string;
};
export type QueriesProductQueryResponse = {
    readonly product: {
        readonly id: string | null;
        readonly title: string | null;
        readonly image_link: string | null;
        readonly price: number | null;
    } | null;
};
export type QueriesProductQuery = {
    readonly response: QueriesProductQueryResponse;
    readonly variables: QueriesProductQueryVariables;
};



/*
query QueriesProductQuery(
  $id: ID!
) {
  product(id: $id) {
    id
    title
    image_link
    price
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "product",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "ProductType",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "title",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "image_link",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "price",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "QueriesProductQuery",
    "type": "Root",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "QueriesProductQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "QueriesProductQuery",
    "id": null,
    "text": "query QueriesProductQuery(\n  $id: ID!\n) {\n  product(id: $id) {\n    id\n    title\n    image_link\n    price\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'f44d7eb8424349082cd7cba598905f33';
export default node;
