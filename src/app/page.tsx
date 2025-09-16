import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";

export default function Home() {
  return (
    <div>
      <Hero />
      <div id="about">
        <Skills />
        <Experience />
      </div>
    </div>
  );
}
