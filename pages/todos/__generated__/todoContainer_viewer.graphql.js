/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type todoList_viewer$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type todoContainer_viewer$ref: FragmentReference;
export type todoContainer_viewer = {|
  +id: string,
  +totalCount: ?number,
  +$fragmentRefs: todoList_viewer$ref,
  +$refType: todoContainer_viewer$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "todoContainer_viewer",
  "type": "User",
  "metadata": null,
  "argumentDefinitions": [],
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
    },
    {
      "kind": "FragmentSpread",
      "name": "todoList_viewer",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'adad76451ae2548fdb8a9d491cc67ae7';
module.exports = node;
