import Button from './Button';
interface ButtonProps {
  label: string;
  href: string;
  blank?: boolean;
  icon?: boolean;
  variant: 'primary' | 'secondary' | 'default';
}

interface ButtonGroupProps {
  buttons: ButtonProps[];
}
const ButtonGroup: React.FC<ButtonGroupProps> = (props) => {
  console.log(props.buttons);
  return (
    <div className="flex gap-4">
      {props.buttons.map((button, index) => (
        <Button key={index} {...button} />
      ))}
    </div>
  );
};

export default ButtonGroup;
