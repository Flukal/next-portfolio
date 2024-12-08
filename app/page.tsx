// import Image from 'next/image';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Repositories from './components/Repositories';
import Skills from './components/Skills';

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Repositories />
    </div>
  );
};

export default Home;
