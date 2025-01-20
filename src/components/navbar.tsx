import Image from 'next/image';

export default function Navbar() {
  return (
    <>
      <nav>
        <div className='fixed z-50 flex h-16 w-screen items-center justify-between bg-[#1C1C1C]/30 px-16 py-4 backdrop-blur-xl'>
          {/* Logo and Links */}
          <div className='flex h-14 w-12 flex-none items-center space-x-6'>
            <Image
              src='/images/logo.svg'
              width={64}
              height={64}
              alt='logo'
              priority
            />
            <div className='hidden space-x-4 text-[16px] font-thin tracking-wide sm:block'>
              <a href='#'>PROJECTS</a>
              <a href='#'>ABOUT</a>
            </div>
          </div>

          {/* Hamburger Menu (Mobile Only) */}
          <button
            data-collapse-toggle='navbar-default'
            type='button'
            className='inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 sm:hidden'
            aria-controls='navbar-default'
            aria-expanded='false'
          >
            <span className='sr-only'>Open main menu</span>
            <Image
              src='/images/hamburger.svg'
              width={64}
              height={64}
              alt='Collapse Icon'
            />
          </button>

          {/* Contact Me Link */}
          <div className='hidden h-auto items-start space-x-4 sm:block'>
            <a href='#' className='text-[16px] font-thin tracking-wide'>
              CONTACT ME
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
