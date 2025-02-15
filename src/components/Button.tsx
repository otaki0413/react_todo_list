import { FC, ReactNode } from 'react';

type ButtonIntent = 'add' | 'edit' | 'save' | 'delete';
type ButtonType = 'button' | 'submit';

type Props = {
  children: ReactNode;
  intent: ButtonIntent;
  type: ButtonType;
  onClick?: () => void;
};

export const Button: FC<Props> = ({
  children,
  intent,
  type = 'button',
  onClick,
}) => {
  // ボタン用途に応じた色の組合せ
  const intentColors: Record<ButtonIntent, string> = {
    add: 'bg-blue-500 hover:bg-blue-600',
    edit: 'bg-gray-500 hover:bg-gray-600',
    save: 'bg-green-500 hover:bg-green-600',
    delete: 'bg-orange-500 hover:bg-orange-600',
  };
  return (
    <button
      type={type}
      onClick={onClick}
      className={`cursor-pointer rounded-lg border-none ${intentColors[intent]} px-4 py-2 font-bold text-white`}
    >
      {children}
    </button>
  );
};
