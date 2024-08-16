import React, { useState } from 'react';
import TodoList from './todolist';
import TodoForm from './todoform';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);

  const addTodo = (todo) => {
    setTodos([...todos, { id: Date.now(), text: todo }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const updateTodo = (id, newText) => {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, text: newText } : todo)));
    setEditTodo(null);
  };

  const startEdit = (todo) => {
    setEditTodo(todo);
  };

  const cancelEdit = () => {
    setEditTodo(null);
  };

  return (
    <div class="force">
      <h1>Todo App</h1>
      <TodoForm 
        addTodo={addTodo} 
        updateTodo={updateTodo} 
        editTodo={editTodo} 
        cancelEdit={cancelEdit} 
      />
      <TodoList 
        todos={todos} 
        deleteTodo={deleteTodo} 
        startEdit={startEdit} 
      />
    </div>
  );
};

export default TodoApp;



