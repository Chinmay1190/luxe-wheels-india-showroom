
import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { brands } from '@/data/cars';
import { ChevronRight, Calendar, MapPin } from 'lucide-react';

const Brands = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-luxury-gold/10 text-luxury-gold border-luxury-gold/30">
              Luxury Automotive Brands
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Prestigious <span className="text-gradient">Heritage</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore the world's most exclusive automotive manufacturers, each representing decades of innovation, craftsmanship, and racing heritage.
            </p>
          </div>
        </div>
      </section>

      {/* Brands Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {brands.map((brand, index) => (
              <Link 
                key={brand.id} 
                to={`/brand/${brand.id}`}
                className="group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="luxury-card p-8 h-full animate-fade-in">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <img 
                        src={brand.logo} 
                        alt={brand.name}
                        className="h-20 w-auto object-contain"
                      />
                    </div>
                    
                    <div className="flex-1 space-y-4">
                      <div>
                        <h2 className="text-2xl font-bold group-hover:text-luxury-gold transition-colors">
                          {brand.name}
                        </h2>
                        <p className="text-muted-foreground mt-2">
                          {brand.description}
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4 text-luxury-gold" />
                          <span>Founded {brand.founded}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-luxury-gold" />
                          <span>{brand.headquarters}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <Badge variant="outline" className="border-luxury-gold/30 text-luxury-gold">
                            {brand.cars.length} Models Available
                          </Badge>
                        </div>
                        <ChevronRight className="h-5 w-5 text-luxury-gold group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>

                  {/* Preview Cars */}
                  <div className="mt-6 grid grid-cols-3 gap-2">
                    {brand.cars.slice(0, 3).map((car) => (
                      <div key={car.id} className="relative aspect-video rounded-lg overflow-hidden">
                        <img 
                          src={car.image} 
                          alt={car.name}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/20"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Brands;
