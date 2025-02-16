import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Todo } from './types/todo';
import { TodoStatus } from './components/todo/TodoStatus';
import { TodoForm } from './components/todo/TodoForm';
import { TodoList } from './components/todo/TodoList';

function App() {
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

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-6">
      <div className="mx-auto my-8 max-w-xl space-y-8 rounded-2xl bg-white p-5">
        {/* アプリタイトル */}
        <h1 className="mb-8 text-center text-3xl font-bold text-gray-800">
          Todoリスト
        </h1>

        {/* Todoステータスエリア */}
        <div>
          <TodoStatus todos={todos} />
        </div>

        {/* Todoフォームエリア */}
        <div>
          <TodoForm addTodo={addTodo} />
        </div>

        {/* Todoリストエリア */}
        <div>
          <TodoList
            todos={todos}
            toggleTodo={toggleTodo}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
