
import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would typically handle form submission
    alert('Thank you for your message! We will get back to you soon.');
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Showroom',
      details: ['Luxury Car Gallery', 'Bandra-Kurla Complex', 'Mumbai, Maharashtra 400051']
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+91 98765 43210', '+91 91234 56789', 'Toll-free: 1800-LUXURY']
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@luxurycars.in', 'sales@luxurycars.in', 'support@luxurycars.in']
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Saturday: 10 AM - 8 PM', 'Sunday: 11 AM - 6 PM', 'By appointment available']
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
              Get in Touch
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Contact <span className="text-gradient">LuxuryCars</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Whether you're ready to purchase your dream car or have questions about our collection, 
              our expert team is here to provide personalized assistance.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="luxury-card animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-12 h-12 mx-auto rounded-full bg-luxury-gold/10 flex items-center justify-center">
                    <info.icon className="h-6 w-6 text-luxury-gold" />
                  </div>
                  <h3 className="font-semibold">{info.title}</h3>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    {info.details.map((detail, i) => (
                      <p key={i}>{detail}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  Send us a <span className="text-gradient">Message</span>
                </h2>
                <p className="text-muted-foreground">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                      First Name
                    </label>
                    <Input id="firstName" required />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                      Last Name
                    </label>
                    <Input id="lastName" required />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <Input id="email" type="email" required />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <Input id="phone" type="tel" />
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-medium mb-2">
                    Interested In
                  </label>
                  <select 
                    id="interest" 
                    className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Select a brand</option>
                    <option value="rolls-royce">Rolls-Royce</option>
                    <option value="bentley">Bentley</option>
                    <option value="ferrari">Ferrari</option>
                    <option value="lamborghini">Lamborghini</option>
                    <option value="mclaren">McLaren</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    rows={5} 
                    placeholder="Tell us about your dream car or any questions you have..."
                    required 
                  />
                </div>

                <Button type="submit" size="lg" className="w-full luxury-button">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  Visit Our <span className="text-gradient">Showroom</span>
                </h2>
                <p className="text-muted-foreground mb-6">
                  Experience our luxury vehicles in person at our state-of-the-art showroom in Mumbai. 
                  Our expert consultants are available to guide you through our exclusive collection.
                </p>
              </div>

              {/* Map Placeholder */}
              <div className="relative h-64 bg-muted rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <MapPin className="h-12 w-12 text-luxury-gold mx-auto" />
                    <h3 className="font-semibold">Interactive Map</h3>
                    <p className="text-sm text-muted-foreground">
                      Bandra-Kurla Complex, Mumbai
                    </p>
                  </div>
                </div>
              </div>

              {/* Additional Services */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Our Services</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-luxury-gold rounded-full"></div>
                    <span>Personalized vehicle consultation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-luxury-gold rounded-full"></div>
                    <span>Test drive arrangements</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-luxury-gold rounded-full"></div>
                    <span>Custom financing solutions</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-luxury-gold rounded-full"></div>
                    <span>Luxury vehicle trade-ins</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-luxury-gold rounded-full"></div>
                    <span>Concierge delivery service</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
