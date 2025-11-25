import Header from "../components/Header";
import SoftwareHeroSection from "../components/SoftwareHeroSection";
import SoftwareSection from "../components/SoftwareSection";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import ParallaxEffect from "../components/ParallaxEffect";
import { softwareItems } from "../data/softwareData";

export default function SoftwarePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <ParallaxEffect />
      <main>
        <SoftwareHeroSection />
        <div id="software">
          {softwareItems.map((software, index) => (
            <SoftwareSection 
              key={software.id} 
              software={software} 
              isEven={index % 2 === 0} 
            />
          ))}
        </div>
        <AboutSection accentColor="software-accent" />
        <ContactSection accentColor="software-accent" />
      </main>
      <footer className="bg-white text-black py-6">
        <div className="container mx-auto px-6 flex justify-between items-center text-sm">
          <p>© {new Date().getFullYear()} Asher Pope. All rights reserved.</p>
          <div className="flex gap-4">
            <p>Website made with ❤️ by <a href="https://www.intrinsiclabs.co" className="hover:text-[var(--accent-color)]">Intrinsic Labs LLC</a></p>
            {/* <a href="#" className="hover:text-[var(--accent-color)]">Privacy</a>
            <a href="#" className="hover:text-[var(--accent-color)]">Terms</a> */}
          </div>
        </div>
      </footer>
    </div>
  );
} 