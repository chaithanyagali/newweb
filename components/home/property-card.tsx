"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bed, Bath, Square, MapPin } from "lucide-react";

interface PropertyCardProps {
  id: number;
  title: string;
  price: string;
  image: string;
  beds: number;
  baths: number;
  sqft: number;
  location: string;
  type: string;
  priority?: boolean;
}

export function PropertyCard({
  title,
  price,
  image,
  beds,
  baths,
  sqft,
  location,
  type,
  priority = false,
}: PropertyCardProps) {
  return (
    <Card className="overflow-hidden group cursor-pointer">
      <div className="relative aspect-[16/9]">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          priority={priority}
        />
        <Badge className="absolute top-4 right-4 z-10">{type}</Badge>
      </div>
      
      <CardContent className="p-4">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-2xl font-bold text-primary mb-4">{price}</p>
        
        <div className="flex items-center text-muted-foreground mb-4">
          <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
          <span className="truncate">{location}</span>
        </div>
        
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center">
            <Bed className="h-4 w-4 mr-1" />
            {beds} beds
          </div>
          <div className="flex items-center">
            <Bath className="h-4 w-4 mr-1" />
            {baths} baths
          </div>
          <div className="flex items-center">
            <Square className="h-4 w-4 mr-1" />
            {sqft.toLocaleString()} sqft
          </div>
        </div>
      </CardContent>
    </Card>
  );
}