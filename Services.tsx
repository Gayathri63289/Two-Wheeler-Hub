import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Car, Upload, Star, Heart, Bell } from "lucide-react";
import featuredBike from "@/assets/featured-bike.jpg";

const Services = () => {
  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <img 
          src={featuredBike} 
          alt="Featured bike" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-background/95" />
      </div>

      <div className="relative z-10">
        <Navbar />
        
        <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Services</h1>
          <p className="text-muted-foreground">
            Book test rides, sell your vehicle, and manage your preferences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Test Ride Booking */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-6 w-6 text-primary" />
                Book Test Ride
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Enter your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="Enter phone number" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Vehicle Model</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select vehicle" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="honda-shine">Honda CB Shine</SelectItem>
                      <SelectItem value="tvs-iqube">TVS iQube Electric</SelectItem>
                      <SelectItem value="re-classic">Royal Enfield Classic 350</SelectItem>
                      <SelectItem value="bajaj-chetak">Bajaj Chetak Electric</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Preferred Date</Label>
                  <Input type="date" />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Preferred Location</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select showroom" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mumbai">Premium Motors - Mumbai</SelectItem>
                    <SelectItem value="delhi">Speed Zone - Delhi</SelectItem>
                    <SelectItem value="bangalore">EV Hub - Bangalore</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button className="w-full">
                Book Test Ride
              </Button>
            </CardContent>
          </Card>

          {/* Sell Used Bike */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Car className="h-6 w-6 text-accent" />
                Sell Your Bike
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Vehicle Brand</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select brand" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="honda">Honda</SelectItem>
                      <SelectItem value="hero">Hero</SelectItem>
                      <SelectItem value="bajaj">Bajaj</SelectItem>
                      <SelectItem value="tvs">TVS</SelectItem>
                      <SelectItem value="yamaha">Yamaha</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="model">Model</Label>
                  <Input id="model" placeholder="Enter model name" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="year">Year of Purchase</Label>
                  <Input id="year" type="number" placeholder="2020" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="km">KM Driven</Label>
                  <Input id="km" type="number" placeholder="25000" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="expected-price">Expected Price (₹)</Label>
                <Input id="expected-price" type="number" placeholder="50000" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Vehicle Description</Label>
                <Textarea 
                  id="description" 
                  placeholder="Describe the condition, maintenance history, etc."
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label>Upload Photos</Label>
                <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                  <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-muted-foreground">Click to upload vehicle photos</p>
                </div>
              </div>

              <Button variant="accent" className="w-full">
                List My Vehicle
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* User Account Features */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Account Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="shadow-card text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Favorites</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Save your favorite vehicles and compare them later
                </p>
                <Button variant="outline" className="w-full">
                  View Favorites
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-card text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Star className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Reviews & Ratings</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Share your experience and read authentic reviews
                </p>
                <Button variant="outline" className="w-full">
                  Write Review
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-card text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Bell className="h-6 w-6 text-success" />
                </div>
                <CardTitle>Price Alerts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Get notified when your favorite vehicle price drops
                </p>
                <Button variant="outline" className="w-full">
                  Set Alerts
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
        </div>
      </div>
    </div>
  );
};

export default Services;