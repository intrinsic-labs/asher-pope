'use client';

import { SoftwareItem } from "../data/softwareData";
import { useState, useCallback } from "react";

interface SoftwareSectionProps {
  software: SoftwareItem;
  isEven: boolean;
}

export default function SoftwareSection({ software, isEven }: SoftwareSectionProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Function to modify the video URL with parameters
  const getVideoUrl = useCallback(() => {
    // Add YouTube parameters to hide controls until playing
    // modestbranding=1: minimal YouTube branding
    // showinfo=0: hides video title and uploader info
    // controls=0: hides controls initially (they appear when playing)
    // rel=0: prevents related videos from showing
    
    const videoUrl = software.videoUrl;
    const separator = videoUrl?.includes('?') ? '&' : '?';
    
    // Only show minimal UI before playing
    if (!isPlaying) {
      return `${videoUrl}${separator}modestbranding=1&rel=0`;
    }
    
    // When playing, add parameters for standard controls
    return `${videoUrl}${separator}modestbranding=1&rel=0`;
  }, [software.videoUrl, isPlaying]);
  
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
          backgroundImage: `url(${software.imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          zIndex: -1,
          height: '120%', // Extra height to allow for movement
          top: '-90%',    // Offset to center the background
        }}
      ></div>
      
      <div className="section-overlay">
        <div className="container mx-auto px-6 py-24 flex flex-col lg:flex-row items-center gap-12">
          <div className={`w-full lg:w-1/2 text-white ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
            <h2 className="medium-title mb-8 uppercase">{software.title}</h2>
            <p className="mb-6 text-lg md:text-xl">
              {software.description.split('\n').map((line, idx) => (
                <span key={idx}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
            { software.webLink && (
              <div className="mb-6">
                <a href={software.webLink} target="_blank" rel="noopener noreferrer" className="btn border-black hover:bg-white hover:text-black">
                  {software.buttonText || 'View Website'}
                </a>
              </div>
            )}
          </div>
          
          <div className={`w-full lg:w-1/2 flex flex-col ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
            {software.videoUrl && (
              <div className="aspect-video w-full">
                <div className="relative w-full h-0 pb-[56.25%]">
                  <iframe 
                    className="absolute top-0 left-0 w-full h-full"
                    src={getVideoUrl()} 
                    title={software.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    onPlay={handlePlay}
                  ></iframe>
                </div>
              </div>
            )}
            
            {software.technicalInfo && (
              <div className="bg-white/10 backdrop-blur-sm border-l-4 border-software-accent p-4 mt-4">
                <p className="text-sm font-mono opacity-90 text-white">{software.technicalInfo}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
} 