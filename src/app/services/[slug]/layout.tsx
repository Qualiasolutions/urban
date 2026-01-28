import { Metadata } from 'next';
import { services } from '@/lib/services';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    return {
      title: 'Service Not Found | Urban Catering',
    };
  }

  return {
    title: `${service.title} | Urban Catering Nicosia`,
    description: `${service.longDescription.slice(0, 155)}...`,
    openGraph: {
      title: `${service.title} | Urban Catering`,
      description: service.description,
    },
  };
}

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
