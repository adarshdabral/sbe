'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { OrderEnquiryModal } from './order-enquiry-modal';

export function Header({ isScrolled }: { isScrolled: boolean }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-border/50 transition-all ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="font-serif text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Shri Balaji Enterprises
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            <button
              onClick={() => scrollToSection('about')}
              className="text-foreground/70 hover:text-primary transition-colors text-sm font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('products')}
              className="text-foreground/70 hover:text-primary transition-colors text-sm font-medium"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection('why-choose-us')}
              className="text-foreground/70 hover:text-primary transition-colors text-sm font-medium"
            >
              Why Us
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-foreground/70 hover:text-primary transition-colors text-sm font-medium"
            >
              Contact
            </button>
            <Button
              onClick={() => setEnquiryOpen(true)}
              className="bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold shadow-sm hover:shadow-md transition-all"
            >
              Order on WhatsApp
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-6 border-t border-border">
            <div className="flex flex-col gap-4 mt-4">
              <button
                onClick={() => scrollToSection('about')}
                className="text-foreground hover:text-primary transition-colors font-medium text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('products')}
                className="text-foreground hover:text-primary transition-colors font-medium text-left"
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection('why-choose-us')}
                className="text-foreground hover:text-primary transition-colors font-medium text-left"
              >
                Why Choose Us
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-foreground hover:text-primary transition-colors font-medium text-left"
              >
                Contact
              </button>
              <Button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setEnquiryOpen(true);
                }}
                className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold"
              >
                Order on WhatsApp
              </Button>
            </div>
          </nav>
        )}
      </div>

      <OrderEnquiryModal
        isOpen={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
        productName=""
      />
    </header>
  );
}
