
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { brands } from '@/data/cars';
import { useCart } from '@/contexts/CartContext';
import { ShoppingCart, ChevronLeft, Check, Zap, Gauge, Fuel } from 'lucide-react';
import { toast } from 'sonner';

const CarDetail = () => {
  const { carId } = useParams();
  const { addItem } = useCart();
  
  const car = brands.flatMap(b => b.cars).find(c => c.id === carId);

  if (!car) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Car Not Found</h1>
          <p className="text-muted-foreground mb-8">The car you're looking for doesn't exist.</p>
          <Link to="/brands">
            <Button>
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Brands
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const handleAddToCart = () => {
    addItem(car);
    toast.success(`${car.name} added to cart!`);
  };

  const brand = brands.find(b => b.name === car.brand);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <Link 
          to={`/brand/${brand?.id}`} 
          className="inline-flex items-center space-x-2 text-luxury-gold mb-6 hover:underline"
        >
          <ChevronLeft className="h-4 w-4" />
          <span>Back to {car.brand}</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Section */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4">
                <Badge variant={car.inStock ? "default" : "secondary"}>
                  {car.inStock ? "In Stock" : "Sold Out"}
                </Badge>
              </div>
              {car.originalPrice && car.originalPrice > car.price && (
                <div className="absolute top-4 right-4">
                  <Badge variant="destructive">Sale</Badge>
                </div>
              )}
            </div>
          </div>

          {/* Details Section */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-3 mb-2">
                {brand && (
                  <img 
                    src={brand.logo} 
                    alt={brand.name}
                    className="h-8 w-auto object-contain"
                  />
                )}
                <span className="text-muted-foreground">{car.brand} • {car.year}</span>
              </div>
              <h1 className="text-4xl font-bold mb-4">{car.name}</h1>
              <p className="text-lg text-muted-foreground">{car.description}</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <span className="text-3xl font-bold text-luxury-gold">
                  {formatPrice(car.price)}
                </span>
                {car.originalPrice && car.originalPrice > car.price && (
                  <span className="text-lg text-muted-foreground line-through">
                    {formatPrice(car.originalPrice)}
                  </span>
                )}
              </div>
              <p className="text-sm text-muted-foreground">
                Price includes all taxes and fees
              </p>
            </div>

            <Button
              onClick={handleAddToCart}
              disabled={!car.inStock}
              size="lg"
              className="w-full luxury-button text-lg py-4"
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              {car.inStock ? "Add to Cart" : "Sold Out"}
            </Button>

            <Separator />

            {/* Specifications */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Specifications</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                  <Zap className="h-5 w-5 text-luxury-gold" />
                  <div>
                    <p className="text-sm text-muted-foreground">Engine</p>
                    <p className="font-medium">{car.specifications.engine}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                  <Gauge className="h-5 w-5 text-luxury-gold" />
                  <div>
                    <p className="text-sm text-muted-foreground">Power</p>
                    <p className="font-medium">{car.specifications.power}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                  <Zap className="h-5 w-5 text-luxury-gold" />
                  <div>
                    <p className="text-sm text-muted-foreground">Top Speed</p>
                    <p className="font-medium">{car.specifications.topSpeed}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                  <Gauge className="h-5 w-5 text-luxury-gold" />
                  <div>
                    <p className="text-sm text-muted-foreground">0-100 km/h</p>
                    <p className="font-medium">{car.specifications.acceleration}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                  <Zap className="h-5 w-5 text-luxury-gold" />
                  <div>
                    <p className="text-sm text-muted-foreground">Transmission</p>
                    <p className="font-medium">{car.specifications.transmission}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                  <Fuel className="h-5 w-5 text-luxury-gold" />
                  <div>
                    <p className="text-sm text-muted-foreground">Fuel Type</p>
                    <p className="font-medium">{car.specifications.fuelType}</p>
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            {/* Features */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Key Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {car.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-luxury-gold" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Related Cars */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-8">
            More from <span className="text-gradient">{car.brand}</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {brand?.cars
              .filter(c => c.id !== car.id)
              .slice(0, 3)
              .map((relatedCar) => (
                <Link key={relatedCar.id} to={`/car/${relatedCar.id}`}>
                  <div className="luxury-card group">
                    <img
                      src={relatedCar.image}
                      alt={relatedCar.name}
                      className="w-full h-48 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
                    />
                    <h3 className="text-lg font-bold group-hover:text-luxury-gold transition-colors">
                      {relatedCar.name}
                    </h3>
                    <p className="text-luxury-gold font-bold mt-2">
                      {formatPrice(relatedCar.price)}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CarDetail;
