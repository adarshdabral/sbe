'use client';

import React from "react"

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Send, MessageCircle, X } from 'lucide-react';

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [quantity, setQuantity] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (quantity.trim()) {
      const message = `I would like to order ${quantity} units. Please provide a quotation.`;
      const whatsappUrl = `https://wa.me/917906265368?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
      setSubmitted(true);
      setQuantity('');
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 max-w-sm">
      {isOpen ? (
        <Card className="p-6 shadow-2xl border border-primary/20">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-serif font-bold text-foreground mb-1">Quick Order</h3>
              <p className="text-xs text-foreground/60">
                Tell us your quantity needs
              </p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-foreground/50 hover:text-foreground transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="text"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              placeholder="Enter quantity…"
              className="w-full px-4 py-2.5 border border-border rounded-lg text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />

            <Button
              type="submit"
              className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold flex items-center justify-center gap-2 py-2"
            >
              <Send className="w-4 h-4" />
              Send on WhatsApp
            </Button>
          </form>

          {/* Success Message */}
          {submitted && (
            <div className="mt-3 p-3 bg-green-50 text-green-700 rounded-lg text-xs text-center font-medium">
              ✓ Redirecting to WhatsApp...
            </div>
          )}
        </Card>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-primary hover:bg-primary/90 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}
