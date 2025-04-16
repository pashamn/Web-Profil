import About from "@/components/About";
import {Nav}  from "../components/Nav";
import { HomeSection } from "@/components/HomeSection";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-white to-indigo-200 dark:from-zinc-950 dark:to-violet-950 h-full w-full">
      <div className="pb-10">
        <Nav/>
      </div>
      <div className="p-9">
        <HomeSection/>
      </div>
      <div className="p-8">
        <About/>
      </div>
    </div>
  );
}
