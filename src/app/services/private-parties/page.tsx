import ServicePage from '@/components/ServicePage';

export default function PrivatePartiesPage() {
  return (
    <ServicePage
      title="Private Party Catering"
      subtitle="Celebrate Your Way"
      description="Whether it's a milestone birthday, anniversary, or any reason to gather with friends and family, our private party catering makes your event seamless and memorable. We handle everything from food to service so you can be a guest at your own party."
      heroImage="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2070&auto=format&fit=crop"
      features={[
        'Custom menu for any occasion',
        'Elegant plated service or casual buffet',
        'Signature drinks and bar service',
        'Stylized presentation matching your theme',
        'Staff dressed to match your vision',
        'Cake cutting and service',
        'Late-night snack options',
        'Full cleanup included',
      ]}
      additionalInfo={[
        'Anniversary and milestone specialists',
        'Surprise party coordination',
        'Venue flexibility',
        'Guest count: 10 to 500+',
        'Day-of coordination support',
        'Vendor partnerships available',
      ]}
    />
  );
}
