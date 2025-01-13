"use client"

import Navbar from "@/components/navbar";
import Orbs from "@/components/orbs";
import Mountains from "@/components/mountains";
import HeroText from "@/components/hero-text";
// import { motion } from "framer-motion";


export default function Home() {
  return (
    <main className="max-w-full h-[200vh] flex flex-col">
      <Navbar />
      <section className="relative h-[95vh] z-0 flex flex-col pt-16">
        <HeroText />
        <Orbs />
        <Mountains />
      </section>
      <section className="relative w-full h-[100vh] bg-black">
        

      </section>
    </main>
  );
}