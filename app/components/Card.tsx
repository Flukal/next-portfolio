import React from 'react';
import Headline from './Headline';

interface CardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, children, className }) => {
  const checkClassName = className || '';
  return (
    <div
      className={`flex flex-col h-full bg-grayDark shadow-lg rounded-lg p-6 ${checkClassName}`}
    >
      {title && (
        <Headline
          title={`${title}`}
          visual="h5"
          style="text-white"
          font="font-poppins"
        />
      )}
      {children}
    </div>
  );
};

export default Card;
