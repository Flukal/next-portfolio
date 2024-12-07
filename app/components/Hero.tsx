import hero from '../../public/data/hero.json';
import ButtonGroup from './ButtonGroup';
import React from 'react';

interface ButtonProps {
  label: string;
  href: string;
  blank?: boolean;
  icon?: boolean;
  variant: 'primary' | 'secondary';
}

const Hero: React.FC = () => {
  return (
    <section className="bg-background text-foreground h-[500px] flex items-center">
      <div className="max-w-5xl mx-auto px-4 w-full">
        <h1 className="text-7xl font-bold mb-2">{hero.title}</h1>
        <p className="text-muted text-lg mb-8">{hero.subtitle}</p>
        <p className="text-white/90 text-xl max-w-2xl mb-6">
          {hero.description}
        </p>
        <ButtonGroup buttons={hero.buttons as ButtonProps[]} />
      </div>
    </section>
  );
};

export default Hero;
