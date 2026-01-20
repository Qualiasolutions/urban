import ServicePage from '@/components/ServicePage';

export default function KidsPartiesPage() {
  return (
    <ServicePage
      title="Kids Party Catering"
      subtitle="Fun Food Kids Actually Love"
      description="Make your child's party unforgettable with food that kids get excited about. Our kids party catering combines fun, familiar favorites with quality ingredients that parents appreciate. We handle the food so you can focus on making memories."
      heroImage="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=2070&auto=format&fit=crop"
      features={[
        'Kid-approved menu options',
        'Mini sliders and finger foods',
        'Pizza station (fresh or delivered)',
        'Healthy fruit and veggie platters',
        'Fun dessert stations',
        'Themed cake options',
        'Juice boxes and healthy drinks',
        'Allergy-aware preparations',
      ]}
      additionalInfo={[
        'Birthday party packages available',
        'Themed food presentation',
        'Portion sizes for all ages',
        'Mess-free serving options',
        'Setup in kid-friendly spaces',
        'Special dietary needs accommodated',
      ]}
    />
  );
}
