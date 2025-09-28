import { Heart, Fuel, Zap, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface VehicleCardProps {
  vehicle: {
    id: number;
    name: string;
    brand: string;
    price: string;
    image: string;
    type: string;
    fuelType: string;
    mileage: string;
  };
  viewMode?: string;
}

const VehicleCard = ({ vehicle, viewMode = "grid" }: VehicleCardProps) => {
  const isElectric = vehicle.fuelType === "Electric";
  const rating = 4.2;
  const reviews = 125;
  return (
    <Card className="group overflow-hidden border-0 shadow-card hover:shadow-hover transition-all duration-300 transform hover:scale-105 bg-gradient-card">
      <div className="relative">
        {/* Image */}
        <div className="aspect-[4/3] overflow-hidden bg-muted">
        <img 
            src={vehicle.image} 
            alt={`${vehicle.brand} ${vehicle.name}`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {isElectric && (
            <Badge variant="secondary" className="bg-success hover:bg-success/90 text-success-foreground">
              <Zap className="w-3 h-3 mr-1" />
              Electric
            </Badge>
          )}
        </div>

        {/* Favorite Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute top-3 right-3 bg-white/80 hover:bg-white text-foreground"
        >
          <Heart className="h-4 w-4" />
        </Button>

      </div>

      <CardContent className="p-4">
        {/* Brand & Name */}
        <div className="mb-2">
          <p className="text-sm text-muted-foreground font-medium">{vehicle.brand}</p>
          <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
            {vehicle.name}
          </h3>
        </div>

        {/* Rating & Reviews */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-warning text-warning" />
            <span className="text-sm font-medium">{rating}</span>
          </div>
          <span className="text-sm text-muted-foreground">({reviews} reviews)</span>
        </div>

        {/* Specs */}
        <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Fuel className="w-4 h-4" />
            <span>{vehicle.mileage}</span>
          </div>
          <Badge variant="secondary" className="capitalize">
            {vehicle.type}
          </Badge>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-2xl font-bold text-primary">{vehicle.price}</span>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex gap-2">
        <Button variant="outline" className="flex-1">
          View Details
        </Button>
        <Button variant="hero" className="flex-1 group">
          Book Test Ride
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default VehicleCard;