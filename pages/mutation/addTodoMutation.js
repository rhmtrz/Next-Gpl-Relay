import { commitMutation, graphql } from 'react-relay';


const mutation = graphql`
  mutation addTodoMutation($input: AddTodoInput!) {
    addTodo(input: $input) {
      clientMutationId
    }
  }
`;

// const updater = store => {
//
// }



const commit = (environment, text) => {
  console.log('_____ addTodomutation_____');
  console.log("this is environment", environment);
  console.log('this is text ', text);

  const config = {
    mutation,
    variables: {
      input: {
        text,
        clientMutationId: "Rahmat"
      }
    }
  }
  return commitMutation(environment, config)
}

export default { commit };
