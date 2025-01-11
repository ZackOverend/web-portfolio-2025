"use client"

import Navbar from "@/components/navbar";
import Orbs from "@/components/orbs";
import Mountains from "@/components/mountains";
import HeroText from "@/components/hero-text";
// import { motion } from "framer-motion";


export default function Home() {
  return (
    <main className="w-screen h-[200vh] flex flex-col">
      <Navbar />
      <section className="relative w-screen h-[95vh] z-0">
        
        <HeroText />
        <Orbs />
        <Mountains />
      </section>
      <section className="bg-black -mt-2 h-[100vh] relative"></section>
    </main>
  );
}