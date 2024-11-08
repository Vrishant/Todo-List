import React, { useState } from 'react';
import './App.css';
import TodoItem from './components/Task'; 

function TodoList() {
  const [todoItems, setTodoItems] = useState([
  ]);

  const [newTodo, setNewTodo] = useState({ id: null, title: '', category: '', description: '', dueDate: '' });
  const [isEditMode, setIsEditMode] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewTodo({ ...newTodo, [name]: value });
  };

  const saveTodo = (event) => {
    event.preventDefault();
    if (isEditMode) {
      setTodoItems(todoItems.map(item => (item.id === newTodo.id ? newTodo : item)));
      setIsEditMode(false);
    } else {
      setTodoItems([...todoItems, { ...newTodo, id: Date.now(), isCompleted: false }]);
    }
    setNewTodo({ id: null, title: '', category: '', description: '', dueDate: '' });
  };

  const startEditing = (todoItem) => {
    setNewTodo(todoItem);
    setIsEditMode(true);
  };

  const toggleCompletion = (id) => {
    setTodoItems(todoItems.map(item => (item.id === id ? { ...item, isCompleted: !item.isCompleted } : item)));
  };

  const removeTodo = (id) => {
    setTodoItems(todoItems.filter(item => item.id !== id));
  };

  return (
    <div className="App">
      <h1 className="Title">The To-Do List</h1>
      <form onSubmit={saveTodo}>
        <input
          type="text" name="title" value={newTodo.title} onChange={handleInputChange} placeholder="Enter Task" required
        />
        <input
          type="text" name="category" value={newTodo.category} onChange={handleInputChange} placeholder="Give Category" required
        />
        <input
          type="text" name="description" value={newTodo.description} onChange={handleInputChange} placeholder="Add details"
        />
        <input
          type="datetime-local" name="dueDate" value={newTodo.dueDate} onChange={handleInputChange}
        />
        <button type="submit">{isEditMode ? 'Update Todo' : 'Add Task'}</button>
      </form>

      <ul>
        {todoItems.map(item => (
          <TodoItem
            key={item.id} todoItem={item} toggleCompletion={toggleCompletion} startEditing={startEditing} removeTodo={removeTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;