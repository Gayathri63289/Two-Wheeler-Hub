import { useState } from "react";
import Navbar from "@/components/Navbar";
import VehicleCard from "@/components/VehicleCard";
import FilterSection from "@/components/FilterSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Grid, List } from "lucide-react";
import featuredScooter from "@/assets/featured-scooter.jpg";

const vehicles = [
  {
    id: 1,
    name: "Honda CB Shine",
    price: "₹72,000",
    image: "/src/assets/featured-bike.jpg",
    type: "Motorcycle",
    fuelType: "Petrol",
    mileage: "65 km/l",
    brand: "Honda"
  },
  {
    id: 2,
    name: "TVS iQube Electric",
    price: "₹1,08,000",
    image: "/src/assets/featured-scooter.jpg",
    type: "Electric Scooter",
    fuelType: "Electric",
    mileage: "75 km/charge",
    brand: "TVS"
  },
  {
    id: 3,
    name: "Royal Enfield Classic 350",
    price: "₹1,84,000",
    image: "/src/assets/featured-bike.jpg",
    type: "Motorcycle",
    fuelType: "Petrol",
    mileage: "41 km/l",
    brand: "Royal Enfield"
  },
  {
    id: 4,
    name: "Bajaj Chetak Electric",
    price: "₹1,20,000",
    image: "/src/assets/featured-scooter.jpg",
    type: "Electric Scooter",
    fuelType: "Electric",
    mileage: "90 km/charge",
    brand: "Bajaj"
  },
  {
    id: 5,
    name: "Hero Splendor Plus",
    price: "₹68,000",
    image: "/src/assets/featured-bike.jpg",
    type: "Motorcycle",
    fuelType: "Petrol",
    mileage: "70 km/l",
    brand: "Hero"
  },
  {
    id: 6,
    name: "Ather 450X",
    price: "₹1,30,000",
    image: "/src/assets/featured-scooter.jpg",
    type: "Electric Scooter",
    fuelType: "Electric",
    mileage: "85 km/charge",
    brand: "Ather"
  }
];

const Vehicles = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedFuelType, setSelectedFuelType] = useState("All");
  const [viewMode, setViewMode] = useState("grid");

  const filteredVehicles = vehicles.filter(vehicle => {
    const matchesSearch = vehicle.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         vehicle.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === "All" || vehicle.type === selectedType;
    const matchesFuelType = selectedFuelType === "All" || vehicle.fuelType === selectedFuelType;
    
    return matchesSearch && matchesType && matchesFuelType;
  });

  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <img 
          src={featuredScooter} 
          alt="Featured scooter" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-background/95" />
      </div>

      <div className="relative z-10">
        <Navbar />
        
        <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Browse Vehicles</h1>
          
          {/* Search Bar */}
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search bikes, scooters, or brands..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <FilterSection
              selectedType={selectedType}
              setSelectedType={setSelectedType}
              selectedFuelType={selectedFuelType}
              setSelectedFuelType={setSelectedFuelType}
            />
          </div>

          {/* Vehicle Grid */}
          <div className="lg:w-3/4">
            <div className="mb-4 flex justify-between items-center">
              <p className="text-muted-foreground">
                Showing {filteredVehicles.length} vehicles
              </p>
              <Button variant="outline">
                Browse All Categories
              </Button>
            </div>
            
            <div className={viewMode === "grid" 
              ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6" 
              : "space-y-4"
            }>
              {filteredVehicles.map((vehicle) => (
                <VehicleCard
                  key={vehicle.id}
                  vehicle={vehicle}
                  viewMode={viewMode}
                />
              ))}
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Vehicles;