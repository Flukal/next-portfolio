import Card from './Card';
import Skills from './Skills';

const AboutMe = () => {
  return (
    <section id="about" className="bg-background text-foreground py-10">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-kaushan text-accent font-bold mb-8">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="font-sarala text-lg bg">
            <Card className="font-sarala">
              <p className="mb-4">
                Hi, I’m <strong className="text-accent">Fulvio</strong>, a
                passionate Web Frontend Developer with over four years of
                experience crafting functional and user-friendly web interfaces.
                I love bringing designs to life and creating seamless digital
                experiences that resonate with users.
              </p>
              <p className="mb-4">
                Throughout my career, I’ve worked with modern tools and
                frameworks like <strong className="text-accent">Vue.js</strong>,{' '}
                <strong className="text-accent">Nuxt.js</strong>,
                <strong className="text-accent">Next.js</strong>,{' '}
                <strong className="text-accent">TypeScript</strong>, and{' '}
                <strong className="text-accent">Tailwind CSS</strong>, while
                integrating frontends with backend systems such as{' '}
                <strong className="text-accent">WordPress</strong>,{' '}
                <strong className="text-accent">Strapi</strong>, and{' '}
                <strong className="text-accent">Storyblok</strong>. My focus is
                always on delivering clean, efficient, and scalable code that
                aligns with the needs of the project and the user.
              </p>
            </Card>
          </div>
        </div>
        <Skills />
      </div>
    </section>
  );
};

export default AboutMe;
