'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, MessageCircle, Send, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface OrderEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string | null;
}

export function OrderEnquiryModal({ isOpen, onClose, productName }: OrderEnquiryModalProps) {
  const [step, setStep] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState<string>('');
  const [quantity, setQuantity] = useState('');
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Reset or initialize state when modal opens
  useEffect(() => {
    if (isOpen) {
      if (productName) {
        setSelectedProduct(productName);
        setStep(2); // Skip selection if product provided
      } else {
        setSelectedProduct('');
        setStep(1); // Show selection if no product
      }
      setQuantity('');
      setName('');
      setCity('');
      setPhone('');
    }
  }, [isOpen, productName]);

  const handleProductSelect = (product: string) => {
    setSelectedProduct(product);
    setStep(2);
  };

  const handleNext = () => {
    if (step === 2 && quantity.trim()) setStep(3);
    else if (step === 3 && name.trim()) setStep(4);
    else if (step === 4 && city.trim()) setStep(5);
    else if (step === 5 && phone.trim()) setStep(6);
  };

  const handleBack = () => {
    if (step === 2 && productName) {
      onClose();
    } else if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    const message = `New Order Enquiry – Balaji Enterprises
Product: ${selectedProduct}
Quantity: ${quantity}
Location: ${city}
Customer Name: ${name}
Phone: ${phone}`;

    const whatsappUrl = `https://wa.me/917906265368?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    setTimeout(() => {
      setIsSubmitting(false);
      onClose();
    }, 500);
  };

  const getBotMessage = () => {
    switch (step) {
      case 1: return "Hello! 👋 Welcome to Balaji Enterprises. Please select the product you're interested in:";
      case 2: return `Great choice! How many ${selectedProduct} do you need? (e.g., 5000 pieces, 2 truckloads)`;
      case 3: return "Almost there! What's your name?";
      case 4: return "Thanks! Which city should we deliver to?";
      case 5: return "And your phone number for contact?";
      case 6: return "Perfect! Here's your order summary:";
      default: return "";
    }
  };

  const getCurrentValue = () => {
    switch (step) {
      case 2: return quantity;
      case 3: return name;
      case 4: return city;
      case 5: return phone;
      default: return "";
    }
  };

  const handleInputChange = (val: string) => {
    switch (step) {
      case 2: setQuantity(val); break;
      case 3: setName(val); break;
      case 4: setCity(val); break;
      case 5: setPhone(val); break;
    }
  };

  const getPlaceholder = () => {
    switch (step) {
      case 2: return "Type quantity...";
      case 3: return "Enter your name...";
      case 4: return "Enter city...";
      case 5: return "Enter phone number...";
      default: return "Type a message...";
    }
  };

  if (!mounted || !isOpen) return null;

  const products = [
    'Interlock Tiles (Gray)',
    'Interlock Color Tiles',
    'Fly Ash Bricks',
    'Red Clay Bricks',
    'Cement Bricks',
    'AAC Blocks'
  ];

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-[#efeae2] rounded-2xl shadow-2xl w-[95%] sm:w-full max-w-md max-h-[85vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">

        {/* Header */}
        <div className="bg-[#075e54] text-white p-3 flex items-center justify-between shadow-md z-10">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 p-1.5 rounded-full">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base">Balaji Enterprises</h3>
              <p className="text-[10px] text-white/80">Order Enquiry</p>
            </div>
          </div>
          <button onClick={onClose} className="p-1 hover:bg-white/10 rounded-full transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Chat Content */}
        <div
          className="flex-1 p-4 overflow-y-auto min-h-[300px] max-h-[500px] space-y-4"
          style={{ backgroundImage: 'url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")', backgroundRepeat: 'repeat', backgroundSize: '400px' }}
        >
          {/* Bot Message */}
          <div className="flex justify-start">
            <div className="bg-white rounded-lg rounded-tl-none p-3 shadow-sm max-w-[85%] relative text-sm text-gray-800">
              <p>{getBotMessage()}</p>
              <span className="text-[10px] text-gray-400 absolute bottom-1 right-2">
                {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
          </div>

          {/* Step content */}
          <div className="mt-4">
            {step === 1 ? (
              <div className="grid gap-2">
                {products.map((prod) => (
                  <button
                    key={prod}
                    onClick={() => handleProductSelect(prod)}
                    className="bg-white border-b-2 border-transparent hover:border-[#25D366] active:scale-[0.98] p-3 rounded-lg shadow-sm text-left text-sm font-medium text-gray-700 transition-all flex justify-between items-center group"
                  >
                    {prod}
                    <span className="text-gray-300 group-hover:text-[#25D366] transition-colors">→</span>
                  </button>
                ))}
              </div>
            ) : step === 6 ? (
              <div className="space-y-4 animate-in slide-in-from-bottom-2">
                <div className="bg-white p-4 rounded-lg shadow-md space-y-2 text-sm">
                  <h4 className="font-bold text-gray-500 text-xs uppercase tracking-wider mb-2">Order Summary</h4>
                  <div className="grid grid-cols-[80px_1fr] gap-2">
                    <span className="text-gray-500">Product:</span>
                    <span className="font-medium">{selectedProduct}</span>

                    <span className="text-gray-500">Quantity:</span>
                    <span className="font-medium">{quantity}</span>

                    <span className="text-gray-500">Location:</span>
                    <span className="font-medium">{city}</span>

                    <span className="text-gray-500">Name:</span>
                    <span className="font-medium">{name}</span>

                    <span className="text-gray-500">Phone:</span>
                    <span className="font-medium">{phone}</span>
                  </div>
                </div>

                <Button
                  onClick={handleSubmit}
                  className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white py-6 text-lg rounded-xl shadow-lg flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-6 h-6" />
                  Send via WhatsApp
                </Button>
              </div>
            ) : (
              <div className="flex justify-end animate-in slide-in-from-bottom-2">
                <div className="bg-[#dcf8c6] rounded-lg rounded-tr-none p-2 shadow-sm min-w-[250px] relative">
                  <input
                    type="text"
                    value={getCurrentValue()}
                    onChange={(e) => handleInputChange(e.target.value)}
                    placeholder={getPlaceholder()}
                    autoFocus
                    className="w-full bg-transparent border-none focus:ring-0 text-sm placeholder:text-gray-500 p-0 mb-2"
                    onKeyDown={(e) => e.key === 'Enter' && handleNext()}
                  />
                  <div className="flex justify-end">
                    <button
                      onClick={handleNext}
                      disabled={!getCurrentValue().trim()}
                      className={cn(
                        "bg-[#128C7E] text-white p-2 rounded-full shadow-md transition-all hover:scale-110 active:scale-95",
                        !getCurrentValue().trim() && "opacity-50 cursor-not-allowed hover:scale-100"
                      )}
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer (Back Button) */}
        {step > 1 && step < 6 && (
          <div className="bg-[#f0f2f5] p-2 border-t flex items-center">
            <button
              onClick={handleBack}
              className="flex items-center gap-1 text-xs text-gray-500 hover:text-gray-800 transition-colors"
            >
              <ArrowLeft className="w-3 h-3" /> Back
            </button>
          </div>
        )}
      </div>
    </div>,
    document.body
  );
}
