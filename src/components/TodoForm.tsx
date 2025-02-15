import { FC } from 'react';
import { nanoid } from 'nanoid';
import { Button } from './Button';
import { Todo } from '../types/todo';

type Props = {
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

export const TodoForm: FC<Props> = ({ setTodos }) => {
  // フォーム送信時の処理
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // フォームデータからTodo取得
    const form = e.currentTarget;
    const formData = new FormData(form);
    const todoText = formData.get('todo') as string;
    if (!todoText.trim()) {
      alert('入力値が空です');
      return;
    }
    // Todo追加
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: nanoid(), text: todoText, isCompleted: false },
    ]);
    // フォームリセット
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-4">
      <input
        type="text"
        name="todo"
        placeholder="新しいTodoを入力..."
        className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
      />
      <Button intent="add" type="submit">
        追加
      </Button>
    </form>
  );
};
