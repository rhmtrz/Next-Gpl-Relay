import React from 'react';
import { createFragmentContainer, graphql} from 'react-relay';
import TodoList from './todo-list';
import AddTodo from './add-todo';

const TodoContainer = (props) => {
  const { viewer } = props
  return (
    <div>
      <p>This is ID: {viewer.id}</p>
      <p>This is Total: {viewer.totalCount}</p>
      <AddTodo viewer={viewer} />
      <TodoList viewer={viewer} />
    </div>
  )
}


export default createFragmentContainer(TodoContainer, {
  viewer: graphql`
    fragment todoContainer_viewer on User {
      id
      totalCount
      ...todoList_viewer
    }
  `
})
