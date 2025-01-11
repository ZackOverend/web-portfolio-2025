import Image from "next/image";

export default function Mountains() {
  return (
    <div className="relative w-full h-auto">
      {/* Back Mountain */}
      <div className="absolute bottom-0 w-full -z-10 pointer-events-none">
        <Image
          src="/shapes/mountains-back.svg"
          alt="Mountains Back"
          layout="responsive"
          width={1440}
          height={320}
          className="w-screen"
          priority
        />
      </div>

      {/* Front Mountain */}
      <div className="absolute bottom-0 w-full z-0 pointer-events-none">
        <Image
          src="/shapes/mountains-front.svg"
          alt="Mountains Front"
          layout="responsive"
          width={1440}
          height={320}
          className="w-screen"
          priority
        />
      </div>
    </div>
  );
}