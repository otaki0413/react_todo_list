import { FC } from 'react';
import { Todo } from '../../types/todo';

type TodoStatusProps = {
  todos: Todo[];
};

export const TodoStatus: FC<TodoStatusProps> = ({ todos }) => {
  // 各ステータスの数
  const todoAllCount = todos.length;
  const todoDoneCount = todos.filter((todo) => todo.isCompleted).length;
  const todoUndoneCount = todos.filter((todo) => !todo.isCompleted).length;

  return (
    <div className="grid grid-cols-3 gap-2">
      <TodoStatusBox statusText="すべてのタスク" count={todoAllCount} />
      <TodoStatusBox statusText="完了" count={todoDoneCount} />
      <TodoStatusBox statusText="未完了" count={todoUndoneCount} />
    </div>
  );
};

type Props = {
  statusText: string;
  count: number;
};

export const TodoStatusBox: FC<Props> = ({ statusText, count }) => {
  return (
    <div className="rounded-lg border border-gray-300 p-4 text-center">
      <div className="mb-2">{statusText}</div>
      <div className="text-2xl font-bold text-blue-600">{count}</div>
    </div>
  );
};
