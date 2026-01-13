import Approach from "@/components/Approach";
import { ContactForm } from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full"></div>
      <FloatingNav navItems={navItems} />
      <section id="hero" className="w-full max-w-7xl">
        <Hero />
      </section>
      <section id="about" className="w-full max-w-7xl">
        <ErrorBoundary>
          <Grid />
        </ErrorBoundary>
      </section>
      <section id="projects" className="w-full max-w-7xl">
        <ErrorBoundary>
          <RecentProjects />
        </ErrorBoundary>
      </section>
      <section id="experience" className="w-full max-w-7xl">
        <ErrorBoundary>
          <Experience />
        </ErrorBoundary>
      </section>
      <section id="approach" className="w-full max-w-7xl">
        <ErrorBoundary>
          <Approach />
        </ErrorBoundary>
      </section>
      <section id="contact" className="w-full max-w-7xl">
        <ContactForm />
      </section>
      <Footer />
    </main>
  );
}
