import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Old service URLs → current /services/ routes
      { source: '/weddings', destination: '/services/weddings', permanent: true },
      { source: '/coffee', destination: '/services/coffee', permanent: true },
      { source: '/christenings', destination: '/services/christenings', permanent: true },
      { source: '/corporate-caterings', destination: '/services/corporate-catering', permanent: true },
      { source: '/kids-parties', destination: '/services/kids-parties', permanent: true },
      { source: '/outdoor-caterings', destination: '/services/outdoor-catering', permanent: true },
      { source: '/private-parties', destination: '/services/private-parties', permanent: true },
      { source: '/cocktail-bar', destination: '/services/cocktail-bar', permanent: true },
      { source: '/candy-bar', destination: '/services/candy-bar', permanent: true },
      { source: '/equipment-rentals', destination: '/services/equipment-rentals', permanent: true },
      { source: '/bbq', destination: '/services/bbq', permanent: true },
      { source: '/chefs-private-services', destination: '/services/private-chef', permanent: true },

      // Old menu URLs → current /menus/ routes
      { source: '/menu-cocktail-finger-food', destination: '/menus/cocktail', permanent: true },
      { source: '/kids-menu', destination: '/menus/kids', permanent: true },
      { source: '/buffet-menu', destination: '/menus/buffet', permanent: true },
      { source: '/dinner-menu', destination: '/menus', permanent: true },

      // Old page URLs → current routes
      { source: '/our-chefs', destination: '/chefs', permanent: true },
      { source: '/company-profile', destination: '/company', permanent: true },
      { source: '/terms-of-service', destination: '/company', permanent: true },
      { source: '/privacy-policy', destination: '/company', permanent: true },
    ];
  },
};

export default nextConfig;
