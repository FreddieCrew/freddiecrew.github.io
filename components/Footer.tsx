const Footer = () => {
  return (
    <footer className="bg-none text-white">
      <div className="container mx-auto text-center">
        <p className='footer-title'>&copy; {new Date().getFullYear()} John Michael Reyes/Ripper/FreddieCrew/Justjohn | See the source code on <a href='https://github.com/FreddieCrew/freddiecrew.github.io' target='_blank' className='no-underline hover:underline'>Github</a></p>
      </div>
    </footer>
  );
};

export default Footer;
