import Button from './Button';
interface ButtonProps {
  label: string;
  href: string;
  blank?: boolean;
  icon?: boolean;
  variant?: 'primary' | 'secondary';
}

interface ButtonGroupProps {
  buttons: ButtonProps[];
}
const ButtonGroup: React.FC<ButtonGroupProps> = (props) => {
  return (
    <div className="flex gap-4">
      {props.buttons.map((button, index) => (
        <Button key={index} {...button} />
      ))}
    </div>
  );
};

export default ButtonGroup;
