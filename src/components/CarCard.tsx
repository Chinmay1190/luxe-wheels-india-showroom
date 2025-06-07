
import React from 'react';
import { Link } from 'react-router-dom';
import { Car } from '@/types/car';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/CartContext';
import { ShoppingCart } from 'lucide-react';
import { toast } from 'sonner';

interface CarCardProps {
  car: Car;
}

export const CarCard: React.FC<CarCardProps> = ({ car }) => {
  const { addItem } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(car);
    toast.success(`${car.name} added to cart!`);
  };

  return (
    <Link to={`/car/${car.id}`}>
      <div className="product-card group">
        <div className="relative overflow-hidden">
          <img
            src={car.image}
            alt={car.name}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
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

        <div className="p-6 space-y-4">
          <div>
            <h3 className="text-xl font-bold text-foreground group-hover:text-luxury-gold transition-colors">
              {car.name}
            </h3>
            <p className="text-sm text-muted-foreground">{car.brand} • {car.year}</p>
          </div>

          <p className="text-sm text-muted-foreground line-clamp-2">
            {car.description}
          </p>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">Engine:</span>
              <span className="text-xs font-medium">{car.specifications.engine}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">Power:</span>
              <span className="text-xs font-medium">{car.specifications.power}</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-luxury-gold">
                {formatPrice(car.price)}
              </span>
              {car.originalPrice && car.originalPrice > car.price && (
                <span className="text-sm text-muted-foreground line-through">
                  {formatPrice(car.originalPrice)}
                </span>
              )}
            </div>

            <Button
              onClick={handleAddToCart}
              disabled={!car.inStock}
              className="w-full luxury-button"
              size="sm"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              {car.inStock ? "Add to Cart" : "Sold Out"}
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
};
