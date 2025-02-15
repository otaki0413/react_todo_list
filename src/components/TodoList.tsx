import { FC } from 'react';
import { Todo } from '../types/todo';
import { Button } from './Button';

type TodoListProps = {
  todos: Todo[];
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
};

export const TodoList: FC<TodoListProps> = ({
  todos,
  toggleTodo,
  deleteTodo,
}) => {
  return (
    <ul className="list-none space-y-3">
      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
};

type TodoListItemProps = {
  todo: Todo;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
};

const TodoListItem: FC<TodoListItemProps> = ({
  todo,
  toggleTodo,
  deleteTodo,
}) => {
  return (
    <li className="flex items-center gap-x-4 border-b-1 border-b-gray-300 py-4">
      <input
        type="checkbox"
        checked={todo.isCompleted}
        onChange={() => toggleTodo(todo.id)}
      />
      <span className="line-clamp-2 flex-1">{todo.text}</span>
      <div className="flex gap-x-2">
        <Button intent="edit" type="button">
          編集
        </Button>
        <Button intent="save" type="submit">
          保存
        </Button>
        <Button
          onClick={() => deleteTodo(todo.id)}
          intent="delete"
          type="button"
        >
          削除
        </Button>
      </div>
    </li>
  );
};
