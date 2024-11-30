"use client";

import { PropertyCard } from "@/components/home/property-card";

const FEATURED_LISTINGS = [
  {
    id: 1,
    title: "Modern Downtown Apartment",
    price: "$599,000",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070",
    beds: 3,
    baths: 2,
    sqft: 1800,
    location: "Downtown, Seattle",
    type: "For Sale"
  },
  {
    id: 2,
    title: "Luxury Waterfront Villa",
    price: "$1,299,000",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075",
    beds: 4,
    baths: 3.5,
    sqft: 3200,
    location: "Waterfront, Miami",
    type: "For Sale"
  },
  {
    id: 3,
    title: "Cozy Suburban Home",
    price: "$2,800/mo",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070",
    beds: 2,
    baths: 2,
    sqft: 1200,
    location: "Suburbs, Austin",
    type: "For Rent"
  }
];

export function FeaturedListings() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">Featured Listings</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_LISTINGS.map((listing) => (
            <PropertyCard
              key={listing.id}
              {...listing}
              priority={listing.id === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}