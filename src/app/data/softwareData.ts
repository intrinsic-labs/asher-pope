export interface SoftwareItem {
    id: string;
    title: string;
    description: string;
    technicalInfo?: string;
    videoUrl?: string;
    imageUrl: string;
    webLink?: string;
    buttonText?: string;
    videoType: 'youtube' | 'vimeo';
  }
  
  export const softwareItems: SoftwareItem[] = [
    {
      id: 'software1',
      title: 'Latent Spaces',
      description: `THE PROBLEM
Current AI interfaces hide the vast possibilities behind each prompt, forcing users to repeatedly refine queries to discover alternative perspectives—wasting time and concealing the model's true nature.

THE SOLUTION
Using the Latent Spaces Loom interface, users can generate, visualize, and branch multiple AI responses simultaneously, revealing the hidden multiverse of possible continuations. This approach delivers measurable advantages:

• Increases productivity by 10x through parallel exploration of multiple response paths
• Provides unprecedented insights into model behavior that improve prompt engineering skills
• Builds intuition for AI reasoning patterns through visual representation of branching possibilities
`,
      technicalInfo: 'iOS: Swift, SwiftUI, SwiftData | Web: Next.js, Tailwind CSS, React',
      videoUrl: 'https://www.youtube.com/embed/BPMDpIpcVl4?si=qm4rnnG02U_LD-Bu',
      imageUrl: '/images/ls.png',
      webLink: 'https://latentspaces.app',
      buttonText: 'Explore The Project',
      videoType: 'youtube',
    },
    {
      id: 'software2',
      title: 'Global Missions Kiosk',
      description: `THE PROBLEM
Many large churches support dozens of missionaries around the world, but it is often difficult for congregants to see the impact of their support in tangible ways or stay up to date on the work being done.

THE SOLUTION
Churches can use Global Missions Kiosk to display an interactive visual map of their missionaries and the work they are doing, along with up-to-date information about individual needs and prayer requests.

• Puts faces to the names of supported workers, building connections between congregation and missionaries
• Self-sustaining, client-managed backend with zero maintenance required
• Deployable on any Android device, including tablets, kiosks, or networked PCs
`,
      technicalInfo: 'Software: Kotlin, Jetpack Compose, Airtable | Hardware: Elo Touchscreen & Android Backpack',
      videoUrl: 'https://www.youtube.com/embed/uzjRlD20ibY?si=YN_ww8HgrWBReVBV',
      imageUrl: '/images/kiosk-2.png',
      webLink: '#contact',
      buttonText: 'Contact For Details',
      videoType: 'youtube',
    },
    {
      id: 'video3',
      title: 'Blackthorn Geomatics',
      description: `THE PROBLEM
Blackthorn Geomatics needed an effective, clear, and professional website to showcase their work and services.

THE SOLUTION
Built using modern web technologies, the resulting site features a shot-on-site hero video, clear presentation of services and case studies, and a dedicated Capabilities page to help prospects understand the full range of services offered.

• 
• 
• 
`,
      technicalInfo: 'Web: Next.js, React, Tailwind CSS, Vercel',
      // videoUrl: 'https://www.youtube.com/embed/JzjnOW2mMuE?si=Iuu7GH9ZHyoIMND3',
      imageUrl: '/images/blackthorn.jpg',
      webLink: 'https://blackthorngeomatics.com',
      videoType: 'youtube',
    },
    {
      id: 'video4',
      title: 'Clearly Reformed',
      description: `THE PROBLEM
Clearly Reformed has a responsive website, but wanted to deliver a more tailored experience for their audience on the go, enabling easy consumption of articles, podcasts, and videos.

THE SOLUTION
I developed a native mobile app for iOS and Android that dynamically pulls from Clearly Reformed's API. The app features a clean, modern design and a seamless user experience, with features such as offline caching, bookmarks and notes, and a dedicated podcast player.

• 
• 
• 
`,
      technicalInfo: 'iOS: Swift, SwiftUI, SwiftData | Android: Kotlin, Jetpack Compose, Room',
      // videoUrl: 'https://www.youtube.com/embed/Y8wxeOQALSU?si=Fsmcj2vlJlNabTU-',
      imageUrl: '/images/cr.jpg',
      videoType: 'youtube',
    },
    {
      id: 'video5',
      title: 'Record Machine',
      description: `THE PROBLEM
Musicians have a lot to keep track of when preparing for a release - various mixes and masters, lyrics, voice memos, artwork, and more. These pieces of the puzzle are often scattered across various platforms and devices, making it difficult and time-consuming to stay productive.

THE SOLUTION
Record Machine is an iOS app that streamlines the process of organizing and previewing a release. It allows users to keep track of everything in one place, and features a built-in music player that mimics popular streaming platforms.

• 
• 
• 
`,
      technicalInfo: 'iOS: Swift, SwiftUI, SwiftData',
      // videoUrl: 'https://www.youtube.com/embed/myxPOmO2phs?si=3H6xni4Gi0EdYigL',
      imageUrl: '/images/exodus.png',
      videoType: 'youtube',
    },
    {
      id: 'video6',
      title: 'Check Right In',
      description: `THE PROBLEM
A local church's New Members class needed a better way to track attendance than paper records, with class sizes of 80+ people. Accurate tracking was critical since members needed to attend a minimum number of sessions to join the church.

THE SOLUTION
I created Check Right In, an app for checking large numbers of class members in via a network of tablets at the entrance. This streamlined solution saved a lot of time, reduced headaches, and created a sustainable way to manage and track attendance.

• 
• 
• 
`,
      technicalInfo: 'iPadOS: Swift, SwiftUI, Airtable',
      // videoUrl: 'https://www.youtube.com/embed/xOnueS0135g?si=yHyPkO0tONr0e3aT',
      imageUrl: '/images/infinity-2.png',
      videoType: 'youtube',
    },
  ]; 