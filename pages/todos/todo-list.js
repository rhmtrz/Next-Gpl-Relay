import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import DeleteTodo from './delete-todo';

const TodoList = (props) => {
  const { viewer } = props;
  const { todos } = viewer
  return (
    <div>
      {todos.edges.map(d =>
        <div key={d.node.id}>
          <ul>
            <li>this is Node ID: {d.node.text}</li>
            <li>this is Node Text: {d.node.complete}</li>
          </ul>
          <DeleteTodo todo={d.node} viewer={viewer}/>
        </div>
      )}
    </div>
  )
}

export default createFragmentContainer(TodoList, {
  viewer: graphql`
    fragment todoList_viewer on User {
      id
      totalCount
      completedCount
      todos{
        edges {
          node {
            id
            complete
            text
          }
        }
      }
    }
  `
})
