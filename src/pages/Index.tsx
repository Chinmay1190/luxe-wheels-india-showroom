
import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CarCard } from '@/components/CarCard';
import { brands } from '@/data/cars';
import { ChevronRight, Star, Shield, Award, Zap } from 'lucide-react';

const Index = () => {
  const featuredCars = brands.flatMap(brand => 
    brand.cars.filter(car => car.originalPrice && car.originalPrice > car.price)
  ).slice(0, 6);

  const brandLogos = brands.map(brand => ({
    id: brand.id,
    name: brand.name,
    logo: brand.logo
  }));

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&q=80")'
          }}
        ></div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <Badge className="mb-6 bg-luxury-gold/20 text-luxury-gold border-luxury-gold/30">
            India's Premier Luxury Car Destination
          </Badge>
          <h1 className="text-4xl md:text-7xl font-bold mb-6 animate-fade-in">
            Experience
            <span className="text-gradient block">Automotive Excellence</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-fade-in">
            Discover the world's most prestigious automotive brands in India. From Rolls-Royce to McLaren.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Link to="/brands">
              <Button size="lg" className="luxury-button text-lg px-8 py-4">
                Explore Collections
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20">
                Learn More
              </Button>
            </Link>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-20 h-20 rounded-full bg-luxury-gold/10 flex items-center justify-center">
            <Star className="h-8 w-8 text-luxury-gold" />
          </div>
        </div>
        <div className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: '1s' }}>
          <div className="w-16 h-16 rounded-full bg-luxury-platinum/10 flex items-center justify-center">
            <Award className="h-6 w-6 text-luxury-platinum" />
          </div>
        </div>
      </section>

      {/* Brand Showcase */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-luxury-gold/10 text-luxury-gold border-luxury-gold/30">
              Prestigious Brands
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              World-Class <span className="text-gradient">Automotive Heritage</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We represent the most exclusive automotive brands, each with decades of heritage and uncompromising excellence.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
            {brandLogos.map((brand, index) => (
              <Link 
                key={brand.id} 
                to={`/brand/${brand.id}`} 
                className="group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="brand-card text-center min-h-[200px] flex flex-col justify-center animate-fade-in">
                  <div className="mb-4">
                    <img 
                      src={brand.logo} 
                      alt={brand.name}
                      className="h-16 w-auto mx-auto object-contain filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-bold">{brand.name}</h3>
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ChevronRight className="h-5 w-5 mx-auto" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cars */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-luxury-gold/10 text-luxury-gold border-luxury-gold/30">
              Special Offers
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Featured <span className="text-gradient">Luxury Vehicles</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our handpicked selection of extraordinary vehicles, now available with exclusive pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCars.map((car, index) => (
              <div 
                key={car.id} 
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CarCard car={car} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/brands">
              <Button size="lg" className="luxury-button">
                View All Collections
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Why Choose <span className="text-gradient">LuxuryCars</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4 animate-fade-in">
              <div className="w-16 h-16 mx-auto rounded-full bg-luxury-gold/10 flex items-center justify-center">
                <Shield className="h-8 w-8 text-luxury-gold" />
              </div>
              <h3 className="text-xl font-bold">Authenticated Excellence</h3>
              <p className="text-muted-foreground">
                Every vehicle undergoes rigorous inspection and comes with complete documentation and warranty.
              </p>
            </div>

            <div className="text-center space-y-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 mx-auto rounded-full bg-luxury-gold/10 flex items-center justify-center">
                <Star className="h-8 w-8 text-luxury-gold" />
              </div>
              <h3 className="text-xl font-bold">White-Glove Service</h3>
              <p className="text-muted-foreground">
                From selection to delivery, experience personalized service that matches the luxury of your vehicle.
              </p>
            </div>

            <div className="text-center space-y-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="w-16 h-16 mx-auto rounded-full bg-luxury-gold/10 flex items-center justify-center">
                <Zap className="h-8 w-8 text-luxury-gold" />
              </div>
              <h3 className="text-xl font-bold">Exclusive Access</h3>
              <p className="text-muted-foreground">
                Access to limited editions, bespoke configurations, and vehicles not available anywhere else in India.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
