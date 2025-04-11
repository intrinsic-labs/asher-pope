import localFont from 'next/font/local';

export const neueMontrealFont = localFont({
  src: [
    {
      path: '../../public/fonts/neue-montreal/NeueMontreal-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/neue-montreal/NeueMontreal-Italic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/neue-montreal/NeueMontreal-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/neue-montreal/NeueMontreal-MediumItalic.otf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../../public/fonts/neue-montreal/NeueMontreal-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/neue-montreal/NeueMontreal-BoldItalic.otf',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../../public/fonts/neue-montreal/NeueMontreal-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/neue-montreal/NeueMontreal-LightItalic.otf',
      weight: '300',
      style: 'italic',
    },
  ],
  variable: '--font-neue-montreal',
}); 