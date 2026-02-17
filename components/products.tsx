'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { OrderEnquiryModal } from './order-enquiry-modal';
import { MessageCircle } from 'lucide-react';

export function Products() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');

  const handleRequestQuote = (productName: string) => {
    setSelectedProduct(productName);
    setEnquiryOpen(true);
  };

  const interlockTiles = [
    { size: '60mm', normalPrice: '₹10', coloredPrice: '₹12.50' },
    { size: '80mm', normalPrice: '₹14', coloredPrice: '₹16.50' },
  ];

  const interlockMaterials = [
    'Cement (OPC 43 / OPC 53)',
    'M-Sand / River Sand',
    'Stone Dust / Grit (6–10 mm)',
    'Colour Oxide',
    'Chemical Admixture',
    'Water',
  ];

  const flyAshMaterials = [
    'Fly Ash',
    'Bottom Ash',
    'Stone Dust',
    'Lime (Chuna)',
    'Gypsum',
    'Cement',
  ];

  return (
    <>
      <section id="products" className="py-16 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12 md:mb-24">
            <h2 className="font-serif text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2 sm:mb-3 md:mb-4 leading-tight">
              Our Products
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-foreground/70 leading-relaxed max-w-2xl mx-auto px-2">
              Premium quality materials for every construction need.
            </p>
            <div className="h-1.5 w-16 sm:w-20 md:w-24 bg-gradient-to-r from-primary to-primary/50 mt-3 sm:mt-4 md:mt-6 mx-auto rounded-full" />
          </div>

          {/* Products Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Interlock Tiles Card */}
            <div className="group">
              <div className="bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-border/50 flex flex-col h-full">
                {/* Image Section */}
                <div className="relative h-48 sm:h-60 overflow-hidden bg-gradient-to-br from-foreground/5 to-primary/5">
                  <Image
                    src="/interlock-tiles-gray.png"
                    alt="Premium interlock tiles"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {/* Content Section */}
                <div className="p-3 sm:p-6 flex flex-col flex-1">
                  {/* Title & Description */}
                  <div className="mb-3 sm:mb-4">
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-foreground mb-1 sm:mb-2">
                      Interlock Tiles (Gray)
                    </h3>
                    <div className="h-1 w-10 sm:w-12 bg-gradient-to-r from-primary to-primary/50 rounded-full mb-3 sm:mb-4" />
                    <p className="text-foreground/70 text-sm leading-relaxed">
                      Premium gray tiles specifically designed for heavy-duty driveways and industrial areas.
                    </p>
                  </div>

                  {/* Pricing */}
                  <div className="bg-foreground/3 rounded-2xl p-3 sm:p-4 mb-3 sm:mb-4 h-[125px] flex flex-col">
                    <h4 className="font-semibold text-foreground mb-2 text-xs uppercase tracking-wide">
                      Pricing
                    </h4>
                    <div className="space-y-2 flex-1 flex flex-col justify-center">
                      <div className="flex justify-between items-center text-sm">
                        <span className="font-medium text-foreground">60mm</span>
                        <span className="font-bold text-primary">₹10</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="font-medium text-foreground">80mm</span>
                        <span className="font-bold text-primary">₹14</span>
                      </div>
                    </div>
                  </div>

                  {/* Materials */}
                  <div className="mb-4 mt-auto">
                    <h4 className="font-semibold text-foreground mb-2 text-xs uppercase tracking-wide">
                      KEY MATERIALS
                    </h4>
                    <div className="grid grid-cols-2 gap-1.5">
                      {interlockMaterials.slice(0, 4).map((material) => (
                        <div key={material} className="flex items-center gap-1.5 text-xs text-foreground/70">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          <span className="truncate">{material.split('(')[0]}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Button */}
                  <Button
                    onClick={() => handleRequestQuote('Interlock Tiles (Gray)')}
                    className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold py-2 rounded-xl flex items-center justify-center gap-2 transition-all text-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Request Quote
                  </Button>
                </div>
              </div>
            </div>

            {/* Interlock Color Tiles Card */}
            <div className="group">
              <div className="bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-border/50 flex flex-col h-full">
                {/* Image Section */}
                <div className="relative h-48 sm:h-60 overflow-hidden bg-gradient-to-br from-foreground/5 to-primary/5">
                  <Image
                    src="/interlock-tiles-colored.png"
                    alt="Premium colored interlock tiles"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {/* Content Section */}
                <div className="p-3 sm:p-6 flex flex-col flex-1">
                  {/* Title & Description */}
                  <div className="mb-3 sm:mb-4">
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-foreground mb-1 sm:mb-2">
                      Interlock Color Tiles
                    </h3>
                    <div className="h-1 w-10 sm:w-12 bg-gradient-to-r from-primary to-primary/50 rounded-full mb-3 sm:mb-4" />
                    <p className="text-foreground/70 text-sm leading-relaxed">
                      Vibrant, long-lasting colored tiles adding aesthetic appeal to patios and landscapes.
                    </p>
                  </div>

                  {/* Pricing */}
                  <div className="bg-foreground/3 rounded-2xl p-3 sm:p-4 mb-3 sm:mb-4 h-[125px] flex flex-col">
                    <h4 className="font-semibold text-foreground mb-2 text-xs uppercase tracking-wide">
                      Pricing
                    </h4>
                    <div className="space-y-2 flex-1 flex flex-col justify-center">
                      <div className="flex justify-between items-center text-sm">
                        <span className="font-medium text-foreground">60mm</span>
                        <span className="font-bold text-primary">₹12.50</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="font-medium text-foreground">80mm</span>
                        <span className="font-bold text-primary">₹16.50</span>
                      </div>
                    </div>
                  </div>

                  {/* Materials */}
                  <div className="mb-4 mt-auto">
                    <h4 className="font-semibold text-foreground mb-2 text-xs uppercase tracking-wide">
                      KEY MATERIALS
                    </h4>
                    <div className="grid grid-cols-2 gap-1.5">
                      {interlockMaterials.slice(0, 4).map((material) => (
                        <div key={material} className="flex items-center gap-1.5 text-xs text-foreground/70">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          <span className="truncate">{material.split('(')[0]}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Button */}
                  <Button
                    onClick={() => handleRequestQuote('Interlock Color Tiles')}
                    className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold py-2 rounded-xl flex items-center justify-center gap-2 transition-all text-sm shadow-md"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Request Quote
                  </Button>
                </div>
              </div>
            </div>

            {/* Fly Ash Bricks Card */}
            <div className="group">
              <div className="bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-border/50 flex flex-col h-full">
                {/* Image Section */}
                <div className="relative h-48 sm:h-60 overflow-hidden bg-gradient-to-br from-foreground/5 to-primary/5">
                  <Image
                    src="/fly-ash-bricks-premium.jpg"
                    alt="Premium fly ash bricks"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {/* Content Section */}
                <div className="p-3 sm:p-6 flex flex-col flex-1">
                  {/* Title & Description */}
                  <div className="mb-3 sm:mb-4">
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-foreground mb-1 sm:mb-2">
                      Fly Ash Bricks
                    </h3>
                    <div className="h-1 w-10 sm:w-12 bg-gradient-to-r from-primary to-primary/50 rounded-full mb-3 sm:mb-4" />
                    <p className="text-foreground/70 text-sm leading-relaxed">
                      Eco-friendly, lightweight, and incredibly strong bricks for all construction types.
                    </p>
                  </div>

                  {/* Pricing */}
                  <div className="bg-foreground/3 rounded-2xl p-3 sm:p-4 mb-3 sm:mb-4 h-[125px] flex flex-col">
                    <h4 className="font-semibold text-foreground mb-2 text-xs uppercase tracking-wide">
                      Pricing
                    </h4>
                    <div className="text-center flex-1 flex flex-col justify-center">
                      <p className="text-2xl font-bold text-primary mb-1">₹7</p>
                      <p className="text-xs text-foreground/60">per brick</p>
                      <p className="text-[10px] text-foreground/50 mt-1">Bulk discounts</p>
                    </div>
                  </div>

                  {/* Composition */}
                  <div className="mb-4 mt-auto">
                    <h4 className="font-semibold text-foreground mb-2 text-xs uppercase tracking-wide">
                      KEY MATERIALS
                    </h4>
                    <div className="grid grid-cols-2 gap-1.5">
                      {flyAshMaterials.slice(0, 4).map((material) => (
                        <div key={material} className="flex items-center gap-1.5 text-xs text-foreground/70">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          <span>{material}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Button */}
                  <Button
                    onClick={() => handleRequestQuote('Fly Ash Bricks')}
                    className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold py-2 rounded-xl flex items-center justify-center gap-2 transition-all text-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Request Quote
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="font-serif text-xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
              Premium Raw Materials
            </h2>
            <div className="h-1.5 w-16 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full" />
            <p className="text-foreground/70 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
              We use only the highest grade components to ensure superior strength and longevity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: 'Cement',
                desc: 'OPC 43 / OPC 53 Grade',
                detail: 'Ensures superior binding and high structural strength.',
                icon: '🏗️',
                image: '/cement-bg.png',
              },
              {
                title: 'M-Sand / River Sand',
                desc: 'Fine Aggregate',
                detail: 'Provides a smooth, flawless finish to every brick.',
                icon: '⏳',
                image: '/sand-bg.png',
              },
              {
                title: 'Stone Dust / Grit',
                desc: '6–10 mm Coarse Aggregate',
                detail: 'Crucial for maximum load-bearing capacity and durability.',
                icon: '🪨',
                image: '/stone-bg.png',
              },
              {
                title: 'Colour Oxide',
                desc: 'Red, Yellow, Black, Grey, Green',
                detail: 'Premium pigments used for the top layer to ensure vibrant, long-lasting colors.',
                icon: '🎨',
                image: '/oxide-bg.png',
              },
              {
                title: 'Chemical Admixture',
                desc: 'Plasticizer / Hardener',
                detail: 'Enhances strength, adds shine, and improves water resistance.',
                icon: '🧪',
                image: '/chemical-bg.png',
              },
              {
                title: 'Lime',
                desc: 'Essential Binder',
                detail: 'Used for optimizing the mix consistency and quality.',
                icon: '🌫️',
                image: '/lime-bg.png',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden bg-white rounded-xl p-6 shadow-sm border border-border/50 hover:shadow-md transition-all flex flex-col items-center text-center"
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0 bg-secondary/10">
                  <Image
                    src={item.image}
                    alt={`${item.title} texture`}
                    fill
                    className="object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-500 mix-blend-multiply"
                  />
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-1">{item.title}</h3>
                  <p className="text-primary font-medium text-sm mb-2">{item.desc}</p>
                  <p className="text-foreground/70 text-sm leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Enquiry Modal */}
      <OrderEnquiryModal
        isOpen={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
        productName={selectedProduct}
      />
    </>
  );
}
