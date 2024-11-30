"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Home, MapPin } from "lucide-react";

const PROPERTY_TYPES = [
  {
    icon: Home,
    title: "Houses",
    description: "Find single-family homes in your area"
  },
  {
    icon: Building2,
    title: "Apartments",
    description: "Discover available apartments for rent"
  },
  {
    icon: MapPin,
    title: "New Construction",
    description: "Explore newly built properties"
  }
];

export function SearchProperties() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">Search by Property Type</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROPERTY_TYPES.map((type) => (
            <Card key={type.title}>
              <CardContent className="p-6">
                <type.icon className="h-8 w-8 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{type.title}</h3>
                <p className="text-muted-foreground mb-4">{type.description}</p>
                <Button variant="outline" className="w-full">
                  Browse {type.title}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}