import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Catering Menus | Urban Catering Nicosia',
  description: 'Explore our catering menus - buffet, cocktail, and kids party options. Carefully crafted dishes for events of all sizes in Nicosia, Cyprus.',
};

export default function MenusLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
