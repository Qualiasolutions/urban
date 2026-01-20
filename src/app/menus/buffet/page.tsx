import MenuSlideshow from '@/components/MenuSlideshow';

const buffetImages = [
  'https://i.ibb.co/jv3hy5Xv/357-97464614.png',
  'https://i.ibb.co/r56by4K/2.png',
  'https://i.ibb.co/0tQ9HhH/3.png',
  'https://i.ibb.co/QN9w5wx/4.png',
  'https://i.ibb.co/kqNDSJB/5.png',
  'https://i.ibb.co/7YWn90G/6.png',
  'https://i.ibb.co/WWVTWvF/7.png',
  'https://i.ibb.co/bgkvx8H/8.png',
];

export default function BuffetMenuPage() {
  return (
    <MenuSlideshow
      title="Buffet & Breakfast Menu"
      description="Complete dining solutions for large groups and morning events. Featuring Cypriot specialties, Mediterranean favorites, and international cuisine."
      images={buffetImages}
      pdfUrl="https://drive.google.com/uc?export=download&id=1u1lETM3FgVSlnU84_VGUGvlO8j63Y3mU"
      downloadLabel="Download Buffet Menu PDF"
    />
  );
}
