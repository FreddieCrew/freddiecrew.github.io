import React from 'react';
import Image from 'next/image'
import Toast, { showToast } from './Toast';


const Header = () => {
    const handleShowSuccessToast = () => {
        showToast('Discord user succesfully copied to the clipboard', 'success');
      };

      const handleDivClick = () => {
        try {
          const textarea = document.createElement('textarea');
          textarea.value = 'curl7120';
          document.body.appendChild(textarea);
          textarea.select();
          document.execCommand('copy');
          document.body.removeChild(textarea);
          showToast('Discord user successfully copied to the clipboard', 'success');
        } catch (error) {
            showToast('Failed to copy username to the clipboard', 'error');
        }
      };


    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left">
            <a
                
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-400 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 cursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleDivClick}
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
                    <button>My Discord account.</button>
                </p>
            </a>

            <a
                href="https://github.com/FreddieCrew"
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
