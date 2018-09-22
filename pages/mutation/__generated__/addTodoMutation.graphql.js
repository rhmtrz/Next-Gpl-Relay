/**
 * @flow
 * @relayHash e34e56c1cede0136146d3b88baf2b45a
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AddTodoInput = {
  text: string,
  clientMutationId?: ?string,
};
export type addTodoMutationVariables = {|
  input: AddTodoInput
|};
export type addTodoMutationResponse = {|
  +addTodo: ?{|
    +clientMutationId: ?string
  |}
|};
export type addTodoMutation = {|
  variables: addTodoMutationVariables,
  response: addTodoMutationResponse,
|};
*/


/*
mutation addTodoMutation(
  $input: AddTodoInput!
) {
  addTodo(input: $input) {
    clientMutationId
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "AddTodoInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "addTodo",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "AddTodoInput!"
      }
    ],
    "concreteType": "AddTodoPayload",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "clientMutationId",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "addTodoMutation",
  "id": null,
  "text": "mutation addTodoMutation(\n  $input: AddTodoInput!\n) {\n  addTodo(input: $input) {\n    clientMutationId\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "addTodoMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "addTodoMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '2e4f475dfd435032eaf2dd026453049c';
module.exports = node;
