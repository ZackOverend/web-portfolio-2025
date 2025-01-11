import Navbar from "@/components/navbar";
import Orbs from "@/components/orbs";
import Mountains from "@/components/mountains";

export default function Home() {
  return (
    <main className="w-screen h-[200vh] flex flex-col">
      <Navbar />
      <section className="relative w-screen h-[80vh] z-0">
        <Orbs />
        <Mountains />
      </section>
      <section className="bg-black h-[100vh] relative z-10 -mt-2"></section>
    </main>
  );
}