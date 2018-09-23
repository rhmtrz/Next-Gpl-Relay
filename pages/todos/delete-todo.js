import React from 'react';
import { commitMutation, graphql, createFragmentContainer } from 'react-relay';

import removeTodoMutation from '../mutation/removeTodoMutation';

class DeleteTodo extends React.Component {
  _handleRemoveTodo = () => {
    this._removeTodo();
  }

  _removeTodo() {
    removeTodoMutation.remove(
      this.props.relay.environment,
      this.props.todo,
      this.props.viewer,
    );
  }

  render() {
    return (
      <div>
        <button onClick={this._handleRemoveTodo}>Delete Button</button>
      </div>
    );
  }
}

export default createFragmentContainer(DeleteTodo, {})
