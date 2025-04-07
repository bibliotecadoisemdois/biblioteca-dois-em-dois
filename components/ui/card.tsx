import React from 'react';

interface CardProps {
  children: React.ReactNode;
}

export function Card({ children }: CardProps) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
      {children}
    </div>
  );
}