import Image from "next/image";
import Hero from "@/app/components/Hero";
import Skills from "@/app/components/skills";
import Projects from "./components/projects";
import Hireme from "./components/Hireme";
import Footer from "./components/footer";
import About from "./components/about";
import TextQuote from "./components/textQuote";
import LayoutGridDemo from "./components/LayoutGrid";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Skills />
      <TextQuote />
      <Projects />
      <LayoutGridDemo />

      <Hireme />
      <Footer />
    </main>
  );
}
