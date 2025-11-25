export default function VideoHeroSection() {
  return (
    <section className="min-h-[65vh] md:min-h-[85vh] xl:min-h-[95vh] bg-background-rgb text-foreground-rgb flex items-center relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 py-24 md:py-32">
        <div className="max-w-5xl">
          <h1 className="huge-title mb-6">
            YOUR <span className="text-accent-color">VISION</span> CRAFTED WITH PRECISION
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mb-8">
            <b>Excellence in every frame.</b> Filmmaking that moves audiences with exceptional storytelling, visual craftsmanship, and super happy clients.
          </p>
          <a href="#video" className="btn border-black bg-white hover:bg-black hover:text-white">
            View Work
          </a>
        </div>
      </div>
      <div className="absolute -right-24 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[var(--accent-color)]/20 blur-3xl"></div>
    </section>
  );
} 