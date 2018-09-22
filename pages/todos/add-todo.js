import React from 'react';

import { commitMutation, graphql, createFragmentContainer } from 'react-relay';
import addTodoMutation from '../mutation/addTodoMutation';

class AddTodo extends React.Component {
  state = {
    text: '',
  }

  _onButtonClicked = () => {
    console.log(this.porps);
    const { environment } = this.props.relay;
    addTodoMutation.commit(environment, this.state.text);
  }

  _handleTextInputChanged = e => {
    this.setState({ text: e.target.value})
  }

  render() {
    return(
      <div>
        <h1>ADD TODO</h1>
        <input
          onChange={this._handleTextInputChanged}/>
        <button
          onClick={this._onButtonClicked}>
          Add button
        </button>
      </div>
    )
  }
}


export default createFragmentContainer(AddTodo, {});
