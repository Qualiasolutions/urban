import { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';

export const metadata: Metadata = {
  title: 'Wedding Catering | Urban Catering Nicosia',
  description: 'Create unforgettable wedding moments with our bespoke catering. Custom menus, elegant service, and attention to every detail for your special day in Nicosia.',
};

export default function WeddingsPage() {
  return (
    <ServicePage
      title="Wedding Catering"
      subtitle="Creating Unforgettable Moments"
      description="Your wedding day deserves nothing less than perfection. Our wedding catering service brings culinary excellence and impeccable service to make your special day truly magical. From intimate ceremonies to grand receptions, we craft bespoke menus that reflect your unique love story."
      heroImage="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop"
      features={[
        'Custom menu design tailored to your preferences',
        'Tastings prior to the big day',
        'Elegant table settings and décor',
        'Professional waitstaff attire to match your theme',
        'Special dietary requirements accommodated',
        'Wedding cake coordination available',
        'Bridal suite catering service',
        'Late-night snack options for guests',
      ]}
      additionalInfo={[
        '15+ years of wedding experience',
        'Dedicated wedding coordinator',
        'Setup and cleanup included',
        'Flexible serving styles (plated, buffet, family-style)',
        'Signature cocktail creation',
        'Kids menu available',
      ]}
    />
  );
}
