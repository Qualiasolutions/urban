import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Urban Catering Nicosia',
  description: 'Discover catering tips, event inspiration, recipes, and stories from Nicosia\'s premier catering service. Stay updated with Urban Catering.',
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
