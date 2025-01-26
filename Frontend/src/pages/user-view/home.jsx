


import { Button } from "@/components/ui/button";
import bannerOne from "../../assets/re4.jpg";
import bannerTwo from "../../assets/re1.jpg";
import bannerThree from "../../assets/wal3.jpg";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import pic7 from "../../assets/pic7.jpg";
import pic6 from "../../assets/pic6.jpg";
import re2 from "../../assets/re2.jpg";

import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { FeatureSection } from "@/components/user-view/FeatureSection";
import { WeatherWidget } from "@/components/user-view/WeatherWidget";
import { Footer } from "@/components/user-view/Footer";

export default function UserHome() {
  const slides = [bannerOne, bannerTwo, bannerThree];
  const [currentSlide, setCurrentSlide] = useState(0);
  const { roomList, roomDetails } = useSelector((state) => state.userListing);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      
      <div className="relative w-full h-[600px] overflow-hidden">
        {slides.map((slide, index) => (
          <img
            src={slide}
            key={index}
            className={`${
              index === currentSlide ? "opacity-100" : "opacity-0"
            } absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000`}
          />
        ))}
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
          <div className="text-center text-white space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold">
              Discover Nordic Serenity
            </h1>
            <p className="text-lg md:text-xl">
              Find your perfect getaway in the heart of Scandinavia.
            </p>
            <Button
              className="bg-primary text-white px-6 py-3 text-lg rounded-lg shadow-lg hover:bg-primary-dark"
              onClick={() => navigate("/user/contract")}
            >
              Book Now
            </Button>
          </div>
        </div>
      </div>

      
      <div className="relative py-8 bg-gray-100">
        <WeatherWidget />
      </div>

      
      <div className="container mx-auto px-4 py-12">
        <FeatureSection
          title="Scandinavian Simplicity"
          description="Experience the essence of Nordic design in our carefully curated homes. Clean lines, natural materials, and functional beauty create a serene atmosphere for your stay."
          imageSrc={pic7}
          imageAlt="Nordic Interior showcasing minimalist design"
        />
        <FeatureSection
          title="Nature at Your Doorstep"
          description="Immerse yourself in the breathtaking Nordic landscapes. From fjords to forests, our homes offer unparalleled access to the raw beauty of Scandinavian nature."
          imageSrc={pic6}
          imageAlt="Scenic Nordic landscape with a cozy cabin"
          reverse
        />
        <FeatureSection
          title="Hygge Living"
          description="Embrace the Danish concept of 'hygge' - a mood of coziness and comfortable conviviality. Our homes are designed to foster warmth and well-being during your stay."
          imageSrc={re2}
          imageAlt="Cozy Nordic living room with a fireplace"
        />
      </div>

      
      <Footer />
    </div>
  );
}
