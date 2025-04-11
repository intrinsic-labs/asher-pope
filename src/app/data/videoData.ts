export interface VideoItem {
  id: string;
  title: string;
  description: string;
  technicalInfo: string;
  videoUrl: string;
  imageUrl: string;
  videoType: 'youtube' | 'vimeo';
}

export const videoItems: VideoItem[] = [
  {
    id: 'video1',
    title: 'Project Title One',
    description: 'A short description about this video project and what it encompasses. This could include information about the concept, the client, or the creative direction.',
    technicalInfo: 'Shot on RED Digital Cinema | Directed by John Doe | Edited with Adobe Premiere Pro',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    imageUrl: '/images/test01.jpeg',
    videoType: 'youtube',
  },
  {
    id: 'video2',
    title: 'Project Title Two',
    description: 'Another compelling project with its own unique story and visual language. This description gives context to the viewer about what they\'re about to watch.',
    technicalInfo: 'Shot on ARRI Alexa | Color graded in DaVinci Resolve | Sound design by Jane Smith',
    videoUrl: 'https://player.vimeo.com/video/76979871',
    imageUrl: '/images/test02.jpeg',
    videoType: 'vimeo',
  },
  {
    id: 'video3',
    title: 'Project Title Three',
    description: 'The third showcase project with its own narrative and creative approach. This could be a commercial, music video, or documentary piece.',
    technicalInfo: 'Shot on Sony FX6 | 4K resolution | Custom LUTs | Original score by Audio Collective',
    videoUrl: 'https://www.youtube.com/embed/jNQXAC9IVRw',
    imageUrl: '/images/test03.jpeg',
    videoType: 'youtube',
  },
]; 