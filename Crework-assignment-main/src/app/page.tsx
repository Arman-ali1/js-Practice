"use client";

import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col">
      <Navbar />
      <Hero />
      <Footer />
    </main>
  );
}
