import skills from '../../public/data/skills.json';
import Card from './Card';

// Define the Skill type
interface Skills {
  [category: string]: string[];
}

const skillsArray: Skills = skills;

const Skills: React.FC = () => {
  return (
    <section className="bg-background text-foreground py-10">
      <div className="grid grid-cols-2 grid-flow-row gap-2">
        {Object.entries(skillsArray).map(([category, skillList]) => (
          <Card key={category} title={category} className="first:col-span-full">
            <ul className="flex flex-wrap gap-3 list-none">
              {skillList.map((skill, index) => (
                <li
                  key={index}
                  className="bg-grayLight text-xs text-muted px-3 py-1 rounded-xl inline-flex items-center gap-2"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Skills;
