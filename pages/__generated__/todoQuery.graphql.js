/**
 * @flow
 * @relayHash b608427168b49315728246decc65e91a
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type todoContainer_viewer$ref = any;
export type todoQueryVariables = {||};
export type todoQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: todoContainer_viewer$ref
  |}
|};
export type todoQuery = {|
  variables: todoQueryVariables,
  response: todoQueryResponse,
|};
*/


/*
query todoQuery {
  viewer {
    ...todoContainer_viewer
    id
  }
}

fragment todoContainer_viewer on User {
  id
  totalCount
}
*/

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "operationKind": "query",
  "name": "todoQuery",
  "id": null,
  "text": "query todoQuery {\n  viewer {\n    ...todoContainer_viewer\n    id\n  }\n}\n\nfragment todoContainer_viewer on User {\n  id\n  totalCount\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "todoQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "todoContainer_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "todoQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
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
            "name": "totalCount",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
};
// prettier-ignore
(node/*: any*/).hash = '68ef54c2ea0f69a4aa3ea92ab278ae5b';
module.exports = node;
