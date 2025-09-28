import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Calculator, TrendingUp, IndianRupee } from "lucide-react";

const EMICalculator = () => {
  const [vehiclePrice, setVehiclePrice] = useState(150000);
  const [downPayment, setDownPayment] = useState([20000]);
  const [loanTenure, setLoanTenure] = useState([24]);
  const [interestRate, setInterestRate] = useState([12]);

  const calculateEMI = () => {
    const principal = vehiclePrice - downPayment[0];
    const monthlyRate = interestRate[0] / 100 / 12;
    const numPayments = loanTenure[0];
    
    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / 
                (Math.pow(1 + monthlyRate, numPayments) - 1);
    
    return {
      emi: Math.round(emi),
      totalAmount: Math.round(emi * numPayments),
      totalInterest: Math.round((emi * numPayments) - principal),
      principal: principal
    };
  };

  const result = calculateEMI();

  return (
    <Card className="w-full shadow-card">
      <CardHeader className="text-center pb-4">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Calculator className="h-6 w-6 text-primary" />
          <CardTitle className="text-xl">EMI Calculator</CardTitle>
        </div>
        <p className="text-sm text-muted-foreground">
          Calculate your monthly installment and plan your purchase
        </p>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Vehicle Price */}
        <div className="space-y-2">
          <Label htmlFor="vehicle-price">Vehicle Price (₹)</Label>
          <Input
            id="vehicle-price"
            type="number"
            value={vehiclePrice}
            onChange={(e) => setVehiclePrice(Number(e.target.value))}
            className="text-lg font-semibold"
          />
        </div>

        {/* Down Payment */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <Label>Down Payment</Label>
            <span className="text-sm font-medium">₹{downPayment[0].toLocaleString()}</span>
          </div>
          <Slider
            value={downPayment}
            onValueChange={setDownPayment}
            max={vehiclePrice * 0.5}
            min={0}
            step={5000}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>₹0</span>
            <span>₹{(vehiclePrice * 0.5).toLocaleString()}</span>
          </div>
        </div>

        {/* Loan Tenure */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <Label>Loan Tenure</Label>
            <span className="text-sm font-medium">{loanTenure[0]} months</span>
          </div>
          <Slider
            value={loanTenure}
            onValueChange={setLoanTenure}
            max={60}
            min={6}
            step={6}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>6 months</span>
            <span>60 months</span>
          </div>
        </div>

        {/* Interest Rate */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <Label>Interest Rate</Label>
            <span className="text-sm font-medium">{interestRate[0]}% p.a.</span>
          </div>
          <Slider
            value={interestRate}
            onValueChange={setInterestRate}
            max={20}
            min={8}
            step={0.5}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>8%</span>
            <span>20%</span>
          </div>
        </div>

        {/* Results */}
        <div className="bg-gradient-card rounded-lg p-4 border">
          <h4 className="font-semibold mb-4 flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-primary" />
            Loan Details
          </h4>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-3 bg-primary-light rounded-lg">
              <div className="text-2xl font-bold text-primary flex items-center justify-center gap-1">
                <IndianRupee className="h-5 w-5" />
                {result.emi.toLocaleString()}
              </div>
              <div className="text-xs text-muted-foreground">Monthly EMI</div>
            </div>
            
            <div className="text-center p-3 bg-accent-light rounded-lg">
              <div className="text-2xl font-bold text-accent flex items-center justify-center gap-1">
                <IndianRupee className="h-5 w-5" />
                {result.totalAmount.toLocaleString()}
              </div>
              <div className="text-xs text-muted-foreground">Total Amount</div>
            </div>
          </div>

          <div className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Principal Amount:</span>
              <span className="font-medium">₹{result.principal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Total Interest:</span>
              <span className="font-medium">₹{result.totalInterest.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <Button variant="hero" className="w-full">
          Apply for Loan
        </Button>
      </CardContent>
    </Card>
  );
};

export default EMICalculator;