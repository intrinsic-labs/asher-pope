export interface VideoItem {
  id: string;
  title: string;
  description: string;
  technicalInfo?: string;
  videoUrl: string;
  imageUrl: string;
  videoType: 'youtube' | 'vimeo';
}

export const videoItems: VideoItem[] = [
  {
    id: 'video1',
    title: 'Cinematic Reel',
    description: 'The best moments from some of my work over the years, ranging from down & dirty shoots to proper studio sets to 3D animation.',
    videoUrl: 'https://www.youtube.com/embed/5OJGHAop7Dw?si=CGv4Z-QEYCY_QxVY',
    imageUrl: '/images/reel.png',
    videoType: 'youtube',
  },
  {
    id: 'video2',
    title: 'Divine Aseity',
    description: 'Created for the Christian Ministry Clearly Reformed, Divine Aseity gives a high-level explanation of what the Bible teaches about God’s self existence.',
    technicalInfo: '2 Camera shoot with set and lighting, titles in After Effects, 3D animation in Blender, original music.',
    videoUrl: 'https://www.youtube.com/embed/BdLSa-AYJZs?si=CGvaWe3EOxENIuPf',
    imageUrl: '/images/aseity-1.png',
    videoType: 'youtube',
  },
  {
    id: 'video3',
    title: 'Coram Deo Conference',
    description: 'A promo video for the Coram Deo Pastor\'s Conference in Charlotte, NC, showcasing the speakers for 2024.',
    technicalInfo: 'Single camera shoot with mood lighting, graphics in After Effects.',
    videoUrl: 'https://www.youtube.com/embed/JzjnOW2mMuE?si=Iuu7GH9ZHyoIMND3',
    imageUrl: '/images/cdpc-2.png',
    videoType: 'youtube',
  },
  {
    id: 'video4',
    title: 'Future Crib Live',
    description: 'Future Crib, a band out of Nashville, TN, released their album “Friends” in 2019. In honor of the release, they performed a show at the High Watt in downown Nashville. This down \'n\' dirty video aims to capture the experience.',
    technicalInfo: 'Single camera shoot, audio captured with stereo condenser recorder.',
    videoUrl: 'https://www.youtube.com/embed/Y8wxeOQALSU?si=Fsmcj2vlJlNabTU-',
    imageUrl: '/images/future-crib-2.png',
    videoType: 'youtube',
  },
  {
    id: 'video5',
    title: 'Exodus Men Promo',
    description: 'Exodus Church asked for a video to promote their new Men’s Ministry study structure. We shot several testimonials in Charlotte, NC, and got B roll on their retreat in Asheville, NC.',
    technicalInfo: 'Single camera shoot with lighting, roving B roll shoot outdoors, original music composition.',
    videoUrl: 'https://www.youtube.com/embed/myxPOmO2phs?si=3H6xni4Gi0EdYigL',
    imageUrl: '/images/exodus.png',
    videoType: 'youtube',
  },
  {
    id: 'video6',
    title: 'Divine Infinity',
    description: 'Another video created for Clearly Reformed, Divine Infinity gives a high-level explanation of what the Bible teaches about God as an infinite being.',
    technicalInfo: '2 Camera shoot with set and lighting, titles & 2D animation in After Effects, original music direction.',
    videoUrl: 'https://www.youtube.com/embed/xOnueS0135g?si=yHyPkO0tONr0e3aT',
    imageUrl: '/images/infinity-2.png',
    videoType: 'youtube',
  },
]; 