interface AboutSectionProps {
  accentColor?: string;
}

export default function AboutSection({ accentColor = 'accent-color' }: AboutSectionProps) {
  return (
    <section id="about" className="bg-background-rgb text-foreground-rgb py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="huge-title mb-16">
          ABOUT <span className={`text-${accentColor}`}>ME</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          <div>
            <p className="text-lg md:text-xl mb-8">
              I&apos;m a filmmaker and video production professional with over a decade of experience creating compelling visual narratives and building efficient production systems. With a background in cinematography, animation, and team leadership, I bring both creative vision and operational excellence to each project.
            </p>

            <p className="text-lg md:text-xl">
              My work spans from high-end explainer videos to music videos, from corporate pieces to documentary-style productions, focusing on authentic storytelling, visual excellence, and streamlined workflows. I&apos;ve led production teams and built streamlined systems that deliver consistent results.
            </p>
          </div>

          <div>
            <p className="text-lg md:text-xl mb-8">
              I approach each project with meticulous attention to detail, innovative processes, and a passion for creating best-in-class visual experiences. You&apos;re gonna love what you see — and the journey we take to get there.
            </p>

            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-4">Expertise</h3>
              <ul className="grid grid-cols-2 gap-2">
                <li className="border-t border-black pt-2">Production Management</li>
                <li className="border-t border-black pt-2">Workflow Optimization</li>
                <li className="border-t border-black pt-2">Animation</li>
                <li className="border-t border-black pt-2">Directing</li>
                <li className="border-t border-black pt-2">Editing</li>
                <li className="border-t border-black pt-2">Sound Design</li>
                <li className="border-t border-black pt-2">Motion Graphics</li>
                <li className="border-t border-black pt-2">3D Animation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 