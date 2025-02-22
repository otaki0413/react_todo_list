import { FC, useState, memo } from 'react';
import { Todo } from '../../types/todo';
import { Button } from '../Button';

type TodoListItemProps = {
  todo: Todo;
  toggleTodo: (id: string) => void;
  updateTodo: (id: string, text: string) => void;
  deleteTodo: (id: string) => void;
};

export const TodoListItem: FC<TodoListItemProps> = memo(
  ({ todo, toggleTodo, updateTodo, deleteTodo }) => {
    // 編集モードかどうかを管理するstate
    const [isEditMode, setIsEditMode] = useState<boolean>(false);

    return (
      <li>
        {isEditMode ? (
          <TodoEditMode
            todo={todo}
            updateTodo={updateTodo}
            setIsEdit={setIsEditMode}
          />
        ) : (
          <TodoViewMode
            todo={todo}
            toggleTodo={toggleTodo}
            setIsEdit={setIsEditMode}
            deleteTodo={deleteTodo}
          />
        )}
      </li>
    );
  },
);

// Todo表示モード用のコンポーネント
type TodoViewModeProps = {
  todo: Todo;
  toggleTodo: (id: string) => void;
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
  deleteTodo: (id: string) => void;
};

const TodoViewMode: FC<TodoViewModeProps> = ({
  todo,
  toggleTodo,
  setIsEdit,
  deleteTodo,
}) => (
  <div className="flex items-center gap-x-4 border-b-1 border-b-gray-300 p-4">
    <input
      type="checkbox"
      checked={todo.isCompleted}
      onChange={() => toggleTodo(todo.id)}
    />
    <span
      className={`${todo.isCompleted && 'line-through'} line-clamp-2 flex-1`}
    >
      {todo.text}
    </span>
    <div className="flex gap-x-2">
      <Button onClick={() => setIsEdit(true)} intent="edit" type="button">
        編集
      </Button>
      <Button onClick={() => deleteTodo(todo.id)} intent="delete" type="button">
        削除
      </Button>
    </div>
  </div>
);

// Todo編集モード用のコンポーネント
type TodoEditModeProps = {
  todo: Todo;
  updateTodo: (id: string, text: string) => void;
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
};

const TodoEditMode: FC<TodoEditModeProps> = ({
  todo,
  updateTodo,
  setIsEdit,
}) => {
  const [error, setError] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    // フォームデータからTodo取得
    const editForm = e.currentTarget;
    const formData = new FormData(editForm);
    const editTodoText = formData.get('edit-todo') as string;
    if (!editTodoText.trim()) {
      setError('フォームが未入力です。');
      return;
    }
    // Todo更新
    updateTodo(todo.id, editTodoText);
    // フォームリセット
    editForm.reset();
    // 編集モード解除
    setIsEdit(false);
  };

  return (
    <div className="border-b-1 border-b-gray-300 p-4">
      <form
        onSubmit={handleSubmit}
        className="flex w-full items-center justify-between gap-x-4"
      >
        <input
          type="text"
          name="edit-todo"
          defaultValue={todo.text}
          className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
        />
        <Button intent="save" type="submit">
          保存
        </Button>
      </form>
      {/* エラーメッセージ */}
      {error && <p className="text-center text-red-500">{error}</p>}
    </div>
  );
};
