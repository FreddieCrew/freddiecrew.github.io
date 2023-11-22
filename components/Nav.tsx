const Nav = () => {
  return (
    <footer className="bg-none text-white py-2">
      <div className="flex">
        <ul className='gap-4 ml-8 inline-flex items-center text-center list-none'>
            <li><a className='hover:underline hover:opacity-50' href='/'>Home</a></li>
            <li><a className='hover:underline hover:opacity-50' href='/about/'>About me</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Nav;
