// import Image from 'next/image';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Repositories from './components/Repositories';

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutMe />
      <Projects />
      <Repositories />
    </div>
  );
};

export default Home;
