import { FC, useState } from 'react';
import { Button } from '../Button';

type TodoFormProps = {
  addTodo: (text: string) => void;
};

export const TodoForm: FC<TodoFormProps> = ({ addTodo }) => {
  const [error, setError] = useState<string>('');

  // フォーム送信時の処理
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    // フォームデータからTodo取得
    const form = e.currentTarget;
    const formData = new FormData(form);
    const todoText = formData.get('todo') as string;
    if (!todoText.trim()) {
      setError('フォームが未入力です。');
      return;
    }
    // Todo追加
    addTodo(todoText);
    // フォームリセット
    form.reset();
  };

  return (
    <div>
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
      {error && <p className="text-center text-red-500">{error}</p>}
    </div>
  );
};
