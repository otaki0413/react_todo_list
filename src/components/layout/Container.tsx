import { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const Container: FC<Props> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-6">
      <div className="mx-auto my-8 max-w-xl space-y-8 rounded-2xl bg-white p-5">
        {children}
      </div>
    </div>
  );
};
