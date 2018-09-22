import { commitMutation, graphql } from 'react-relay';
//import { ConnectionHandler } from 'relay-runtime';


const mutation = graphql`
  mutation removeTodoMutation($input: RemoveTodoInput!) {
    removeTodo(input: $input) {
      deletedTodoId
      viewer {
        completedCount
        totalCount
      }
    }
  }
`;

const remove = (environment, todo ) => {
  const config = {
    mutation,
    variables: {
      input: { id: todo.id },
    }
  }
  return commitMutation(environment, config)
}

export default { remove }
