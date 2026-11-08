import Benefits from "../components/Benefits";
import Contact from "../components/Contact";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Process from "../components/Process";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import { fiverrProfileUrl } from "../lib/site-config";

export default function Home() {
  return (
    <>
      <Navbar fiverrUrl={fiverrProfileUrl} />
      <main>
        <Hero fiverrUrl={fiverrProfileUrl} />
        <Services fiverrUrl={fiverrProfileUrl} />
        <Benefits />
        <Projects />
        <Process />
        <Testimonials />
        <FAQ fiverrUrl={fiverrProfileUrl} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
