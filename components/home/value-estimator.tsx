"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calculator } from "lucide-react";

export function ValueEstimator() {
  return (
    <section className="py-16 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              What's your home worth?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Get an instant estimate of your home's value based on recent sales in your neighborhood.
            </p>
            <div className="space-y-4">
              <Input placeholder="Enter your home address" />
              <Button className="w-full">
                <Calculator className="h-4 w-4 mr-2" />
                Get Estimate
              </Button>
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073"
              alt="Modern home interior"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}