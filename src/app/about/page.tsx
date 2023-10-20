import Navbar from '../../../components/Nav';
import React from 'react';

export default function About() {

  return (
    <div className='about'>
      <Navbar />
      <div className='container py-6'>
      <h2 className='ml-10 text-3xl text-white text-bold'>About me</h2>
      <p className='ml-10 text-white py-3'>
        Hi there, my name is John Michael Reyes, and I was born in El Paso, Texas, but I currently live in Houston, Texas.
      </p>
      <p className='ml-10 text-white'>
        I currently work as a Hardware Engineer, and I'm also a full-stack web developer. Although I'm more skilled in front-end development, but I can handle back-end as well.
      </p>
      <p className='ml-10 text-white m-2'>
        Some of my side projects include <a title='Simple Character Counter written in C++, which can count how many lines are in a .txt file.' href='https://github.com/FreddieCrew/CharCounter' className='text-indigo-50 no-underline hover:underline hover:opacity-80' target='_blank'>CharCounter</a>, and <a title='Simple password generator written in Python' href='https://github.com/FreddieCrew/Password-Generator' className='text-indigo-50 no-underline hover:underline hover:opacity-80'>PasswordGenerator</a>.
      </p>
      </div>
      
    </div>
  )
}
