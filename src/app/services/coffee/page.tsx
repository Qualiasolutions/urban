import { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';

export const metadata: Metadata = {
  title: 'Coffee Service | Urban Catering Nicosia',
  description: 'Professional barista coffee service for events in Nicosia. Specialty coffee, espresso drinks, and premium teas for corporate events and conferences.',
};

export default function CoffeePage() {
  return (
    <ServicePage
      title="Coffee Service"
      subtitle="Premium Barista Experience"
      description="Elevate your morning event or afternoon break with our professional coffee service. Our skilled baristas serve specialty coffee, espresso drinks, and premium teas that keep your guests energized and impressed. Perfect for corporate events, conferences, and morning receptions."
      heroImage="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop"
      features={[
        'Professional espresso machines',
        'Skilled baristas at your service',
        'Specialty coffee beans (freshly ground)',
        'Espresso, cappuccino, latte options',
        'Premium tea selection',
        'Hot chocolate and seasonal specials',
        'Plant-based milk alternatives',
        'Custom-branded cups available',
      ]}
      additionalInfo={[
        'Self-service station option',
        'Cold brew and iced coffee',
        'Biscuit and cookie pairings',
        'Flexible service durations',
        'Setup and breakdown included',
        'Multiple machine options for large events',
      ]}
    />
  );
}
