import Navbar from '@/components/Nav';
import SkillCard from '@/components/skills/boxes';

export default function About() {
    return (
        <div className='root skills'>
            <Navbar />
            <div className='flex flex-col items-center'>
                <div className='container text-white'>
                    <h2 className='text-3xl font-semibold text-center'>Skills and Education</h2>
                    <div className="border-b-2 border-gray-300 my-3 mx-auto w-1/2"></div>
                    <div className='skills p-5 text-center'>
                        <h3 className='text-2xl'>Languages and Technologies</h3>
                        <div className='languages flex flex-wrap justify-center mt-2'>
                            <SkillCard title='C' />
                            <SkillCard title='C++' />
                            <SkillCard title='JavaScript' />
                            <SkillCard title='TypeScript' />
                            <SkillCard title='SASS' />
                            <SkillCard title='Tailwind' />
                            <SkillCard title='React' />
                            <SkillCard title='Vue' />
                            <SkillCard title='Next.js' />
                            <SkillCard title='Nuxt.js' />
                        </div>
                    </div>
                    <div className='spokenlanguages p-5 text-center'>
                        <h3 className='text-2xl'>Spoken languages</h3>
                        <div className='spokenlanguages flex flex-wrap justify-center mt-2'>
                            <SkillCard title='English (Native)' />
                            <SkillCard title='Spanish (Advanced)' />
                            <SkillCard title='French (Novice)' />
                        </div>
                    </div>
                    <div className='education p-5'>
                        <h3 className='text-2xl text-center'>Education</h3>
                        <div className='university flex flex-wrap justify-center mt-2'>
                            <ul>
                                <li>
                                    <h3 className='text-right'>
                                        <span className='font-semibold text-lg'>University of Houston</span> -{' '}
                                        <span className='text-sm'>Houston, Texas</span>{' '}
                                        <span className='text-gray-200 text-left'>(2020-Present)</span>
                                    </h3>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}