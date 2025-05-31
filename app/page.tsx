import Approach from "@/components/Approach";
import { ContactForm } from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full"></div>
      <FloatingNav navItems={navItems} />
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <Grid />
      </section>
      <section id="projects">
        <RecentProjects />
      </section>
      <section id="approach">
        <Approach />
      </section>
      <section id="contact">
        <ContactForm />
      </section>
      <Footer />
    </main>
  );
}
