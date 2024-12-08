import projects from '../../public/data/projects.json';
import Card from './Card';
import Headline from './Headline';
import Button from './Button';
// Define the Skill type
interface Project {
  title: string;
  href: string;
  description: string;
  techs: string[];
  category: string;
}

const projectsArray: Project[] = projects;

const Projects = () => {
  return (
    <section id="projects" className="bg-background text-foreground py-10">
      <div className="max-w-5xl mx-auto px-4">
        <Headline title="Projects" visual="h3" style="text-accent" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {projectsArray.map((project, index) => (
            <Card key={index} title={project.title}>
              <p className="text-accent text-sm mb-2">{project.category}</p>
              <p className="text-muted font-sarala text-sm mb-4">
                {project.description}
              </p>
              <ul className="flex flex-wrap gap-3 list-none mb-10 mt-auto">
                {project.techs.map((tech, index) => (
                  <li
                    key={index}
                    className="bg-grayLight text-xs text-muted px-3 py-1 rounded-xl inline-flex items-center gap-2"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
              <div className="flex flex-row justify-between items-end">
                <Button
                  label="Visit Website"
                  href={project.href}
                  blank={true}
                  icon={false}
                  variant="primary"
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
