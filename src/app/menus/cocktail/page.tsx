import { Metadata } from 'next';
import MenuSlideshow from '@/components/MenuSlideshow';

export const metadata: Metadata = {
  title: 'Cocktail & Finger Food Menu | Urban Catering Nicosia',
  description: 'Premium canapés and artisanal cocktails for standing receptions, corporate events, and sophisticated gatherings in Nicosia, Cyprus.',
};

const cocktailImages = [
  'https://i.ibb.co/Nnghr8WH/357-97464614-2.png',
  'https://i.ibb.co/gw707C5/2.png',
  'https://i.ibb.co/6sxDhRd/3.png',
  'https://i.ibb.co/NFSNWSz/4.png',
];

export default function CocktailMenuPage() {
  return (
    <MenuSlideshow
      title="Cocktail & Finger Food Menu"
      description="Elegant bites perfect for standing receptions, corporate events, and sophisticated gatherings. Premium canapés and artisanal cocktails."
      images={cocktailImages}
      pdfUrl="https://drive.google.com/uc?export=download&id=1FzpvyX3N8UJw8K-8uFdomzUqT3hixTLC"
      downloadLabel="Download Cocktail Menu PDF"
    />
  );
}
