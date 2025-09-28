import { Search, Menu, User, Heart, Bike } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/home" className="flex items-center space-x-2">
            <Bike className="h-8 w-8 text-primary" />
            <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Two-Wheeler Hub
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/home" className={`text-sm font-medium transition-colors ${location.pathname === '/home' ? 'text-primary' : 'text-foreground hover:text-primary'}`}>
              Home
            </Link>
            <Link to="/vehicles" className={`text-sm font-medium transition-colors ${location.pathname === '/vehicles' ? 'text-primary' : 'text-foreground hover:text-primary'}`}>
              Vehicles
            </Link>
            <Link to="/tools" className={`text-sm font-medium transition-colors ${location.pathname === '/tools' ? 'text-primary' : 'text-foreground hover:text-primary'}`}>
              Tools
            </Link>
            <Link to="/services" className={`text-sm font-medium transition-colors ${location.pathname === '/services' ? 'text-primary' : 'text-foreground hover:text-primary'}`}>
              Services
            </Link>
            <Link to="/auth" className="text-lg font-medium"><Button variant="accent" size="sm" className="hidden md:flex">
              Log-in
            </Button></Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden lg:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Search bikes, scooters..." 
                className="pl-10 bg-muted/50 border-muted focus:bg-background"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="accent" size="sm" className="hidden md:flex">
              Sell Your Bike
            </Button>
            
            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input placeholder="Search bikes, scooters..." className="pl-10" />
                  </div>
                  <nav className="flex flex-col space-y-4">
                    <Link to="/home" className="text-lg font-medium">Home</Link>
                    <Link to="/vehicles" className="text-lg font-medium">Vehicles</Link>
                    <Link to="/tools" className="text-lg font-medium">Tools</Link>
                    <Link to="/services" className="text-lg font-medium">Services</Link>

                  </nav>
                  <div className="pt-4 border-t">
                    <Button variant="accent" className="w-full mb-3">
                      Sell Your Bike
                    </Button>
                    <div className="flex space-x-2">
                      <Button variant="outline" className="flex-1">
                        <Heart className="h-4 w-4 mr-2" />
                        Favorites
                      </Button>
                      <Button variant="outline" className="flex-1">
                        <User className="h-4 w-4 mr-2" />
                        Profile
                      </Button>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;