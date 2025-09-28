import Navbar from "@/components/Navbar";
import EMICalculator from "@/components/EMICalculator";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, Fuel, Calendar, MapPin, TrendingUp, Zap } from "lucide-react";
import modernAutomotiveBg from "@/assets/modern-automotive-bg.jpg";

const upcomingLaunches = [
  {
    name: "Honda CB300R",
    launchDate: "March 2024",
    expectedPrice: "₹2,50,000",
    type: "Sport Bike"
  },
  {
    name: "TVS Apache RTR 200",
    launchDate: "April 2024", 
    expectedPrice: "₹1,35,000",
    type: "Naked Bike"
  },
  {
    name: "Ola S1 Pro Gen 3",
    launchDate: "May 2024",
    expectedPrice: "₹1,40,000", 
    type: "Electric Scooter"
  }
];

const showrooms = [
  {
    name: "Premium Motors",
    location: "Mumbai, Maharashtra",
    brands: ["Honda", "Yamaha", "TVS"],
    rating: 4.8
  },
  {
    name: "Speed Zone",
    location: "Delhi, NCR",
    brands: ["Royal Enfield", "Bajaj", "Hero"],
    rating: 4.6
  },
  {
    name: "EV Hub",
    location: "Bangalore, Karnataka", 
    brands: ["Ather", "Ola", "TVS"],
    rating: 4.9
  }
];

const Tools = () => {
  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <img 
          src={modernAutomotiveBg} 
          alt="Modern automotive background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-background/95" />
      </div>

      <div className="relative z-10">
        <Navbar />
        
        <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Tools & Resources</h1>
          <p className="text-muted-foreground">
            Smart tools to help you make informed decisions
          </p>
        </div>

        {/* Calculators Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Financial Calculators</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <EMICalculator />
            
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Fuel className="h-6 w-6 text-accent" />
                  Fuel Cost Calculator
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Calculate your monthly fuel expenses and compare with electric alternatives.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-primary/5 rounded-lg text-center">
                    <div className="text-xl font-bold text-primary">₹3,500</div>
                    <div className="text-sm text-muted-foreground">Monthly Petrol</div>
                  </div>
                  <div className="p-4 bg-accent/5 rounded-lg text-center">
                    <div className="text-xl font-bold text-accent">₹800</div>
                    <div className="text-sm text-muted-foreground">Monthly Electric</div>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  <Calculator className="mr-2 h-4 w-4" />
                  Calculate Fuel Costs
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Upcoming Launches */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Upcoming Launches</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingLaunches.map((launch, index) => (
              <Card key={index} className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    {launch.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Launch Date:</span>
                      <span className="font-semibold">{launch.launchDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Expected Price:</span>
                      <span className="font-semibold text-primary">{launch.expectedPrice}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Type:</span>
                      <span className="font-semibold">{launch.type}</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    <TrendingUp className="mr-2 h-4 w-4" />
                    Get Price Alert
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Showrooms */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Explore Showrooms</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {showrooms.map((showroom, index) => (
              <Card key={index} className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-accent" />
                    {showroom.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <span className="text-muted-foreground">Location: </span>
                      <span className="font-semibold">{showroom.location}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Brands: </span>
                      <span className="font-semibold">{showroom.brands.join(", ")}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-muted-foreground">Rating:</span>
                      <div className="flex items-center gap-1">
                        <span className="font-semibold">{showroom.rating}</span>
                        <Zap className="h-4 w-4 text-yellow-500" />
                      </div>
                    </div>
                  </div>
                  <Button className="w-full mt-4">
                    Visit Showroom
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        </div>
      </div>
    </div>
  );
};

export default Tools;