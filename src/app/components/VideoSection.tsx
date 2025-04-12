import { VideoItem } from "../data/videoData";

interface VideoSectionProps {
  video: VideoItem;
  isEven: boolean;
}

export default function VideoSection({ video, isEven }: VideoSectionProps) {
  return (
    <section 
      className="relative min-h-[85vh] w-full flex items-center parallax-section"
      style={{
        backgroundImage: `url(${video.imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
      }}
    >
      <div className="section-overlay">
        <div className="container mx-auto px-6 py-24 flex flex-col lg:flex-row items-center gap-12">
          <div className={`w-full lg:w-1/2 text-white ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
            <h2 className="medium-title mb-8 uppercase">{video.title}</h2>
            <p className="mb-6 text-lg md:text-xl">{video.description}</p>
            { video.technicalInfo && (
              <div className="bg-white/10 backdrop-blur-sm border-l-4 border-accent-color p-4 inline-block">
                <p className="text-sm font-mono opacity-90">{video.technicalInfo}</p>
              </div>
            )}
          </div>
          
          <div className={`w-full lg:w-1/2 aspect-video ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
            <div className="relative w-full h-0 pb-[56.25%] border border-white">
              <iframe 
                className="absolute top-0 left-0 w-full h-full"
                src={video.videoUrl} 
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 