"use client"
import Image from 'next/image';
import { showToast } from './Toast';

const Header = () => {
  const handleShowSuccessToast = () => {
    showToast('Discord user successfully copied to the clipboard', 'success');
  };

  const handleDivClick = async () => {
    try {
      await navigator.clipboard.writeText('curl7120');
      showToast('Discord user successfully copied to the clipboard', 'success');
    } catch (error) {
      showToast('Failed to copy username to the clipboard', 'error');
    }
  };

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left">
            <a
                
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-400 hover:text-white hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 cursor-pointer"
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
                <h2 className={`mt-3 text-2xl text-gray-200 font-semibold`}>
                    Discord{' '}
                </h2>
                <p className={`mt-3 max-w-[30ch] text-gray-300 text-sm opacity-70`}>
                    <button>My Discord account.</button>
                </p>
            </a>

            <a
                href="https://github.com/FreddieCrew"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-400 hover:text-gray-500 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image
                    width='100'
                    height='50'
                    alt='Github icon'
                    src='/github-icon.svg'
                />
                <h2 className={`mt-3 text-2xl font-semibold text-gray-300`}>
                    Github{' '}
                </h2>
                <p className={`mt-3 max-w-[30ch] text-gray-200 text-sm opacity-70`}>
                    My github account.
                </p>
            </a>


        </div>
        </main>

    );
};
export default Header;
