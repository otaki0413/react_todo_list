import { FC } from 'react';
import { Button } from './Button';

type Props = {
  addTodo: (text: string) => void;
};

export const TodoForm: FC<Props> = ({ addTodo }) => {
  // フォーム送信時の処理
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // フォームデータからTodo取得
    const form = e.currentTarget;
    const formData = new FormData(form);
    const todoText = formData.get('todo') as string;
    if (!todoText.trim()) return;
    // Todo追加
    addTodo(todoText);
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
