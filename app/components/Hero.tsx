import hero from '../../public/data/hero.json';
import ButtonGroup from './ButtonGroup';
import React from 'react';
import Headline from './Headline';
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
        <h1 className="text-7xl font-bold mb-2 font-kaushan">{hero.title}</h1>
        <Headline title={`${hero.title}`} visual="h1" style="text-accent" />
        <p className="text-muted text-sm text-md font-geist font-extralight mb-8">
          {hero.subtitle}
        </p>
        <p className="text-white/90 text-md md:text-xl font-sarala max-w-2xl mb-6">
          {hero.description}
        </p>
        <ButtonGroup buttons={hero.buttons as ButtonProps[]} />
      </div>
    </section>
  );
};

export default Hero;
