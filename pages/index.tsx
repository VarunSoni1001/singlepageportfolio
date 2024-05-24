import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Intro } from "@/components/Intro";
import { Projects } from "@/components/Projects";
import { links } from "@/data/linksData";
import { projects } from "@/data/projectData";

export default function Home() {
  return (
    <main className="font-satoshi">
      <Header links={links} />
      <Intro />
      <About />
      <Projects projects={projects} />
      <Contact />
      <Footer />
    </main>
  );
}
