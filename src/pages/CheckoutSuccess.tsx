
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { 
  CheckCircle, 
  Car, 
  Calendar, 
  Phone, 
  Mail, 
  Download,
  Share2,
  Star,
  Sparkles
} from 'lucide-react';

const CheckoutSuccess = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [orderNumber] = useState(() => 
    'LC' + Date.now().toString().slice(-8) + Math.floor(Math.random() * 1000)
  );

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className={`max-w-4xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          
          {/* Success Header */}
          <div className="text-center mb-12">
            <div className="relative inline-block mb-6">
              <div className="absolute inset-0 animate-ping">
                <CheckCircle className="h-24 w-24 text-luxury-gold/30 mx-auto" />
              </div>
              <CheckCircle className="h-24 w-24 text-luxury-gold mx-auto relative z-10" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Payment Successful!
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Congratulations on your luxury car purchase
            </p>
            
            <div className="flex items-center justify-center space-x-2 text-luxury-gold">
              <Sparkles className="h-5 w-5" />
              <span className="font-medium">Order #{orderNumber}</span>
              <Sparkles className="h-5 w-5" />
            </div>
          </div>

          {/* Order Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            
            {/* Order Summary Card */}
            <div className="luxury-card p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Car className="h-6 w-6 mr-2 text-luxury-gold" />
                Your Purchase
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-muted/20 rounded-lg">
                  <img
                    src="https://images.unsplash.com/photo-1563720223185-11003d516935?w=400"
                    alt="Luxury Car"
                    className="w-20 h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <p className="font-semibold">Sample Luxury Vehicle</p>
                    <p className="text-sm text-muted-foreground">2024 Model</p>
                  </div>
                  <p className="font-bold text-luxury-gold">{formatPrice(5000000)}</p>
                </div>
                
                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total Paid</span>
                    <span className="text-luxury-gold">{formatPrice(5900000)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Next Steps Card */}
            <div className="luxury-card p-8">
              <h2 className="text-2xl font-bold mb-6">What's Next?</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-luxury-gold/20 p-2 rounded-full">
                    <Calendar className="h-5 w-5 text-luxury-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Delivery Scheduling</h3>
                    <p className="text-sm text-muted-foreground">
                      Our team will contact you within 24 hours to schedule delivery
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-luxury-gold/20 p-2 rounded-full">
                    <Phone className="h-5 w-5 text-luxury-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Personal Concierge</h3>
                    <p className="text-sm text-muted-foreground">
                      Dedicated support for setup, training, and maintenance
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-luxury-gold/20 p-2 rounded-full">
                    <Star className="h-5 w-5 text-luxury-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold">VIP Experience</h3>
                    <p className="text-sm text-muted-foreground">
                      Exclusive access to events and premium services
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="luxury-button flex items-center space-x-2">
              <Download className="h-5 w-5" />
              <span>Download Receipt</span>
            </Button>
            
            <Button variant="outline" size="lg" className="flex items-center space-x-2">
              <Share2 className="h-5 w-5" />
              <span>Share Purchase</span>
            </Button>
            
            <Button variant="outline" size="lg" className="flex items-center space-x-2">
              <Mail className="h-5 w-5" />
              <span>Email Confirmation</span>
            </Button>
          </div>

          {/* Contact Information */}
          <div className="luxury-card p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Need Assistance?</h2>
            <p className="text-muted-foreground mb-6">
              Our luxury car specialists are available 24/7 to assist you
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <div className="flex items-center justify-center space-x-2">
                <Phone className="h-5 w-5 text-luxury-gold" />
                <span className="font-medium">+91 98765 43210</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Mail className="h-5 w-5 text-luxury-gold" />
                <span className="font-medium">support@luxurycars.com</span>
              </div>
            </div>
          </div>

          {/* Continue Shopping */}
          <div className="text-center mt-12">
            <Link to="/brands">
              <Button size="lg" variant="outline" className="mr-4">
                Continue Shopping
              </Button>
            </Link>
            <Link to="/">
              <Button size="lg" className="luxury-button">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CheckoutSuccess;
