import { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';

export const metadata: Metadata = {
  title: 'BBQ Catering | Urban Catering Nicosia',
  description: 'Authentic flame-grilled BBQ catering in Nicosia. Premium meats, souvlaki, sheftalia, and all the classics for casual gatherings and summer parties.',
};

export default function BBQPage() {
  return (
    <ServicePage
      title="BBQ Catering"
      subtitle="Authentic Flame-Grilled Flavor"
      description="Nothing brings people together like the aroma of sizzling BBQ. Our BBQ catering service delivers authentic flame-grilled flavors with premium meats, fresh sides, and all the classics. Perfect for casual gatherings, summer parties, and events where good food and great times are the priority."
      heroImage="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2070&auto=format&fit=crop"
      features={[
        'Premium charcoal and gas grilling',
        'Selection of Cypriot and international BBQ styles',
        'Fresh salads and traditional sides',
        'Vegetarian grill options',
        'On-site BBQ station setup',
        'All equipment provided',
        'Professional grill masters',
        'Self-serve or full-service options',
      ]}
      additionalInfo={[
        'Souvlaki, sheftalia, and kebabs',
        'Homemade tzatziki and sauces',
        'Fresh pita and bread options',
        'Flexible portions for any group size',
        'Indoor and outdoor BBQ available',
      ]}
    />
  );
}
