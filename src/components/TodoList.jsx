import React, { useState } from 'react';
import { Check, Trash2, Plus } from 'lucide-react';
import { useTodoStore } from "../store/todoStore.js"; 
import { useLanguageStore } from '../store/languageStore.js';

export const TodoList = () => {
  const [newTodo, setNewTodo] = useState('');
  const { todos, addTodo, removeTodo, toggleTodo } = useTodoStore();
  const { t } = useLanguageStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      addTodo(newTodo);
      setNewTodo('');
    }
  };

  return (
    <div className="w-full max-w-md">
      <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="flex-1 px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600"
          placeholder={t('addTodo')}
        />
        <button
          type="submit"
          className="p-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
        >
          <Plus size={20} />
        </button>
      </form>
      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center gap-2 p-2 rounded-lg bg-gray-100 dark:bg-gray-700"
          >
            <button
              onClick={() => toggleTodo(todo.id)}
              className={`p-1 rounded-full ${todo.completed ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-600'}`}
            >
              <Check size={16} className={todo.completed ? 'text-white' : 'invisible'} />
            </button>
            <span className={`flex-1 ${todo.completed ? 'line-through' : ''}`}>
              {todo.text}
            </span>
            <button
              onClick={() => removeTodo(todo.id)}
              className="p-1 text-red-500 hover:text-red-600"
            >
              <Trash2 size={16} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
