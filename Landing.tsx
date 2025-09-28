import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Bike } from "lucide-react";
import heroImage from "@/assets/hero-bikes.jpg";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Premium motorcycles and scooters" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Bike className="h-12 w-12 sm:h-16 sm:w-16" />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">Two-Wheeler Hub</h1>
        </div>
        <p className="text-lg sm:text-xl mb-12 text-white/90 max-w-2xl mx-auto">
          Your ultimate destination for bikes, scooters, and electric vehicles
        </p>
        <Button 
          variant="premium" 
          size="lg" 
          onClick={() => navigate('/vehicles')}
          className="text-lg px-8 py-4 animate-scale-in"
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default Landing;