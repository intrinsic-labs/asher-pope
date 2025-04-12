'use client';

import { VideoItem } from "../data/videoData";
import { useState, useCallback } from "react";

interface VideoSectionProps {
  video: VideoItem;
  isEven: boolean;
}

export default function VideoSection({ video, isEven }: VideoSectionProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Function to modify the video URL with parameters
  const getVideoUrl = useCallback(() => {
    // Add YouTube parameters to hide controls until playing
    // modestbranding=1: minimal YouTube branding
    // showinfo=0: hides video title and uploader info
    // controls=0: hides controls initially (they appear when playing)
    // rel=0: prevents related videos from showing
    
    let videoUrl = video.videoUrl;
    const separator = videoUrl.includes('?') ? '&' : '?';
    
    // Only show minimal UI before playing
    if (!isPlaying) {
      return `${videoUrl}${separator}modestbranding=1&showinfo=0&controls=0&rel=0`;
    }
    
    // When playing, add parameters for standard controls
    return `${videoUrl}${separator}modestbranding=1&rel=0`;
  }, [video.videoUrl, isPlaying]);
  
  // Handle play event
  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <section 
      className="relative min-h-[85vh] w-full flex items-center parallax-section overflow-hidden"
    >
      {/* Parallax Background */}
      <div 
        className="parallax-background absolute inset-0 w-full h-full" 
        style={{
          backgroundImage: `url(${video.imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          zIndex: -1,
          height: '120%', // Extra height to allow for movement
          top: '-90%',    // Offset to center the background
        }}
      ></div>
      
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
            <div className="relative w-full h-0 pb-[56.25%]">
              <iframe 
                className="absolute top-0 left-0 w-full h-full"
                src={getVideoUrl()} 
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                onPlay={handlePlay}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 