import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
      {...props}
    >
      {children}
    </button>
  );
}