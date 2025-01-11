import Image from "next/image";

export default function Mountains() {
    return (
      <div className="absolute bottom-0 w-full">
        <Image 
            src={"/shapes/mountains.svg"}
            width={100}
            height={100}
            alt="Mountains"
            className="w-screen"
        />
      </div>
    );
  }