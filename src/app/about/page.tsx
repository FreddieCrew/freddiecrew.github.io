import Footer from '../../../components/Footer';
import Navbar from '../../../components/Nav';

export default function About() {

  return (
    <div className='about'>
      <Navbar />
      <p className='text-center text-white py-3'>
        Hi there, my name is John Michael Reyes, and I was born in El Paso, Texas, but I currently live in Houston, Texas.
      </p>
      <p className='text-white text-center'>
        I currently work as a Hardware Engineer. Although, I'm also a full-stack web developer. However, I'm more skilled in front-end but I can handle back-end as well.
      </p>
      <p className='text-center text-white m-2'>
        Some of my side projects include <a title='Simple Character Counter written in C++, which can count how many lines are in a .txt file.' href='https://github.com/FreddieCrew/CharCounter' className='text-indigo-50 underline hover:no-underline hover:opacity-50' target='_blank'>CharCounter</a>, and <a title='Simple password generator written in Python' href='https://github.com/FreddieCrew/Password-Generator' className='text-indigo-50 underline hover:no-underline hover:opacity-50'>PasswordGenerator</a>.
      </p>

      
    </div>
  )
}
