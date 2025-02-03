import { create } from 'zustand';

export const useTodoStore = create(function (set) {
  return {
    todos: [],
    addTodo: function (text) {
      set(function (state) {
        return {
          todos: [...state.todos, { id: Date.now(), text, completed: false }],
        };
      });
    },
    removeTodo: function (id) {
      set(function (state) {
        return {
          todos: state.todos.filter(function (todo) {
            return todo.id !== id;
          }),
        };
      });
    },
    toggleTodo: function (id) {
      set(function (state) {
        return {
          todos: state.todos.map(function (todo) {
            return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
          }),
        };
      });
    },
  };
});
