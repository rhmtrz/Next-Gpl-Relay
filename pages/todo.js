import React from 'react';
import { QueryRenderer, graphql } from 'react-relay';
import environment from './environment';
import TodoContainer from './todos/todo-container'

const todoQuery = graphql`
  query todoQuery {
    viewer {
      ...todoContainer_viewer
    }
  }
`

const TodoPage = () => {
  return (
    <QueryRenderer
      environment={environment}
      query={todoQuery}

      varibales={{}}
      render={({error, props}) => {
        console.warn(props)
        if (props) {
          return <TodoContainer viewer={props.viewer}/>
        } else {
          return <div>Loading</div>;
        }
      }}
    />
  )
}
export default TodoPage
