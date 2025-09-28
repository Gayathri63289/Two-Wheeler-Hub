import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import heroImage from "@/assets/hero-bikes.jpg";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Two-wheeler background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/80" />
      </div>

      <div className="relative z-10 text-center text-white px-4">
        <h1 className="mb-4 text-4xl sm:text-6xl font-bold">404</h1>
        <p className="mb-8 text-lg sm:text-xl text-white/90">Oops! Page not found</p>
        <a 
          href="/" 
          className="inline-block bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-lg transition-colors duration-200 font-semibold"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
