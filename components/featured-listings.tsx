"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bed, Bath, Square, MapPin } from "lucide-react";

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
            <Card key={listing.id} className="overflow-hidden group cursor-pointer">
              <div className="relative aspect-[16/9]">
                <Image
                  src={listing.image}
                  alt={listing.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  priority={listing.id === 1}
                />
                <Badge className="absolute top-4 right-4 z-10">{listing.type}</Badge>
              </div>
              
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {listing.title}
                </h3>
                <p className="text-2xl font-bold text-primary mb-4">{listing.price}</p>
                
                <div className="flex items-center text-muted-foreground mb-4">
                  <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
                  <span className="truncate">{listing.location}</span>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center">
                    <Bed className="h-4 w-4 mr-1" />
                    {listing.beds} beds
                  </div>
                  <div className="flex items-center">
                    <Bath className="h-4 w-4 mr-1" />
                    {listing.baths} baths
                  </div>
                  <div className="flex items-center">
                    <Square className="h-4 w-4 mr-1" />
                    {listing.sqft.toLocaleString()} sqft
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}