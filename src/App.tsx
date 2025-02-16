import { useTodos } from './hooks/useTodos';
import { TodoStatus } from './components/todo/TodoStatus';
import { TodoForm } from './components/todo/TodoForm';
import { TodoList } from './components/todo/TodoList';
import { Container } from './components/layout/Container';

function App() {
  const { todos, addTodo, toggleTodo, updateTodo, deleteTodo } = useTodos();

  return (
    <Container>
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
    </Container>
  );
}

export default App;
