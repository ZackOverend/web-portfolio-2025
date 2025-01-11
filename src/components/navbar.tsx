import Image from "next/image";

export default function Navbar() {
    return (
    <>
        <nav className="">
            <div className="bg-[#1C1C1C]/30 backdrop-blur-xl fixed flex w-screen h-16 px-16 py-4 align-middle items-center justify-between z-10">
                
                <div className="w-12 h-14 flex flex-none space-x-6 items-center">
                    <Image
                        src={'images/logo.svg'}
                        width={64}
                        height={64}
                        alt="logo"
                    />
                    <div className="hidden sm:block text-[16px] font-thin tracking-wide space-x-4 ">
                        <a>
                            PROJECTS
                        </a>
                        <a>
                            ABOUT
                        </a>

                    </div>
                    
                  
                
                </div>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <Image 
                        src={'/images/hamburger.svg'}
                        width={64}
                        height={64}
                        alt="Collapse Icon"
                    />
                </button>
                <div className="hidden h-auto items-start jusitfy-between align-middle space-x-4 sm:block ">
                    <a className="text-[16px] font-thin tracking-wide">
                        <span>CONTACT ME</span>
                    </a>
                </div>
            </div>


        </nav>
        
        
    </>

    );
}