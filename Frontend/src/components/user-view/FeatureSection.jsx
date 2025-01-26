

import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export function FeatureSection({
  title,
  description,
  imageSrc,
  imageAlt,
  reverse = false,
}) {
  return (
    <Card className="my-12 overflow-hidden rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300">
      <div
        className={`flex flex-col md:flex-row ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        
        <div className="flex-1">
          <img
            src={imageSrc}
            alt={imageAlt}
            width={800}
            height={600}
            className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-90"
          />
        </div>

        
        <CardContent className="flex-1 p-8 flex flex-col justify-center bg-gray-50">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
            {title}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {description}
          </p>
        </CardContent>
      </div>
    </Card>
  );
}
