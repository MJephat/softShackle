"use client";
import Services from "@/components/Services";
import About from "../components/About";
import Features from "../components/Feature";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import RecentWorks from "@/components/RecentWorks";
import Footer from "@/components/Footer";



export default function Home() {
  return (
    <>
          <Navbar />

    <main>
      <section id="home">
        <Hero />
      </section>

      <Features />

      <section id="about">
        <About />
      </section>

      <section id="services">
        <Services />
      </section>

      <RecentWorks />

      <section id="contact">
        <Footer />
      </section>
    </main>
    </>
  );
}