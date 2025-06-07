
import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Award, Shield, Star, Users, Clock, Trophy } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Star, value: '5000+', label: 'Happy Customers' },
    { icon: Trophy, value: '50+', label: 'Luxury Brands' },
    { icon: Clock, value: '15+', label: 'Years Experience' },
    { icon: Shield, value: '100%', label: 'Authenticity Guarantee' }
  ];

  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in every aspect of our service, from vehicle selection to customer care.'
    },
    {
      icon: Shield,
      title: 'Trust',
      description: 'Every vehicle comes with complete documentation, warranty, and our commitment to transparency.'
    },
    {
      icon: Users,
      title: 'Service',
      description: 'Personalized white-glove service that matches the luxury of the vehicles we represent.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-luxury-gold/10 text-luxury-gold border-luxury-gold/30">
              About LuxuryCars India
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Redefining <span className="text-gradient">Luxury</span> Automotive
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              For over 15 years, we've been India's premier destination for the world's most prestigious automotive brands, 
              offering an unparalleled selection of luxury and exotic vehicles.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Our <span className="text-gradient">Story</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Founded in 2009 with a simple vision: to bring the world's most exclusive automotive experiences to India. 
                What started as a passion project has evolved into the country's most trusted luxury car destination.
              </p>
              <p className="text-lg text-muted-foreground">
                We believe that owning a luxury vehicle is more than just transportation—it's about craftsmanship, heritage, 
                and the pursuit of perfection. Every car in our collection tells a story of innovation, design excellence, 
                and automotive artistry.
              </p>
              <p className="text-lg text-muted-foreground">
                Today, we proudly represent iconic brands like Rolls-Royce, Bentley, Ferrari, Lamborghini, and McLaren, 
                each chosen for their commitment to excellence and their unique contribution to automotive history.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80"
                alt="Luxury car showroom"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by <span className="text-gradient">Thousands</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Our commitment to excellence is reflected in the trust our customers place in us.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-4 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 mx-auto rounded-full bg-luxury-gold/10 flex items-center justify-center">
                  <stat.icon className="h-8 w-8 text-luxury-gold" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-luxury-gold">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These core principles guide everything we do, from selecting our inventory to serving our customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center space-y-4 animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="w-16 h-16 mx-auto rounded-full bg-luxury-gold/10 flex items-center justify-center">
                  <value.icon className="h-8 w-8 text-luxury-gold" />
                </div>
                <h3 className="text-xl font-bold">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our <span className="text-gradient">Mission</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              To democratize access to the world's most exclusive automotive experiences while maintaining the highest standards 
              of authenticity, service, and customer satisfaction. We're not just selling cars—we're curating dreams and 
              creating lifelong relationships with fellow automotive enthusiasts.
            </p>
            <Badge className="bg-luxury-gold/10 text-luxury-gold border-luxury-gold/30 text-lg px-6 py-2">
              Excellence. Authenticity. Passion.
            </Badge>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
