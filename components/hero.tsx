'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { OrderEnquiryModal } from './order-enquiry-modal';

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  const heroImages = [
    '/interlock-tiles.jpg',
    '/fly-ash-bricks.jpg',
    '/construction-site-complete.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16 md:pt-20">
      {/* Image Carousel with 3-second rotation */}
      <div className="absolute inset-0 z-0 w-full h-full">
        {heroImages.map((image, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ${idx === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`Premium materials showcase ${idx + 1}`}
              fill
              className="object-cover"
              quality={90}
              priority={idx === 0}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-black/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-3 sm:px-6 lg:px-8 text-center">
        <div className="space-y-3 sm:space-y-6 md:space-y-8">
          <div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-white leading-tight text-balance drop-shadow-lg">
              Premium Building Materials
            </h1>
            <div className="h-1 w-12 sm:w-16 md:w-24 bg-gradient-to-r from-primary to-primary/60 mt-3 sm:mt-4 md:mt-8 mx-auto rounded-full" />
          </div>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/95 leading-relaxed max-w-2xl mx-auto drop-shadow font-light px-1">
            High-quality fly ash bricks and interlock tiles engineered for lasting durability. Trusted by builders across India.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-3 sm:pt-4 md:pt-6 justify-center px-1">
            <Button
              size="lg"
              className="bg-white hover:bg-gray-100 text-red-700 font-semibold px-4 sm:px-6 md:px-10 py-2 md:py-3 text-sm sm:text-base transition-all shadow-lg hover:shadow-xl rounded-lg w-full sm:w-auto"
              onClick={() => scrollToSection('products')}
            >
              View Products
            </Button>
            <Button
              size="lg"
              onClick={() => setEnquiryOpen(true)}
              className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold px-4 sm:px-6 md:px-10 py-2 md:py-3 text-sm sm:text-base transition-all shadow-lg hover:shadow-xl rounded-lg"
            >
              Order on WhatsApp
            </Button>
          </div>
        </div>
      </div>

      <OrderEnquiryModal
        isOpen={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
        productName={null}
      />
    </section>
  );
}
