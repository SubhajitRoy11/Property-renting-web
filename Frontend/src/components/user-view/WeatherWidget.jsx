

import React from 'react'
import { Sun, Cloud, CloudRain } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

const weatherIcons = {
  sunny: Sun,
  cloudy: Cloud,
  rainy: CloudRain,
}

export function WeatherWidget() {
  const [weather, setWeather] = React.useState({
    type: 'sunny',
    temperature: 18,
  })

  
  React.useEffect(() => {
    
    const timer = setTimeout(() => {
      setWeather({
        type: 'cloudy',
        temperature: 15,
      })
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const WeatherIcon = weatherIcons[weather.type]

  return (
    <Card className="absolute top-4 right-4 z-10">
      <CardContent className="flex items-center p-2">
        <WeatherIcon className="w-6 h-6 mr-2" />
        <span className="font-bold">{weather.temperature}°C</span>
      </CardContent>
    </Card>
  )
}