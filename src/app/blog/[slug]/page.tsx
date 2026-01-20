import { notFound } from 'next/navigation';
import BlogContent from '@/components/BlogContent';

const blogPosts: Record<string, {
  title: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  content: string[];
  quote?: string;
  tips?: string[];
}> = {
  'summer-soirees-limassol': {
    title: 'Summer Soirées: The Art of Outdoor Catering in Limassol',
    date: 'December 30, 2025',
    readTime: '5 min read',
    category: 'Seasonal',
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop',
    quote: 'Summer in Cyprus is not just a season—it is a celebration of life, laughter, and unforgettable flavors shared under the Mediterranean sky.',
    content: [
      'There is something magical about dining outdoors in Limassol during the summer months. The gentle sea breeze, the golden sunset painting the horizon, and the aroma of exquisite cuisine coming together to create moments that linger in memory long after the last plate is cleared.',
      'At Urban Catering, we have perfected the art of outdoor events. From intimate garden gatherings in the quieter neighborhoods of Germasogeia to grand beachside celebrations along the prestigious Dasoudi area, our team brings restaurant-quality experiences to any outdoor setting you envision.',
      'The secret lies in the details. Fresh, locally-sourced ingredients from Cyprus\'s fertile farms, seafood caught the very morning of your event, and our signature mezze spreads that showcase the best of Mediterranean flavors. We handle everything from elegant table settings to climate-controlled serving stations that keep food at the perfect temperature, even on the warmest July evening.',
      'Our summer menus feature light yet satisfying dishes designed for warm weather dining. Think grilled halloumi with fig jam, succulent lamb kleftiko slow-cooked to perfection, and refreshing desserts like honey-drizzled loukoumades that capture the essence of Cypriot culinary tradition.',
      'Whether you are planning a milestone birthday, an anniversary celebration, or simply gathering friends for an unforgettable evening under the stars, let us transform your outdoor space into a culinary destination that rivals the finest restaurants in Limassol.'
    ],
    tips: [
      'Book your summer event at least 3 months in advance for the best availability',
      'Consider sunset timing for your event—the golden hour makes for stunning photos',
      'We provide shade solutions and cooling systems to ensure guest comfort',
      'Seafood is at its peak from June to September—ask about our catch-of-the-day options'
    ]
  },
  'wedding-catering-limassol-2025': {
    title: 'Dream Weddings: Crafting Unforgettable Menus for Your Special Day',
    date: 'November 12, 2025',
    readTime: '7 min read',
    category: 'Weddings',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop',
    quote: 'A wedding menu is more than food—it is a story told through flavors, a memory created with every bite, and a celebration of love shared around the table.',
    content: [
      'Your wedding day deserves nothing less than extraordinary. At Urban Catering, we understand that the culinary experience is central to how your guests remember your celebration. That is why we approach each wedding as a unique canvas, painting your love story through carefully curated menus, impeccable presentation, and seamless service.',
      'Limassol offers some of the most spectacular wedding venues in Cyprus—from the historic elegance of Kolossi Castle gardens to the breathtaking vistas of Amathus coastal venues. Our team has had the privilege of catering at these iconic locations and many private estates, bringing our signature style of sophisticated dining to each setting.',
      'Our wedding catering journey begins with a personal consultation. We listen to your story, your vision, and your preferences. Perhaps you dream of a traditional Cypriot feast featuring soutzoukakia, kleftiko, and an elaborate mezze spread that brings families together. Or maybe you envision an international fusion menu that reflects your travels and shared experiences.',
      'The presentation is where artistry meets appetite. Our styling team works with your chosen color palette and theme to create tablescapes that complement the overall aesthetic. From champagne towers and dessert displays to late-night snack stations that keep the celebration going, every detail is thoughtfully considered.',
      'We have had the honor of being part of hundreds of weddings across Limassol, from intimate gatherings of 50 guests to grand celebrations of 500-plus. Each one has taught us something new about love, family, and the joy of bringing people together through exceptional food.'
    ],
    tips: [
      'Schedule a tasting session 6 months before your wedding to finalize your menu',
      'Consider dietary restrictions early—we excel at vegetarian, vegan, and gluten-free options',
      'Late-night snack stations are a trending addition that guests love',
      'Ask about our signature cocktail service to complement your menu'
    ]
  },
  'corporate-events-excellence': {
    title: 'Corporate Excellence: Elevating Business Events Through Culinary Innovation',
    date: 'October 11, 2025',
    readTime: '4 min read',
    category: 'Corporate',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2070&auto=format&fit=crop',
    quote: 'In the world of business, the food you serve speaks volumes about your standards and your respect for your guests.',
    content: [
      'Corporate events in Limassol have evolved significantly over the past decade. No longer just about networking or presentations, today\'s business gatherings are expected to deliver complete experiences that reflect professionalism, attention to detail, and sophisticated taste.',
      'At Urban Catering, we have partnered with leading companies across Cyprus—from multinational corporations with offices in the Limassol business district to local enterprises celebrating milestones. Our corporate catering services are designed to impress clients, motivate teams, and create the right atmosphere for productive interactions.',
      'Our corporate menus range from elegant working lunches featuring individually plated meals to grand gala dinners that celebrate company achievements. We understand the importance of timing in business events, ensuring seamless service that works around your agenda.',
      'What sets our corporate catering apart is the level of customization. We can incorporate your brand colors into the presentation, create signature cocktails named after your products, and design menu concepts that align with your company values.',
      'The feedback we consistently receive from corporate clients is that their guests remember the food long after the event ends. And in business, being remembered is everything.'
    ],
    tips: [
      'For working lunches, choose bite-sized foods that are easy to eat while networking',
      'Dietary labeling is essential for modern corporate events—we provide clear indicators',
      'Consider a mix of seating styles—cocktail for arrival, seated for main program',
      'Book at least 6 weeks ahead for major corporate functions during peak seasons'
    ]
  },
  'mediterranean-feast': {
    title: 'A Mediterranean Feast: Celebrating Cypriot Culinary Heritage',
    date: 'August 22, 2025',
    readTime: '6 min read',
    category: 'Cuisine',
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=2070&auto=format&fit=crop',
    quote: 'To understand Cyprus is to taste it—the sun-ripened olives, the fresh-caught seafood, the herbs that grow wild on our hillsides, all telling the story of our island.',
    content: [
      'Cypriot cuisine is a beautiful tapestry woven from Greek, Turkish, Middle Eastern, and Mediterranean influences. At Urban Catering, we are passionate about preserving and celebrating these culinary traditions while adding our contemporary touch.',
      'Our Mediterranean feasts begin with the mezze—a cornerstone of Cypriot dining culture. There is something communal and joyful about table after table of small plates arriving, each one inviting conversation, sharing, and discovery.',
      'Seafood plays a starring role in our menus, reflecting Limassol\'s coastal identity. We work directly with local fishermen to bring you the freshest catch—barbouni (red mullet), sea bream, and octopus simply grilled with lemon and olive oil.',
      'For main courses, our kleftiko is legendary. Slow-cooked for up to 12 hours in a traditional clay oven, the lamb falls from the bone, infused with the flavors of oregano, cinnamon, and bay leaves.',
      'No Mediterranean meal is complete without dessert. Our galaktoboureko, handmade with filo pastry and infused with orange blossom, provides the perfect sweet conclusion. Pair it with a Cypriot coffee or a glass of Commandaria.',
      'We take pride in sourcing ingredients from local producers—the olive oil from mountain villages, the halloumi from family farms, the vegetables that travel from field to kitchen within hours of harvest.'
    ],
    tips: [
      'A traditional mezze experience requires time—plan at least 3-4 hours for the full journey',
      'Pair your meal with local wines from the Limassol wine villages for authenticity',
      'Vegetarian mezze options are plentiful and equally satisfying',
      'Commandaria dessert wine is a must-try with traditional Cypriot sweets'
    ]
  },
  'private-dining-experience': {
    title: 'Private Dining: Introducing Our Exclusive At-Home Catering Service',
    date: 'June 17, 2025',
    readTime: '5 min read',
    category: 'Private Events',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop',
    quote: 'The best dinners are those where you can be fully present with your guests, knowing every detail has been taken care of with care and expertise.',
    content: [
      'There is a special intimacy to dining at home—the comfort of familiar surroundings, the freedom to linger at the table, the joy of hosting in your own space.',
      'Enter Urban Catering\'s private dining service. We bring the restaurant experience to your home, handling everything from menu planning to cleanup, leaving you free to enjoy the company of your guests.',
      'Our private dining service begins with understanding your vision. Are you celebrating an anniversary with an intimate dinner for two on your terrace overlooking the Limassol coastline?',
      'On the day of your event, our team arrives hours before your guests to set up. We bring our own equipment—professional chafing dishes, elegant serving platters, table linens, and even flowers if you wish.',
      'The menus for private dining are where our chefs truly shine. Freed from the constraints of high-volume service, they can focus on intricate preparations, beautiful plating, and personalized touches.',
      'After dinner, we handle everything—packing leftovers, cleaning the kitchen, and leaving your space immaculate. You wake to a clean home and wonderful memories.'
    ],
    tips: [
      'Private dining bookings should be made at least 2 weeks in advance',
      'We can accommodate dietary restrictions and allergies with alternative dishes',
      'Add a sommelier service for professional wine pairing with each course',
      'Leftover packing is included—enjoy your carefully crafted meals the next day too'
    ]
  }
};

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({ slug }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug];

  if (!post) {
    notFound();
  }

  return <BlogContent post={post} />;
}
