
import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 text-2xl font-bold">
              <Car className="h-8 w-8 text-luxury-gold" />
              <span className="text-gradient">LuxuryCars</span>
            </Link>
            <p className="text-muted-foreground">
              India's premier destination for luxury and exotic cars. Experience excellence in every drive.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/brands" className="block text-muted-foreground hover:text-luxury-gold transition-colors">
                Brands
              </Link>
              <Link to="/about" className="block text-muted-foreground hover:text-luxury-gold transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="block text-muted-foreground hover:text-luxury-gold transition-colors">
                Contact
              </Link>
              <Link to="/cart" className="block text-muted-foreground hover:text-luxury-gold transition-colors">
                Cart
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Brands</h3>
            <div className="space-y-2">
              <Link to="/brand/rolls-royce" className="block text-muted-foreground hover:text-luxury-gold transition-colors">
                Rolls-Royce
              </Link>
              <Link to="/brand/bentley" className="block text-muted-foreground hover:text-luxury-gold transition-colors">
                Bentley
              </Link>
              <Link to="/brand/ferrari" className="block text-muted-foreground hover:text-luxury-gold transition-colors">
                Ferrari
              </Link>
              <Link to="/brand/lamborghini" className="block text-muted-foreground hover:text-luxury-gold transition-colors">
                Lamborghini
              </Link>
              <Link to="/brand/mclaren" className="block text-muted-foreground hover:text-luxury-gold transition-colors">
                McLaren
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>info@luxurycars.in</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Mumbai, Maharashtra, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 LuxuryCars India. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
