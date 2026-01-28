import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Company Profile | Urban Catering Nicosia',
  description: 'Learn about Urban Catering - 15+ years transforming Nicosia venues into extraordinary gastronomic experiences. Our story, values, and commitment to excellence.',
};

export default function CompanyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
