import About from "../components/About";
import Features from "../components/Feature";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Image from "next/image";



export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <About />
    </main>
  );
}
