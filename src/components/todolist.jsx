import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, deleteTodo, startEdit }) => {
  return (
    <div class="formet">
      {todos.map(todo => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          deleteTodo={deleteTodo} 
          startEdit={startEdit} 
        />
      ))}
    </div>
  );
};

export default TodoList;
