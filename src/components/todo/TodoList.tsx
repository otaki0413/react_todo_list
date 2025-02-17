import { FC } from 'react';
import { TodoListItem } from './TodoListItem';
import { Todo } from '../../types/todo';

type TodoListProps = {
  todos: Todo[];
  toggleTodo: (id: string) => void;
  updateTodo: (id: string, text: string) => void;
  deleteTodo: (id: string) => void;
};

export const TodoList: FC<TodoListProps> = ({
  todos,
  toggleTodo,
  updateTodo,
  deleteTodo,
}) => {
  if (todos.length === 0) {
    return (
      <p className="text-center text-gray-500">Todoが登録されていません</p>
    );
  }
  return (
    <ul className="list-none space-y-3">
      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
};
