import React, { useState, useEffect } from 'react';

const TodoForm = ({ addTodo, updateTodo, editTodo, cancelEdit }) => {
  const [text, setText] = useState('');

  useEffect(() => {
    if (editTodo) {
      setText(editTodo.text);
    } else {
      setText('');
    }
  }, [editTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editTodo) {
      updateTodo(editTodo.id, text);
    } else {
      addTodo(text);
    }
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Enter a new todo" 
      />
      <button type="submit">
        {editTodo ? 'Update Todo' : 'Add Todo'}
      </button>
      {editTodo && <button type="button" onClick={cancelEdit}>Cancel</button>}
    </form>
  );
  
};

export default TodoForm;
