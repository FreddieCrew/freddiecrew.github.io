import React from 'react';
import Image from 'next/image'

const Header = () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left">
            <a
                href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-400 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image
                    width='100'
                    height='50'
                    alt='Discord icon'
                    src='/discord-icon.svg'
                />
                <h2 className={`mb-3 text-2xl font-semibold`}>
                    Discord{' '}
                </h2>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                    My Discord account.
                </p>
            </a>

            <a
                href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-400 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image
                    width='100'
                    height='50'
                    alt='Github icon'
                    src='/github-icon.svg'
                />
                <h2 className={`mb-3 text-2xl font-semibold`}>
                    Github{' '}
                </h2>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                    My github account.
                </p>
            </a>


        </div>
        </main>

    );
};
export default Header;