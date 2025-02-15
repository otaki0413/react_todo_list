import { FC } from 'react';
import { Todo } from '../types/todo';
import { Button } from './Button';

type TodoListProps = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

type TodoListItemProps = {
  todo: Todo;
  onChangeStatus: () => void;
  onDelete: () => void;
};

export const TodoList: FC<TodoListProps> = ({ todos, setTodos }) => {
  // Todoステータス切替処理
  const changeStatus = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === todoId) {
          return { ...todo, isCompleted: !todo.isCompleted };
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
    <ul className="list-none space-y-3">
      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          onChangeStatus={() => changeStatus(todo.id)}
          onDelete={() => {
            deleteTodo(todo.id);
          }}
        />
      ))}
    </ul>
  );
};

const TodoListItem: FC<TodoListItemProps> = ({
  todo,
  onChangeStatus,
  onDelete,
}) => {
  return (
    <li className="flex items-center gap-x-4 border-b-1 border-b-gray-300 py-4">
      <input type="checkbox" onChange={onChangeStatus} />
      <span className="line-clamp-2 flex-1">{todo.text}</span>
      <div className="flex gap-x-2">
        <Button intent="edit" type="button">
          編集
        </Button>
        <Button intent="save" type="submit">
          保存
        </Button>
        <Button onClick={onDelete} intent="delete" type="button">
          削除
        </Button>
      </div>
    </li>
  );
};
