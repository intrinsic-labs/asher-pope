export default function ContactSection() {
  return (
    <section id="contact" className="bg-black text-white py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32">
          <div>
            <h2 className="huge-title mb-12">
              LET'S <span className="text-[var(--accent-color)]">WORK</span> TOGETHER
            </h2>
            
            <p className="text-lg md:text-xl mb-8">
              Interested in collaborating on your next project? I'm always looking for new and exciting opportunities to create impactful visual content.
            </p>
            
            <a 
              href="mailto:your.email@example.com" 
              className="btn border-white hover:bg-white hover:text-black inline-block"
            >
              Get In Touch
            </a>
          </div>
          
          <div className="flex flex-col justify-center">
            <div className="bg-white/5 p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6">Contact Details</h3>
              
              <div className="grid gap-4">
                <div>
                  <p className="text-sm opacity-70">Email</p>
                  <p className="text-lg">hello@asherpope.com</p>
                </div>
                
                <div>
                  <p className="text-sm opacity-70">Location</p>
                  <p className="text-lg">Los Angeles, CA</p>
                </div>
                
                <div className="mt-4">
                  <p className="text-sm opacity-70">Social</p>
                  <div className="flex gap-4 mt-2">
                    <a href="#" className="hover:text-[var(--accent-color)]">Instagram</a>
                    <a href="#" className="hover:text-[var(--accent-color)]">Vimeo</a>
                    <a href="#" className="hover:text-[var(--accent-color)]">LinkedIn</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 