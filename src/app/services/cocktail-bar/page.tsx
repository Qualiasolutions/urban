import { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';

export const metadata: Metadata = {
  title: 'Cocktail Bar Service | Urban Catering Nicosia',
  description: 'Professional mixology and cocktail bar service for events in Nicosia. Expert bartenders, signature drinks, and elegant bar setups for weddings and parties.',
};

export default function CocktailBarPage() {
  return (
    <ServicePage
      title="Cocktail Bar Service"
      subtitle="Premium Mixology Experience"
      description="Transform your event with our professional cocktail bar service. Our skilled bartenders craft signature drinks and classic cocktails that impress guests and elevate any occasion. From elegant weddings to lively parties, we bring the bar experience to your venue."
      heroImage="https://images.unsplash.com/photo-1575023782549-62ca0d244b39?q=80&w=2070&auto=format&fit=crop"
      features={[
        'Professional mixologists and bartenders',
        'Custom signature cocktail creation',
        'Premium spirits and fresh ingredients',
        'Elegant bar setup with glassware',
        'Non-alcoholic mocktail options',
        'Bar menu design and printing',
        'Responsible service practices',
        'Flexible bar packages available',
      ]}
      additionalInfo={[
        'Theme-based cocktail menus',
        'Seasonal ingredient sourcing',
        'Flair bartending available',
        'Portable bar units included',
        'Ice and bar accessories provided',
        'Minimum guest requirements apply',
      ]}
    />
  );
}
