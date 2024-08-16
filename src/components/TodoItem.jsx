import React from 'react';
import '../App.css';
const TodoItem = ({ todo, deleteTodo, startEdit }) => {
  return (
    <div className="orderofname">
    <div className='container3'>
    <p> {todo.text}</p>
   <div className="frist">
      <button onClick={() => startEdit(todo)}>Edit</button>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      </div>
      
    </div>
    </div>
  );
};

export default TodoItem;
