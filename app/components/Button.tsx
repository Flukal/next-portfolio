import Link from 'next/link';

interface ButtonProps {
  label: string;
  href: string;
  blank?: boolean;
  icon?: boolean;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({
  label,
  href,
  blank,
  icon,
  variant,
}) => {
  let setVariant;

  switch (variant) {
    case 'primary':
      setVariant =
        'bg-accent text-foreground text-accent hover:opacity-80 transition ease-in-out duration-200';
      break;
    case 'secondary':
      setVariant =
        'bg-grayLight text-foreground hover:opacity-80 transition ease-in-out duration-200';
      break;
    default:
      setVariant =
        'text-accent hover:opacity-80 pl-0 pb-0 transition ease-in-out duration-200 shrink';
  }

  return (
    <Link
      href={href}
      target={blank ? '_blank' : '_self'}
      rel="noopener noreferrer"
      className={`px-5 py-2 font-semibold font-sarala rounded-md text-sm  ${
        setVariant ? setVariant : 'default'
      }`}
    >
      <span>{label}</span>
      {icon && <span className="text-md ml-1">&#8669;</span>}
    </Link>
  );
};

export default Button;
