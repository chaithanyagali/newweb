"use client";

import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, HelpCircle, TrendingUp } from "lucide-react";

const RESOURCES = [
  {
    icon: BookOpen,
    title: "Buying Guide",
    description: "Learn about the home buying process and what to expect"
  },
  {
    icon: TrendingUp,
    title: "Market Trends",
    description: "Stay updated with the latest real estate market trends"
  },
  {
    icon: HelpCircle,
    title: "Help Center",
    description: "Find answers to common questions about buying and selling"
  }
];

export function Resources() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">Resources & Guides</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {RESOURCES.map((resource) => (
            <Card key={resource.title} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <resource.icon className="h-8 w-8 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                <p className="text-muted-foreground">{resource.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}