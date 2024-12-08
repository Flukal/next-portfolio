import Card from './Card';
import Headline from './Headline';
const AboutMe = () => {
  return (
    <section id="about" className="bg-background text-foreground py-10">
      <div className="max-w-5xl mx-auto px-4">
        <Headline title="About Me" visual="h3" style="text-accent" />
        <Card className="font-sarala text-md md:text-lg">
          <p className="mb-4">
            Hi, I’m <strong className="text-accent">Fulvio</strong>, a
            passionate Web Frontend Developer with over four years of experience
            crafting functional and user-friendly web interfaces. I love
            bringing designs to life and creating seamless digital experiences
            that resonate with users.
          </p>
          <p className="mb-4">
            Throughout my career, I’ve worked with modern tools and frameworks
            like <strong className="text-accent">Vue.js</strong>,{' '}
            <strong className="text-accent">Nuxt.js</strong>,
            <strong className="text-accent">Next.js</strong>,{' '}
            <strong className="text-accent">TypeScript</strong>, and{' '}
            <strong className="text-accent">Tailwind CSS</strong>, while
            integrating frontends with backend systems such as{' '}
            <strong className="text-accent">WordPress</strong>,{' '}
            <strong className="text-accent">Strapi</strong>, and{' '}
            <strong className="text-accent">Storyblok</strong>. My focus is
            always on delivering clean, efficient, and scalable code that aligns
            with the needs of the project and the user.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default AboutMe;
