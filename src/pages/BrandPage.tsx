
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CarCard } from '@/components/CarCard';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { brands } from '@/data/cars';
import { Calendar, MapPin, ChevronLeft } from 'lucide-react';

const BrandPage = () => {
  const { brandId } = useParams();
  const brand = brands.find(b => b.id === brandId);

  if (!brand) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Brand Not Found</h1>
          <p className="text-muted-foreground mb-8">The brand you're looking for doesn't exist.</p>
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

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Link to="/brands" className="inline-flex items-center space-x-2 text-luxury-gold mb-6 hover:underline">
              <ChevronLeft className="h-4 w-4" />
              <span>Back to Brands</span>
            </Link>
            
            <div className="mb-8">
              <img 
                src={brand.logo} 
                alt={brand.name}
                className="h-24 w-auto mx-auto object-contain mb-6"
              />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {brand.name}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {brand.description}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-luxury-gold" />
                <span>Founded in {brand.founded}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-luxury-gold" />
                <span>{brand.headquarters}</span>
              </div>
              <Badge className="bg-luxury-gold/10 text-luxury-gold border-luxury-gold/30">
                {brand.cars.length} Models
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Cars Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {brand.name} <span className="text-gradient">Collection</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Discover our complete range of {brand.name} vehicles, each representing the pinnacle of automotive excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brand.cars.map((car, index) => (
              <div 
                key={car.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CarCard car={car} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BrandPage;
