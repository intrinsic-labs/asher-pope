import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import Image from "next/image";

interface ContactSectionProps {
  accentColor?: string;
}

export default function ContactSection({ accentColor = 'accent-color' }: ContactSectionProps) {
  return (
    <section id="contact" className="bg-black text-white py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32">
          <div>
            <h2 className="huge-title mb-12">
              LET&apos;S <span className={`text-${accentColor}`}>WORK</span> TOGETHER
            </h2>

            <p className="text-lg md:text-xl mb-8">
              Interested in collaborating on your next project? I&apos;m always looking for opportunities to work on things that matter. Reach out!
            </p>

            <div className="flex flex-row gap-8 justify-between">
              <a
                href="mailto:asher@asherpope.com"
                className="btn border-white hover:bg-white hover:text-black inline-block"
              >
                Get In Touch
              </a>

              <div>
                <div className="flex gap-4 mt-2">
                  <a href="https://www.instagram.com/rocketbro.py/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={`hover:text-${accentColor} text-2xl`}>
                    <FaInstagram />
                  </a>
                  <a href="https://x.com/var_rocketbro" target="_blank" rel="noopener noreferrer" aria-label="Twitter X" className={`hover:text-${accentColor} text-2xl`}>
                    <FaXTwitter />
                  </a>
                  <a href="https://www.youtube.com/@rocketbro.h" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className={`hover:text-${accentColor} text-2xl`}>
                    <FaYoutube />
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:hidden mt-12">
              <Image 
                src="/images/asher-pope.jpg" 
                alt="Contact Image" 
                width={600} 
                height={400} 
                className="w-full h-full object-cover" 
              />
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-4">Public Personal Data</h3>
              <ul className="grid grid-cols-2 gap-2">
                <li className="border-t border-background-rgb pt-2">LOCATION</li>
                <li className="border-t border-background-rgb pt-2">Fort Mill, SC</li>
                <li className="border-t border-background-rgb pt-2">EMAIL</li>
                <li className="border-t border-background-rgb pt-2">asher@asherpope.com</li>
                <li className="border-t border-background-rgb pt-2">SSN</li>
                <li className="border-t border-background-rgb pt-2">lol yeah right</li>
              </ul>
            </div>
          </div>

          <div className="hidden lg:flex lg:flex-col lg:justify-center">
            <Image 
              src="/images/asher-pope.jpg" 
              alt="Contact Image" 
              width={800} 
              height={600} 
              className="w-full h-full object-cover" 
            />
          </div>

        </div>
      </div>
    </section>
  );
} 