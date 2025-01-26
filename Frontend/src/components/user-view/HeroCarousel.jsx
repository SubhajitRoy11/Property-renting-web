

import React, { useState, useEffect } from 'react'
import bannerOne from "../../assets/wall1.jpeg"
import bannerTwo from "../../assets/wal2.jpg"
import bannerThree from "../../assets/wal3.jpg"
import { Card, CardContent } from "@/components/ui/card"

const images = [bannerOne,bannerTwo,bannerThree]

export function HeroCarousel() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length)
    }, 3000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full h-[600px]">
      {images.map((src, index) => (
        <Image
          key={src}
          src={src }
          alt={`Nordic Home ${index + 1}`}
          fill
          className={`object-cover transition-opacity duration-1000 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
          priority={index === 0}
        />
      ))}
      <Card className="absolute inset-0 bg-black/50 flex items-center justify-center">
        <CardContent>
          <h1 className="text-4xl md:text-6xl text-white font-bold text-center">
            Discover Nordic Serenity
          </h1>
        </CardContent>
      </Card>
    </div>
  )
}