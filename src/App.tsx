import { useState } from 'react';

import { Todo } from './types/todo';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
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
          <TodoForm setTodos={setTodos} />
        </div>

        {/* Todoリストエリア */}
        <div>
          <TodoList todos={todos} setTodos={setTodos} />
        </div>
      </div>
    </div>
  );
}

export default App;
