import Image from "next/image";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main className="bg-white bg-paper h-[200vh] w-screen">
      {/* Background Image */}
      <Navbar/>
      {/* Hero Section */}
      {/* <section className="w-screen grid grid-cols-1 grid-rows-2 grid-flow-row md:grid-rows-1 gap-4 h-auto md:grid-cols-12 md:gap-4 md:h-[75vh] items-center">
        <div className="bg-black w-2">

        </div>
        <div className="bg-white md:col-start-2 row-start-1 md:col-span-5 flex flex-col justify-center items-center md:items-start">
        <Image
            src={"/shapes/drawn-line-down.svg"}
            width={200}
            height={0}
            alt="Vertical Drawn Line"
            className="absolute"
          />
          <div className="bg-black absolute w-1 h-1/4">
            
          </div>
          <h1 className="p-8 text-[2.1rem] md:text-[1.75rem] lg:text-[2.4rem] xl:text-[3rem]">👋 Hey, I’m <span>ZACK OVEREND</span></h1>
          <div className="xl:text-[2rem]">
            <h2 >Full Stack Developer</h2>
            <h2>Mobile Computing Specialist</h2>
          </div>
          

        </div>
        <div className="border-gray-800 border-2 row-start-2 md:row-auto md:col-start-8 md:col-span-4 flex flex-col justify-center items-center">
          <Image 
            src={"/shapes/vector-1.svg"}
            width={600}
            height={0}
            alt="Hero Shape"
            className="max-w-[30vw] min-w-[12rem]"
          />
        </div>

        <div className="bg-white border-gray-800 col-span-4">
          
        </div>
      </section> */}
    </main>
  );
}
