import React from 'react';

interface CardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, children, className }) => {
  const checkClassName = className || '';
  return (
    <div
      className={`flex flex-col h-full bg-grayDark shadow-lg rounded-lg p-6 ${checkClassName}`}
    >
      <h3 className="text-lg capitalize font-semibold mb-4">{title}</h3>
      {children}
    </div>
  );
};

export default Card;
