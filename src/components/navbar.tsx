import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <nav>
        <div className="bg-[#1C1C1C]/30 backdrop-blur-xl fixed flex w-screen h-16 px-16 py-4 items-center justify-between z-50">
          {/* Logo and Links */}
          <div className="w-12 h-14 flex flex-none items-center space-x-6">
            <Image
              src="/images/logo.svg"
              width={64}
              height={64}
              alt="logo"
              priority
            />
            <div className="hidden sm:block text-[16px] font-thin tracking-wide space-x-4">
              <a href="#">PROJECTS</a>
              <a href="#">ABOUT</a>
            </div>
          </div>

          {/* Hamburger Menu (Mobile Only) */}
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <Image
              src="/images/hamburger.svg"
              width={64}
              height={64}
              alt="Collapse Icon"
            />
          </button>

          {/* Contact Me Link */}
          <div className="hidden sm:block h-auto items-start space-x-4">
            <a href="#" className="text-[16px] font-thin tracking-wide">
              CONTACT ME
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}