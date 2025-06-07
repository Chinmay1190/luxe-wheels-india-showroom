
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Car } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from './ThemeToggle';
import { useCart } from '@/contexts/CartContext';

export const Header = () => {
  const { state } = useCart();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 text-2xl font-bold">
            <Car className="h-8 w-8 text-luxury-gold" />
            <span className="text-gradient">LuxuryCars</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-luxury-gold transition-colors">
              Home
            </Link>
            <Link to="/brands" className="text-foreground hover:text-luxury-gold transition-colors">
              Brands
            </Link>
            <Link to="/about" className="text-foreground hover:text-luxury-gold transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-foreground hover:text-luxury-gold transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Link to="/cart">
              <Button variant="outline" size="sm" className="relative">
                <ShoppingCart className="h-4 w-4" />
                {state.itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-luxury-gold text-black text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {state.itemCount}
                  </span>
                )}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
