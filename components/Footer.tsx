import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-none text-white py-2">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} John Michael Reyes/Ripper/FreddieCrew/Justjohn | See the source code on <a href='https://github.com/FreddieCrew/freddiecrew.github.io' target='_blank' className='underline hover:no-underline'>Github</a></p>
      </div>
    </footer>
  );
};

export default Footer;
