import React from 'react';

const TodoItem = ({ todoItem, toggleCompletion, startEditing, removeTodo }) => {
  const itemStyle = { textDecoration: todoItem.isCompleted ? 'line-through' : 'none', color: todoItem.isCompleted ? 'gray' : 'black'};
  return (
    <li style={itemStyle}>
      <strong>{todoItem.title}</strong> - {todoItem.category} <br/>
      <em>{todoItem.description}</em> <br/>
      <small>Due: {todoItem.dueDate}</small><br/>
      <button onClick={() => toggleCompletion(todoItem.id)}>
        {todoItem.isCompleted ? 'Mark Incomplete' : 'Mark Complete'}
      </button>
      <button onClick={() => startEditing(todoItem)}>Edit</button>
      <button onClick={() => removeTodo(todoItem.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;