import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Chefs | Urban Catering Nicosia',
  description: 'Meet the talented executive chefs behind Urban Catering. Masters of Japanese cuisine, BBQ, and brunch specialties in Nicosia, Cyprus.',
};

export default function ChefsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
