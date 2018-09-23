import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import AddTodo from '../pages/todos/add-todo';
import DeleteTodo from '../pages/todos/delete-todo'
import TodoList from '../pages/todos/todo-list'


storiesOf('AddTodo', module)
  .add('Add todo button', () => (
    <button onClick={action('clicked')}>Hello Button</button>
  ))
