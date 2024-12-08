import React, { FC } from 'react';
import { JSX } from 'react/jsx-runtime';

// Define props for the component
interface HeadlineProps {
  title: string;
  visual?: keyof JSX.IntrinsicElements; // HTML elements like 'h1', 'h2', etc.
  subtitle?: string;
  subtitleTop?: boolean;
  color?: string;
  font?: string;
  style?: string;
}

// Component
const Headline: FC<HeadlineProps> = ({
  title = 'Title Headline',
  visual: Visual = 'h4', // Default to h4
  subtitle,
  subtitleTop = false,
  style,
  font = 'font-kaushan',
}) => {
  // Tailwind styles for headings
  const visualStyling = {
    h1: 'text-6xl lg:text-7xl font-bold',
    h2: 'text-3xl lg:text-5xl font-bold',
    h3: 'text-2xl lg:text-4xl font-bold',
    h4: 'text-lg lg:text-xl font-regular',
    h5: 'text-md lg:text-lg font-semibold',
    h6: 'text-base lg:text-md font-semibold',
  };

  return (
    <div
      className={`flex mb-8 ${subtitleTop ? 'flex-col-reverse' : 'flex-col'}`}
    >
      {/* Dynamic heading */}
      <Visual
        className={`capitalize ${font} ${style} ${
          visualStyling[Visual as keyof typeof visualStyling]
        }`}
      >
        {title}
      </Visual>

      {/* Conditional rendering of subtitle */}
      {subtitle && (
        <p className="text-white uppercase font-semibold text-sm">{subtitle}</p>
      )}
    </div>
  );
};

export default Headline;
