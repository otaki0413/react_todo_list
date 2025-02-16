import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Todo } from './types/todo';
import { TodoForm } from './components/TodoForm';
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
        <div className="grid grid-cols-3 gap-2">
          {/* ステータスボックス */}
          <div className="rounded-lg border border-gray-300 p-4 text-center">
            <div className="mb-2">すべてのタスク</div>
            <div className="text-2xl font-bold text-blue-600">1</div>
          </div>
          <div className="rounded-lg border border-gray-300 p-4 text-center">
            <div className="mb-2">完了</div>
            <div className="text-2xl font-bold text-blue-600">1</div>
          </div>
          <div className="rounded-lg border border-gray-300 p-4 text-center">
            <div className="mb-2">未完了</div>
            <div className="text-2xl font-bold text-blue-600">1</div>
          </div>
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
