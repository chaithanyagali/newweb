"use client";

import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface PropertyTypeCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function PropertyTypeCard({ icon: Icon, title, description }: PropertyTypeCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <Icon className="h-8 w-8 mb-4" />
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <Button variant="outline" className="w-full">
          Browse {title}
        </Button>
      </CardContent>
    </Card>
  );
}