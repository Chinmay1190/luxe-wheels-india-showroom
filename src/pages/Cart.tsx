
import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useCart } from '@/contexts/CartContext';
import { Minus, Plus, Trash2, ShoppingBag, ChevronLeft } from 'lucide-react';
import { toast } from 'sonner';

const Cart = () => {
  const { state, removeItem, updateQuantity, clearCart } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const handleRemoveItem = (carId: string, carName: string) => {
    removeItem(carId);
    toast.success(`${carName} removed from cart`);
  };

  const handleUpdateQuantity = (carId: string, quantity: number) => {
    if (quantity < 1) return;
    updateQuantity(carId, quantity);
  };

  const handleClearCart = () => {
    clearCart();
    toast.success('Cart cleared');
  };

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-md mx-auto text-center">
            <ShoppingBag className="h-24 w-24 mx-auto text-muted-foreground mb-6" />
            <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
            <p className="text-muted-foreground mb-8">
              Start exploring our luxury car collection to find your perfect vehicle.
            </p>
            <Link to="/brands">
              <Button size="lg" className="luxury-button">
                Explore Collections
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center space-x-2 mb-8">
          <Link to="/brands" className="text-luxury-gold hover:underline">
            <ChevronLeft className="h-4 w-4 inline mr-1" />
            Continue Shopping
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold">Shopping Cart</h1>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleClearCart}
                className="text-destructive hover:text-destructive"
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Clear Cart
              </Button>
            </div>

            <div className="space-y-4">
              {state.items.map((item) => (
                <div key={item.car.id} className="luxury-card p-6">
                  <div className="flex flex-col sm:flex-row gap-6">
                    <Link to={`/car/${item.car.id}`} className="flex-shrink-0">
                      <img
                        src={item.car.image}
                        alt={item.car.name}
                        className="w-full sm:w-32 h-24 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                      />
                    </Link>

                    <div className="flex-1 space-y-4">
                      <div>
                        <Link 
                          to={`/car/${item.car.id}`}
                          className="text-lg font-bold hover:text-luxury-gold transition-colors"
                        >
                          {item.car.name}
                        </Link>
                        <p className="text-sm text-muted-foreground">
                          {item.car.brand} • {item.car.year}
                        </p>
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div className="flex items-center space-x-3">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleUpdateQuantity(item.car.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="font-medium w-8 text-center">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleUpdateQuantity(item.car.id, item.quantity + 1)}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>

                        <div className="flex items-center space-x-4">
                          <span className="text-lg font-bold text-luxury-gold">
                            {formatPrice(item.car.price * item.quantity)}
                          </span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleRemoveItem(item.car.id, item.car.name)}
                            className="text-destructive hover:text-destructive"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="luxury-card p-6 sticky top-24">
              <h2 className="text-xl font-bold mb-6">Order Summary</h2>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal ({state.itemCount} items)</span>
                  <span className="font-medium">{formatPrice(state.total)}</span>
                </div>

                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-luxury-gold">Free</span>
                </div>

                <div className="flex justify-between">
                  <span>Insurance</span>
                  <span className="font-medium">{formatPrice(state.total * 0.02)}</span>
                </div>

                <Separator />

                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="text-luxury-gold">
                    {formatPrice(state.total + (state.total * 0.02))}
                  </span>
                </div>
              </div>

              <Link to="/checkout">
                <Button 
                  size="lg" 
                  className="w-full mt-6 luxury-button text-lg py-4"
                >
                  Proceed to Checkout
                </Button>
              </Link>

              <div className="mt-6 text-center text-sm text-muted-foreground">
                <p>Secure checkout with 256-bit SSL encryption</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
