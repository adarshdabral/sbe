import Image from 'next/image';
import { Card } from '@/components/ui/card';

export function AboutUs() {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-3 sm:space-y-4 md:space-y-6">
            <div>
              <h2 className="font-serif text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2 sm:mb-3 md:mb-4 leading-tight">
                About Us
              </h2>
              <div className="h-1.5 w-16 sm:w-16 md:w-20 bg-gradient-to-r from-primary to-primary/50 rounded-full" />
            </div>
            <p className="text-sm sm:text-base md:text-lg lg:text-lg text-foreground/80 leading-relaxed">
              Balaji Enterprises is a trusted manufacturer of premium interlock tiles and fly ash bricks with over two decades of excellence.
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-lg text-foreground/70 leading-relaxed">
              We serve builders and contractors across the region with quality products at competitive prices, backed by reliable delivery and professional service.
            </p>
          </div>

          {/* Right: Image */}
          <div className="relative h-48 sm:h-72 md:h-80 rounded-2xl overflow-hidden shadow-xl border border-border/50 group">
            <Image
              src="/factory-production.jpg"
              alt="Balaji Enterprises manufacturing facility"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
