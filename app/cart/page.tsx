'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Minus, Plus, X, ShoppingBag, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useCart } from '@/hooks/useCart';

const CartPage = () => {
  const { items, total, updateQuantity, removeItem, clearCart } = useCart();
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);
  const [discount, setDiscount] = useState(0);

  const shipping = total > 50000 ? 0 : 2500;
  const tax = Math.round((total - discount) * 0.18);
  const finalTotal = total - discount + shipping + tax;

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity < 1) {
      removeItem(id);
    } else {
      updateQuantity(id, newQuantity);
    }
  };

  const applyCoupon = () => {
    // Mock coupon system
    const validCoupons = {
      'WELCOME10': 0.1,
      'ROYAL20': 0.2,
      'FIRST15': 0.15,
    };

    const couponDiscount = validCoupons[couponCode as keyof typeof validCoupons];
    if (couponDiscount) {
      setAppliedCoupon(couponCode);
      setDiscount(Math.round(total * couponDiscount));
      setCouponCode('');
    } else {
      alert('Invalid coupon code');
    }
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    setDiscount(0);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-black">
        <Header />
        <div className="min-h-screen flex items-center justify-center py-20">
          <div className="text-center text-white max-w-md mx-auto px-4">
            <ShoppingBag className="h-24 w-24 mx-auto mb-6 text-gray-600" />
            <h2 className="text-3xl font-playfair font-bold mb-4">Your Cart is Empty</h2>
            <p className="text-gray-400 mb-8">
              Looks like you haven't added any items to your cart yet. 
              Start shopping to fill it up!
            </p>
            <Link href="/catalog">
              <Button className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <Link href="/catalog" className="inline-flex items-center text-amber-400 hover:text-amber-300 mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Continue Shopping
            </Link>
            <h1 className="text-4xl font-playfair font-bold text-white mb-2">
              Shopping Cart
            </h1>
            <p className="text-gray-400">{items.length} items in your cart</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <Card key={item.id} className="bg-gray-900/50 border-gray-800">
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="relative w-full sm:w-32 h-32 flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover rounded-lg"
                        />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="text-lg font-semibold text-white mb-1">
                              {item.name}
                            </h3>
                            <p className="text-gray-400 text-sm">{item.wood}</p>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeItem(item.id)}
                            className="text-gray-400 hover:text-red-400"
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                              className="h-8 w-8 border-gray-600 text-white hover:bg-gray-800"
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            
                            <span className="text-white font-medium w-8 text-center">
                              {item.quantity}
                            </span>
                            
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                              className="h-8 w-8 border-gray-600 text-white hover:bg-gray-800"
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                          
                          <div className="text-right">
                            <div className="text-lg font-semibold text-amber-400">
                              ₹{(item.price * item.quantity).toLocaleString()}
                            </div>
                            <div className="text-sm text-gray-400">
                              ₹{item.price.toLocaleString()} each
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              <div className="flex justify-between items-center pt-4">
                <Button
                  variant="outline"
                  onClick={clearCart}
                  className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                >
                  Clear Cart
                </Button>
                <Link href="/catalog">
                  <Button variant="outline" className="border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black">
                    Continue Shopping
                  </Button>
                </Link>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="bg-gray-900/50 border-gray-800 sticky top-24">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-6">Order Summary</h3>
                  
                  {/* Coupon Code */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-white mb-2">
                      Coupon Code
                    </label>
                    {appliedCoupon ? (
                      <div className="flex items-center justify-between bg-green-900/20 border border-green-700 rounded-lg p-3">
                        <span className="text-green-400 font-medium">{appliedCoupon}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={removeCoupon}
                          className="text-green-400 hover:text-green-300 p-1 h-auto"
                        >
                          <X className="h-3 w-3" />
                        </Button>
                      </div>
                    ) : (
                      <div className="flex space-x-2">
                        <Input
                          placeholder="Enter coupon code"
                          value={couponCode}
                          onChange={(e) => setCouponCode(e.target.value)}
                          className="bg-gray-800 border-gray-700 text-white"
                        />
                        <Button
                          onClick={applyCoupon}
                          variant="outline"
                          className="border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black whitespace-nowrap"
                        >
                          Apply
                        </Button>
                      </div>
                    )}
                    <p className="text-xs text-gray-400 mt-1">
                      Try: WELCOME10, ROYAL20, or FIRST15
                    </p>
                  </div>
                  
                  {/* Price Breakdown */}
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-gray-300">
                      <span>Subtotal ({items.length} items)</span>
                      <span>₹{total.toLocaleString()}</span>
                    </div>
                    
                    {discount > 0 && (
                      <div className="flex justify-between text-green-400">
                        <span>Discount ({appliedCoupon})</span>
                        <span>-₹{discount.toLocaleString()}</span>
                      </div>
                    )}
                    
                    <div className="flex justify-between text-gray-300">
                      <span>Shipping</span>
                      <span>
                        {shipping === 0 ? (
                          <span className="text-green-400">Free</span>
                        ) : (
                          `₹${shipping.toLocaleString()}`
                        )}
                      </span>
                    </div>
                    
                    <div className="flex justify-between text-gray-300">
                      <span>Tax (18% GST)</span>
                      <span>₹{tax.toLocaleString()}</span>
                    </div>
                    
                    {total < 50000 && (
                      <div className="text-sm text-amber-400 bg-amber-900/20 border border-amber-800 rounded p-3">
                        Add ₹{(50000 - total).toLocaleString()} more for free shipping!
                      </div>
                    )}
                    
                    <div className="border-t border-gray-700 pt-3">
                      <div className="flex justify-between text-xl font-semibold text-white">
                        <span>Total</span>
                        <span className="text-amber-400">₹{finalTotal.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Checkout Button */}
                  <Link href="/checkout">
                    <Button className="w-full bg-amber-500 hover:bg-amber-600 text-black font-semibold py-3 text-lg">
                      Proceed to Checkout
                    </Button>
                  </Link>
                  
                  <div className="mt-4 text-center">
                    <p className="text-xs text-gray-400">
                      Secure checkout powered by 256-bit SSL encryption
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CartPage;