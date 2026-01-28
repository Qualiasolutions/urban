import { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';

export const metadata: Metadata = {
  title: 'Outdoor Catering | Urban Catering Nicosia',
  description: 'Outdoor catering for garden parties, beach celebrations, and park events in Nicosia. Mobile kitchens, weather planning, and exceptional food at any location.',
};

export default function OutdoorCateringPage() {
  return (
    <ServicePage
      title="Outdoor Catering"
      subtitle="Events Under the Open Sky"
      description="From garden parties to beach celebrations, our outdoor catering service brings exceptional food to any location. We specialize in managing the unique challenges of outdoor events while maintaining the highest standards of food quality and service."
      heroImage="https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=2070&auto=format&fit=crop"
      features={[
        'Mobile kitchen setups',
        'Tent and marquee options',
        'Weather contingency planning',
        'Outdoor-friendly menu design',
        'Power and equipment solutions',
        'Beach, garden, and park venues',
        'Buffet or served options',
        'Cleanup and waste management',
      ]}
      additionalInfo={[
        'Experience with remote locations',
        'Temperature-controlled food storage',
        'Adaptable to uneven terrain',
        'Permit and regulation guidance',
        'Wind and heat protection',
        'Sustainable practices',
      ]}
    />
  );
}
