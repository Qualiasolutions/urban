import { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';

export const metadata: Metadata = {
  title: 'Corporate Catering | Urban Catering Nicosia',
  description: 'Professional corporate catering in Nicosia for boardroom lunches, conferences, and company celebrations. Sophisticated menus that reflect your brand\'s excellence.',
};

export default function CorporateCateringPage() {
  return (
    <ServicePage
      title="Corporate Catering"
      subtitle="Impress Your Clients & Team"
      description="Elevate your corporate events with our professional catering services. From boardroom lunches to company-wide celebrations, we deliver sophisticated menus that reflect your brand's excellence. Our team understands the importance of timing, presentation, and seamless execution."
      heroImage="https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2070&auto=format&fit=crop"
      features={[
        'Executive breakfast and lunch packages',
        'Networking reception canapés',
        'Formal gala dinners',
        'Coffee break stations',
        'Branded catering options available',
        'Dietary restrictions accommodated',
        'Setup and cleanup services',
        'Flexible scheduling around meetings',
      ]}
      additionalInfo={[
        'Reliable punctuality guaranteed',
        'Professional presentation standards',
        'Invoice-based billing for companies',
        'Recurring corporate packages available',
        'Last-minute orders accepted',
        'Equipment provided if needed',
      ]}
    />
  );
}
