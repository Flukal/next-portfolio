import Link from 'next/link';
import Image from 'next/image';
import navbarData from '../../public/data/layouts.json';

interface NavbarLink {
  label: string;
  href: string;
  icon: string;
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
      <div className="bg-grayDark w-min mx-auto px-4 py-2 rounded-xl text-center h-full">
        <div className="flex flex-row gap-4">
          {navbar.navbar.links.map((link, index) => (
            <Link
              href={link.href}
              key={index}
              className="bg-gray-900/60 rounded-full p-3 transition ease-in-out w-max hover:bg-gray-900"
            >
              <Image
                src={`icons/${link.icon}.svg`}
                alt={link.label}
                width={25}
                height={25}
                className="fill-red-600"
              />
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
