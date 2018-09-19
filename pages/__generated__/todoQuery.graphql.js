/**
 * @flow
 * @relayHash 8996859f3a948fdb6933e5d1ed0bc3f6
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
  ...todoList_viewer
}

fragment todoList_viewer on User {
  id
  totalCount
  completedCount
  todos {
    edges {
      node {
        id
        complete
        text
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "todoQuery",
  "id": null,
  "text": "query todoQuery {\n  viewer {\n    ...todoContainer_viewer\n    id\n  }\n}\n\nfragment todoContainer_viewer on User {\n  id\n  totalCount\n  ...todoList_viewer\n}\n\nfragment todoList_viewer on User {\n  id\n  totalCount\n  completedCount\n  todos {\n    edges {\n      node {\n        id\n        complete\n        text\n      }\n    }\n  }\n}\n",
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
          v0,
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "totalCount",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "completedCount",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "todos",
            "storageKey": null,
            "args": null,
            "concreteType": "TodoConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "TodoEdge",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Todo",
                    "plural": false,
                    "selections": [
                      v0,
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "complete",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "text",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '68ef54c2ea0f69a4aa3ea92ab278ae5b';
module.exports = node;
