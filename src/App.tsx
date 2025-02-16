import { useTodos } from './hooks/useTodos';
import { TodoStatus } from './components/todo/TodoStatus';
import { TodoForm } from './components/todo/TodoForm';
import { TodoList } from './components/todo/TodoList';

function App() {
  const { todos, addTodo, toggleTodo, updateTodo, deleteTodo } = useTodos();

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
