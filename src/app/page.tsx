import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import VideoSection from "./components/VideoSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import ParallaxEffect from "./components/ParallaxEffect";
import SmoothScroll from "./components/SmoothScroll";
import { videoItems } from "./data/videoData";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <ParallaxEffect />
      <SmoothScroll />
      
      <main>
        <HeroSection />
        
        <div id="work">
          {videoItems.map((video, index) => (
            <VideoSection 
              key={video.id} 
              video={video} 
              isEven={index % 2 === 0} 
            />
          ))}
        </div>
        
        <AboutSection />
        <ContactSection />
      </main>
      
      <footer className="bg-white text-black py-6">
        <div className="container mx-auto px-6 flex justify-between items-center text-sm">
          <p>© {new Date().getFullYear()} Asher Pope. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-[var(--accent-color)]">Privacy</a>
            <a href="#" className="hover:text-[var(--accent-color)]">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
