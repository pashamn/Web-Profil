import About from "@/components/About";
import {Nav}  from "../components/Nav";
import { HomeSection } from "@/components/HomeSection";
import Project from "../components/Project";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-white via-indigo-200 to-indigo-200 dark:from-zinc-950 dark:via-violet-950 dark:to-violet-950 h-full w-full">
      <div className="pb-10">
        <Nav/>
      </div>
      <div className="p-9 mb-35 mt-8">
        <HomeSection/>
      </div>
      <div id="about" className="p-8">
        <About/>
      </div>
      <div id="project" className="p-5 mt-18">
        <Project/>
      </div>
      <div id="contact" className="mt-15">
        <ContactSection/>
      </div>
      <Footer/>
    </div>
  );
}
