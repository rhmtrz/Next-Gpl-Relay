import React from 'react';
import { createFragmentContainer, graphql} from 'react-relay';

const TodoContainer = (props) => {
  const { viewer } = props
  return (
    <div>
      <p>This is ID: {viewer.id}</p>
      <p>This is Total: {viewer.totalCount}</p>
    </div>
  )
}


export default createFragmentContainer(TodoContainer, {
  viewer: graphql`
    fragment todoContainer_viewer on User {
      id
      totalCount
    }
  `
})
