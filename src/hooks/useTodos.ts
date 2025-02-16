import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Todo } from '../types/todo';

export const useTodos = () => {
  // Todoリストを管理するstate
  const [todos, setTodos] = useState<Todo[]>([]);

  // Todo追加処理
  const addTodo = (text: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: nanoid(), text, isCompleted: false },
    ]);
  };

  // Todoステータス切替処理
  const toggleTodo = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === todoId) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      });
    });
  };

  // Todo更新処理
  const updateTodo = (todoId: string, updatedText: string) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === todoId) {
          return { ...todo, text: updatedText };
        }
        return todo;
      });
    });
  };

  // Todo削除処理
  const deleteTodo = (todoId: string) => {
    const isOk = confirm('本当によろしいですか？');
    if (isOk) {
      setTodos((prevTodos) => prevTodos.filter((pt) => pt.id !== todoId));
    }
  };

  return {
    todos,
    addTodo,
    toggleTodo,
    updateTodo,
    deleteTodo,
  };
};
