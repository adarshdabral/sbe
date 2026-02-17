import { Check, Truck, Award, Zap } from 'lucide-react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';

export function WhyChooseUs() {
  const features = [
    {
      icon: Award,
      title: 'Quality',
      description: 'Rigorous quality standards',
      image: '/quality-testing.jpg',
    },
    {
      icon: Truck,
      title: 'Bulk Support',
      description: 'Flexible ordering options',
      image: '/project-showcase.jpg',
    },
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Quick turnaround times',
      image: '/construction-site-complete.jpg',
    },
    {
      icon: Check,
      title: 'Best Prices',
      description: 'Competitive pricing',
      image: '/hero-background.jpg',
    },
  ];

  return (
    <section id="why-choose-us" className="py-12 sm:py-16 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-24">
          <h2 className="font-serif text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2 sm:mb-3 md:mb-4 leading-tight">
            Why Choose Us
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-foreground/70 leading-relaxed max-w-2xl mx-auto px-1">
            Premium quality and reliable service, every time.
          </p>
          <div className="h-1.5 w-16 sm:w-20 md:w-24 bg-gradient-to-r from-primary to-primary/50 mt-3 sm:mt-4 md:mt-6 mx-auto rounded-full" />
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-12">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="group rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-500 border border-border/50"
              >
                <div className="relative h-32 sm:h-48 md:h-56 overflow-hidden">
                  <Image
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-3 sm:p-4 md:p-7">
                  <div className="flex items-center gap-2 sm:gap-3 md:gap-4 mb-2 sm:mb-3 md:mb-4">
                    <div className="flex items-center justify-center w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 rounded-lg bg-primary/10 flex-shrink-0">
                      <Icon className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 text-primary" />
                    </div>
                    <h3 className="text-sm sm:text-base md:text-lg font-semibold text-foreground">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-xs text-foreground/70 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
