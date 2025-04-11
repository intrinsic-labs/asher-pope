export default function HeroSection() {
  return (
    <section className="min-h-[65vh] md:min-h-[85vh] xl:min-h-[95vh] bg-white text-black flex items-center relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 py-24 md:py-32">
        <div className="max-w-5xl">
          <h1 className="huge-title mb-6">
            VISUAL <span className="text-[var(--accent-color)]">STORYTELLING</span> FOR THE DIGITAL AGE
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mb-8">
            Crafting compelling narratives through the lens. Directing, filming, and editing content that moves audiences and delivers results.
          </p>
          <a href="#work" className="btn border-black hover:bg-black hover:text-white">
            View Work
          </a>
        </div>
      </div>
      <div className="absolute -right-24 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[var(--accent-color)]/20 blur-3xl"></div>
    </section>
  );
} 