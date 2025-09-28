import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-bikes.jpg";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center justify-center overflow-hidden">
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
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Find Your Perfect
            <span className="block bg-gradient-to-r from-accent to-accent-hover bg-clip-text text-transparent">
              Two-Wheeler
            </span>
          </h1>
          
          <p className="text-lg md:text-xl mb-8 text-white/90 animate-slide-up">
            Discover thousands of bikes, scooters, and electric vehicles. 
            Compare models, check prices, and book test rides.
          </p>

          {/* Search Bar */}
          <div className="bg-white/95 backdrop-blur p-4 rounded-lg shadow-premium mb-8 animate-scale-in">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input 
                  placeholder="Search by brand, model, or type..." 
                  className="pl-10 h-12 text-foreground border-0 bg-white"
                />
              </div>
              <Button variant="hero" size="lg" className="h-12 px-8">
                Search
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up">
            <Button 
              variant="premium" 
              size="lg" 
              className="group"
              onClick={() => navigate('/auth')}
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary"
              onClick={() => navigate('/vehicles')}
            >
              Browse Vehicles
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 right-10 hidden lg:block animate-float">
        <div className="bg-white/10 backdrop-blur rounded-lg p-4 text-white">
          <div className="text-sm opacity-80">Starting from</div>
          <div className="text-2xl font-bold">₹45,000</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;