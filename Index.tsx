import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-bikes.jpg";

const Index = () => {
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
      <div className="relative z-10 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          Find Your Perfect
          <span className="block bg-gradient-to-r from-accent to-accent-hover bg-clip-text text-transparent">
            Two-Wheeler
          </span>
        </h1>
        
        <p className="text-lg md:text-xl mb-12 text-white/90 max-w-2xl mx-auto animate-slide-up">
          Discover thousands of bikes, scooters, and electric vehicles. 
          Compare models, check prices, and book test rides.
        </p>

        <Button 
          variant="premium" 
          size="lg" 
          onClick={() => navigate('/auth')}
          className="text-lg px-8 py-4 group animate-scale-in"
        >
          Get Started
          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>

      {/* Floating Price Element */}
      <div className="absolute bottom-10 right-10 hidden lg:block animate-float">
        <div className="bg-white/10 backdrop-blur rounded-lg p-4 text-white">
          <div className="text-sm opacity-80">Starting from</div>
          <div className="text-2xl font-bold">₹45,000</div>
        </div>
      </div>
    </div>
  );
};

export default Index;
