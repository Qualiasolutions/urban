import MenuSlideshow from '@/components/MenuSlideshow';

const kidsImages = [
  'https://i.ibb.co/zh7XRk2M/357-97464614-1.png',
  'https://i.ibb.co/VpPCRqb/2.png',
];

export default function KidsMenuPage() {
  return (
    <MenuSlideshow
      title="Kids Party Menu"
      description="Fun, delicious, and healthy options that kids love. Perfect for birthdays, celebrations, and special occasions."
      images={kidsImages}
      pdfUrl="https://drive.google.com/uc?export=download&id=1CgkgU_ZM3dLySRoc01Cx9ftz7CdECwQU"
      downloadLabel="Download Kids Menu PDF"
    />
  );
}
