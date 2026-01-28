import { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';

export const metadata: Metadata = {
  title: 'Candy Bar Service | Urban Catering Nicosia',
  description: 'Beautifully styled candy bar service for weddings and parties in Nicosia. Premium candies, custom color themes, and elegant displays for sweet celebrations.',
};

export default function CandyBarPage() {
  return (
    <ServicePage
      title="Candy Bar Service"
      subtitle="Sweet Memories for Your Event"
      description="Add a touch of whimsy and delight to your celebration with our candy bar service. Perfect for weddings, kids' parties, and any event that calls for something sweet. Our beautifully styled candy bars are both a treat and a stunning decorative element."
      heroImage="https://images.unsplash.com/photo-1589496933738-f5c27bc47e39?q=80&w=2070&auto=format&fit=crop"
      features={[
        'Wide selection of premium candies',
        'Custom color-themed displays',
        'Elegant glass jars and scoops',
        'Personalized favor bags and boxes',
        'Chocolates, gummies, hard candies',
        'Dietary-friendly options available',
        'Setup and styling included',
        'Refill service during events',
      ]}
      additionalInfo={[
        'Wedding monogram options',
        'Themed decorations included',
        'Take-home containers for guests',
        'Seasonal candy selections',
        'Locally-sourced sweets available',
        'Allergen-free alternatives',
      ]}
    />
  );
}
