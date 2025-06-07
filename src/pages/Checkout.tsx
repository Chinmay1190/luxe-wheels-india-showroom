
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { useCart } from '@/contexts/CartContext';
import { 
  CreditCard, 
  Smartphone, 
  Building2, 
  Wallet, 
  ChevronLeft,
  Shield,
  CheckCircle,
  Truck,
  Award
} from 'lucide-react';
import { toast } from 'sonner';

const Checkout = () => {
  const { state, clearCart } = useCart();
  const navigate = useNavigate();
  const [selectedPayment, setSelectedPayment] = useState('card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: ''
  });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const paymentMethods = [
    { id: 'card', name: 'Credit/Debit Card', icon: CreditCard, description: 'Visa, Mastercard, RuPay' },
    { id: 'upi', name: 'UPI', icon: Smartphone, description: 'Pay using any UPI app' },
    { id: 'netbanking', name: 'Net Banking', icon: Building2, description: 'All major banks supported' },
    { id: 'wallet', name: 'Digital Wallet', icon: Wallet, description: 'Paytm, PhonePe, GooglePay' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handlePayment = async () => {
    // Basic validation
    const requiredFields = ['email', 'firstName', 'lastName', 'phone', 'address', 'city', 'state', 'pincode'];
    const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData]);
    
    if (missingFields.length > 0) {
      toast.error('Please fill in all required fields');
      return;
    }

    if (selectedPayment === 'card') {
      const cardFields = ['cardNumber', 'expiryDate', 'cvv', 'cardName'];
      const missingCardFields = cardFields.filter(field => !formData[field as keyof typeof formData]);
      if (missingCardFields.length > 0) {
        toast.error('Please fill in all card details');
        return;
      }
    }

    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      clearCart();
      navigate('/checkout-success');
      toast.success('Payment successful!');
    }, 3000);
  };

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-md mx-auto text-center">
            <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
            <p className="text-muted-foreground mb-8">
              Add some luxury cars to your cart before proceeding to checkout.
            </p>
            <Link to="/brands">
              <Button size="lg" className="luxury-button">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const subtotal = state.total;
  const insurance = subtotal * 0.02;
  const tax = subtotal * 0.18; // 18% GST
  const total = subtotal + insurance + tax;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center space-x-2 mb-8">
          <Link to="/cart" className="text-luxury-gold hover:underline">
            <ChevronLeft className="h-4 w-4 inline mr-1" />
            Back to Cart
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Checkout Form */}
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Checkout</h1>
              <p className="text-muted-foreground">Complete your luxury car purchase</p>
            </div>

            {/* Contact Information */}
            <div className="luxury-card p-6">
              <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  name="firstName"
                  placeholder="First Name *"
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
                <Input
                  name="lastName"
                  placeholder="Last Name *"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="md:col-span-2"
                />
                <Input
                  name="phone"
                  placeholder="Phone Number *"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="md:col-span-2"
                />
              </div>
            </div>

            {/* Delivery Address */}
            <div className="luxury-card p-6">
              <h2 className="text-xl font-semibold mb-4">Delivery Address</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  name="address"
                  placeholder="Street Address *"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="md:col-span-2"
                />
                <Input
                  name="city"
                  placeholder="City *"
                  value={formData.city}
                  onChange={handleInputChange}
                />
                <Input
                  name="state"
                  placeholder="State *"
                  value={formData.state}
                  onChange={handleInputChange}
                />
                <Input
                  name="pincode"
                  placeholder="PIN Code *"
                  value={formData.pincode}
                  onChange={handleInputChange}
                  className="md:col-span-2"
                />
              </div>
            </div>

            {/* Payment Methods */}
            <div className="luxury-card p-6">
              <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
              <div className="space-y-3 mb-6">
                {paymentMethods.map((method) => (
                  <div
                    key={method.id}
                    className={`border rounded-lg p-4 cursor-pointer transition-all ${
                      selectedPayment === method.id
                        ? 'border-luxury-gold bg-luxury-gold/5'
                        : 'border-border hover:border-luxury-gold/50'
                    }`}
                    onClick={() => setSelectedPayment(method.id)}
                  >
                    <div className="flex items-center space-x-3">
                      <method.icon className="h-5 w-5 text-luxury-gold" />
                      <div className="flex-1">
                        <p className="font-medium">{method.name}</p>
                        <p className="text-sm text-muted-foreground">{method.description}</p>
                      </div>
                      <div className={`w-4 h-4 rounded-full border-2 ${
                        selectedPayment === method.id
                          ? 'border-luxury-gold bg-luxury-gold'
                          : 'border-gray-300'
                      }`} />
                    </div>
                  </div>
                ))}
              </div>

              {/* Card Details (only show if card is selected) */}
              {selectedPayment === 'card' && (
                <div className="space-y-4 p-4 bg-muted/20 rounded-lg">
                  <h3 className="font-medium">Card Details</h3>
                  <div className="grid grid-cols-1 gap-4">
                    <Input
                      name="cardName"
                      placeholder="Cardholder Name *"
                      value={formData.cardName}
                      onChange={handleInputChange}
                    />
                    <Input
                      name="cardNumber"
                      placeholder="Card Number *"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        name="expiryDate"
                        placeholder="MM/YY *"
                        value={formData.expiryDate}
                        onChange={handleInputChange}
                      />
                      <Input
                        name="cvv"
                        placeholder="CVV *"
                        value={formData.cvv}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <div className="luxury-card p-6 sticky top-24">
              <h2 className="text-xl font-bold mb-6">Order Summary</h2>

              {/* Cart Items */}
              <div className="space-y-4 mb-6">
                {state.items.map((item) => (
                  <div key={item.car.id} className="flex items-center space-x-4">
                    <img
                      src={item.car.image}
                      alt={item.car.name}
                      className="w-16 h-12 object-cover rounded"
                    />
                    <div className="flex-1">
                      <p className="font-medium text-sm">{item.car.name}</p>
                      <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                    </div>
                    <p className="font-medium text-sm">{formatPrice(item.car.price * item.quantity)}</p>
                  </div>
                ))}
              </div>

              <Separator className="my-4" />

              {/* Price Breakdown */}
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Insurance</span>
                  <span>{formatPrice(insurance)}</span>
                </div>
                <div className="flex justify-between">
                  <span>GST (18%)</span>
                  <span>{formatPrice(tax)}</span>
                </div>
                <Separator />
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="text-luxury-gold">{formatPrice(total)}</span>
                </div>
              </div>

              <Button
                onClick={handlePayment}
                disabled={isProcessing}
                size="lg"
                className="w-full mt-6 luxury-button text-lg py-4"
              >
                {isProcessing ? 'Processing...' : `Pay ${formatPrice(total)}`}
              </Button>

              {/* Security Features */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Shield className="h-4 w-4" />
                  <span>256-bit SSL encryption</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Truck className="h-4 w-4" />
                  <span>Free delivery & setup</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Award className="h-4 w-4" />
                  <span>5-year warranty included</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Checkout;
