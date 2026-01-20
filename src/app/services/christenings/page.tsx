import ServicePage from '@/components/ServicePage';

export default function ChristeningsPage() {
  return (
    <ServicePage
      title="Christening Catering"
      subtitle="Graceful Celebrations"
      description="Celebrate this blessed occasion with catering that honors tradition and creates a warm, welcoming atmosphere for family and friends. Our christening catering combines elegant presentation with comforting favorites that bring everyone together."
      heroImage="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=2070&auto=format&fit=crop"
      features={[
        'Traditional Cypriot specialties',
        'Elegant finger foods and canapés',
        'Family-style platters',
        'Sweet treats and dessert display',
        'Coffee and tea service',
        'Kids menu for little guests',
        'Soft drinks and refreshments',
        'Blessing-specific coordination',
      ]}
      additionalInfo={[
        'Religious customs respected',
        'Conservative portion options',
        'Take-home boxes for guests',
        'Custom cake options',
        'Floral arrangement coordination',
        'Family-friendly service style',
      ]}
    />
  );
}
