import Link from 'next/link';
import navbarData from '../../public/data/layouts.json';

interface NavbarLink {
  label: string;
  href: string;
}

interface NavbarData {
  navbar: {
    name: string;
    logo: string;
    links: NavbarLink[];
  };
}

const navbar = navbarData as NavbarData;

const Navbar = () => {
  return (
    <nav className="sticky top-5 z-50 shadow-md">
      <div className="bg-grayDark w-min mx-auto px-8 py-5 rounded-xl text-center h-full">
        {/* <span className="text-foreground text-3xl font-bold">FK</span> */}
        <div className="space-x-8">
          {navbar.navbar.links.map((link, index) => (
            <Link
              href={link.href}
              key={index}
              className="text-foreground hover:text-accent font-bold transition ease-in-out"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
