import VehicleCard from "./VehicleCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import featuredBike from "@/assets/featured-bike.jpg";
import featuredScooter from "@/assets/featured-scooter.jpg";

const FeaturedSection = () => {
  const featuredVehicles = [
    {
      id: 1,
      name: "R15 V4",
      brand: "Yamaha",
      price: "₹1,85,000",
      image: featuredBike,
      type: "Motorcycle",
      fuelType: "Petrol",
      mileage: "40 km/l"
    },
    {
      id: 2,
      name: "iQube Electric",
      brand: "TVS",
      price: "₹1,15,000",
      image: featuredScooter,
      type: "Electric Scooter",
      fuelType: "Electric",
      mileage: "75 km/charge"
    },
    {
      id: 3,
      name: "Classic 350",
      brand: "Royal Enfield",
      price: "₹1,95,000",
      image: featuredBike,
      type: "Motorcycle",
      fuelType: "Petrol",
      mileage: "35 km/l"
    },
    {
      id: 4,
      name: "Activa 6G",
      brand: "Honda",
      price: "₹75,000",
      image: featuredScooter,
      type: "Scooter",
      fuelType: "Petrol",
      mileage: "60 km/l"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Featured Vehicles
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked selection of the most popular and highly-rated two-wheelers
          </p>
        </div>

        {/* Vehicle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredVehicles.map((vehicle, index) => (
            <div key={vehicle.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <VehicleCard vehicle={vehicle} />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button variant="premium" size="lg" className="group">
            View All Vehicles
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;