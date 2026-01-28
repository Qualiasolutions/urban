import { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';

export const metadata: Metadata = {
  title: 'Equipment Rentals | Urban Catering Nicosia',
  description: 'Premium event equipment rentals in Nicosia. Tables, chairs, glassware, linens, tents, and more for events of any size. Delivery and setup included.',
};

export default function EquipmentRentalsPage() {
  return (
    <ServicePage
      title="Equipment Rentals"
      subtitle="Everything You Need for Your Event"
      description="Complete your event setup with our premium equipment rental service. From tables and chairs to glassware and linens, we provide everything needed to create the perfect atmosphere. High-quality, clean, and well-maintained equipment for events of any size."
      heroImage="https://images.unsplash.com/photo-1478146059778-26a4c17e0c00?q=80&w=2070&auto=format&fit=crop"
      features={[
        'Tables (round, rectangular, cocktail)',
        'Chairs (Chiavari, banquet, lounge)',
        'Fine dinnerware and glassware',
        'Premium linens and table runners',
        'Serveware and chafing dishes',
        'Tents and canopy options',
        'Dance floors and staging',
        'Lighting and decorative elements',
      ]}
      additionalInfo={[
        'Delivery, setup, and pickup',
        'Professional cleaning guaranteed',
        'Flexible rental periods',
        'Volume discounts available',
        'Consultation on quantities needed',
        'Emergency replacement service',
      ]}
    />
  );
}
