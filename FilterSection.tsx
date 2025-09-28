import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { X, Filter, SlidersHorizontal } from "lucide-react";

interface FilterSectionProps {
  selectedType: string;
  setSelectedType: (type: string) => void;
  selectedFuelType: string;
  setSelectedFuelType: (fuel: string) => void;
}

const FilterSection = ({ selectedType, setSelectedType, selectedFuelType, setSelectedFuelType }: FilterSectionProps) => {
  const [priceRange, setPriceRange] = useState([50000, 500000]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedFuelTypes, setSelectedFuelTypes] = useState<string[]>([]);

  const brands = ["Honda", "Yamaha", "TVS", "Hero", "Bajaj", "Royal Enfield", "KTM", "BMW"];
  const vehicleTypes = ["Bike", "Scooter", "Electric"];
  const fuelTypes = ["Petrol", "Electric", "CNG"];

  const handleBrandChange = (brand: string, checked: boolean) => {
    setSelectedBrands(prev => 
      checked ? [...prev, brand] : prev.filter(b => b !== brand)
    );
  };

  const handleTypeChange = (type: string, checked: boolean) => {
    setSelectedTypes(prev => 
      checked ? [...prev, type] : prev.filter(t => t !== type)
    );
  };

  const handleFuelTypeChange = (fuelType: string, checked: boolean) => {
    setSelectedFuelTypes(prev => 
      checked ? [...prev, fuelType] : prev.filter(f => f !== fuelType)
    );
  };

  const clearFilters = () => {
    setPriceRange([50000, 500000]);
    setSelectedBrands([]);
    setSelectedTypes([]);
    setSelectedFuelTypes([]);
  };

  const activeFiltersCount = selectedBrands.length + selectedTypes.length + selectedFuelTypes.length;

  return (
    <div className="space-y-6">
      {/* Filter Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-semibold">Filters</h3>
          {activeFiltersCount > 0 && (
            <Badge variant="secondary">{activeFiltersCount}</Badge>
          )}
        </div>
        {activeFiltersCount > 0 && (
          <Button variant="ghost" size="sm" onClick={clearFilters}>
            Clear All
            <X className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>

      {/* Sort By */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm">Sort By</CardTitle>
        </CardHeader>
        <CardContent>
          <Select defaultValue="popularity">
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="popularity">Popularity</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="rating">Rating</SelectItem>
              <SelectItem value="mileage">Mileage</SelectItem>
              <SelectItem value="latest">Latest Models</SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      {/* Price Range */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm">Price Range</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Slider
            value={priceRange}
            onValueChange={setPriceRange}
            max={1000000}
            min={25000}
            step={5000}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>₹{priceRange[0].toLocaleString()}</span>
            <span>₹{priceRange[1].toLocaleString()}</span>
          </div>
        </CardContent>
      </Card>

      {/* Vehicle Type */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm">Vehicle Type</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {vehicleTypes.map((type) => (
            <div key={type} className="flex items-center space-x-2">
              <Checkbox
                id={`type-${type}`}
                checked={selectedTypes.includes(type)}
                onCheckedChange={(checked) => handleTypeChange(type, checked as boolean)}
              />
              <Label htmlFor={`type-${type}`} className="text-sm font-normal cursor-pointer">
                {type}
              </Label>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Fuel Type */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm">Fuel Type</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {fuelTypes.map((fuel) => (
            <div key={fuel} className="flex items-center space-x-2">
              <Checkbox
                id={`fuel-${fuel}`}
                checked={selectedFuelTypes.includes(fuel)}
                onCheckedChange={(checked) => handleFuelTypeChange(fuel, checked as boolean)}
              />
              <Label htmlFor={`fuel-${fuel}`} className="text-sm font-normal cursor-pointer">
                {fuel}
              </Label>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Brands */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm">Brands</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {brands.map((brand) => (
            <div key={brand} className="flex items-center space-x-2">
              <Checkbox
                id={`brand-${brand}`}
                checked={selectedBrands.includes(brand)}
                onCheckedChange={(checked) => handleBrandChange(brand, checked as boolean)}
              />
              <Label htmlFor={`brand-${brand}`} className="text-sm font-normal cursor-pointer">
                {brand}
              </Label>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Apply Filters Button */}
      <Button variant="hero" className="w-full">
        <Filter className="mr-2 h-4 w-4" />
        Apply Filters
      </Button>
    </div>
  );
};

export default FilterSection;