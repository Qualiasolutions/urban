import ServicePage from '@/components/ServicePage';

export default function PrivateChefPage() {
  return (
    <ServicePage
      title="Private Chef Service"
      subtitle="Fine Dining in Your Home"
      description="Experience restaurant-quality dining in the comfort of your own home. Our private chef service creates bespoke menus, shops for fresh ingredients, and prepares an unforgettable meal right in your kitchen. Perfect for intimate dinners, celebrations, or a special night in."
      heroImage="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070&auto=format&fit=crop"
      features={[
        'Personalized menu creation',
        'Market-fresh ingredient shopping',
        'Professional table service',
        'Multi-course dining experience',
        'Wine pairing recommendations',
        'Dietary requirements expertly handled',
        'Kitchen cleanup after service',
        'Interactive cooking demonstrations',
      ]}
      additionalInfo={[
        'Michelin-trained chefs available',
        'International cuisine specialties',
        'Romantic dinner packages',
        'Small group celebrations',
        'Weekly meal prep options',
        'Customizable service levels',
      ]}
    />
  );
}
