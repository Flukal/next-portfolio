import Card from './Card';
import Headline from './Headline';

const AboutMe = () => {
  return (
    <section id="about" className="bg-background text-foreground py-10">
      <div className="max-w-5xl mx-auto px-4">
        <Headline title="About Me" visual="h3" style="text-accent" />
        <Card className="font-sarala text-md md:text-lg">
          <p className="mb-4">
            I&apos;m a{' '}
            <strong className="text-accent">Frontend Developer</strong> with
            professional experience building websites and web applications using
            JavaScript, TypeScript and component-based frontend frameworks.
          </p>
          <p className="mb-4">
            Throughout my professional experience, I have worked with{' '}
            <strong className="text-accent">Vue.js</strong> and
            <strong className="text-accent">Nuxt.js</strong>, as well as{' '}
            <strong className="text-accent">React</strong> and{' '}
            <strong className="text-accent">Next.js</strong>, building
            responsive interfaces and integrating frontend applications with
            Headless CMS platforms and backend services through REST APIs and
            GraphQL.
          </p>
          <p className="mb-4">
            I enjoy bridging design and development, with a strong focus on
            usability, clean implementation and user experience. I have also
            worked on frontend performance,{' '}
            <strong className="text-accent">Core Web Vitals</strong>,{' '}
            <strong className="text-accent">component testing</strong> and{' '}
            <strong className="text-accent">A/B testing</strong> in
            collaboration with designers and QA teams.
          </p>
          <p className="mb-4">
            I&apos;m currently focused on continuing to grow as a{' '}
            <strong className="text-accent">Frontend Developer</strong> while
            keeping my skills up to date with modern frontend technologies and
            development practices.{' '}
          </p>
        </Card>
      </div>
    </section>
  );
};

export default AboutMe;
