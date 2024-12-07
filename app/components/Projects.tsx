import Link from 'next/link';
import projects from '../../public/data/projects.json';
import Card from './Card';
import ButtonGroup from './ButtonGroup';

// Define the Skill type
interface Project {
  title: string;
  href: string;
  description: string;
  techs: string[];
  category: string;
}

const projectsArray: Project[] = projects;

console.log(projects);
const Projects = () => {
  return (
    <section className="bg-background text-foreground py-10">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl text-accent uppercase font-bold mb-8">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {projectsArray.map((project, index) => (
            <Card key={index} title={project.title}>
              <p className="text-muted text-sm mb-2">{project.description}</p>
              <ul className="flex flex-wrap gap-3 list-none mb-10">
                {project.techs.map((tech, index) => (
                  <li
                    key={index}
                    className="bg-grayLight text-xs text-muted px-3 py-1 rounded-xl inline-flex items-center gap-2"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
              <ButtonGroup
                buttons={[
                  {
                    label: 'Visit Website',
                    href: project.href,
                    blank: true,
                    icon: false,
                    variant: 'primary',
                  },
                  {
                    label: 'Check Repository',
                    href: project.href,
                    blank: true,
                    icon: false,
                    variant: 'secondary',
                  },
                ]}
              />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
