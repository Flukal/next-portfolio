const Footer = () => {
  return (
    <footer className="bg-grayDark text-foreground py-4">
      <div className="max-w-7xl mx-auto px-4 ">
        <p className="text-center text-sm text-gray-600">
          &copy; {new Date().getFullYear()} Flukal
        </p>
      </div>
    </footer>
  );
};

export default Footer;
