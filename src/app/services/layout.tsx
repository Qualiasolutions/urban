import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Catering Services | Urban Catering Nicosia',
  description: 'Comprehensive catering services in Nicosia - weddings, corporate events, BBQ, cocktail bars, private chef, and more. Excellence in every detail.',
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
