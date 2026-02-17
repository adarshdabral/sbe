import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-32 bg-background">
      <div className="max-w-5xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-3 sm:space-y-4 md:space-y-6">
            <div>
              <h2 className="font-serif text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2 sm:mb-3 md:mb-4 leading-tight">
                Get in Touch
              </h2>
              <div className="h-1.5 w-16 sm:w-16 md:w-20 bg-gradient-to-r from-primary to-primary/50 rounded-full" />
            </div>
            <p className="text-sm sm:text-base md:text-lg text-foreground/70 leading-relaxed">
              Contact us on WhatsApp for quotes, bulk orders, and delivery.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 sm:space-y-3 md:space-y-4 pt-2 sm:pt-3 md:pt-4">
              <div className="flex gap-2 sm:gap-3 md:gap-4 items-start">
                <div className="flex-shrink-0 mt-0.5 sm:mt-1">
                  <Phone className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                </div>
                <div>
                  <p className="text-foreground font-semibold text-sm md:text-base">+91 79062 65368</p>
                  <p className="text-xs text-foreground/60">WhatsApp Orders</p>
                </div>
              </div>

              <div className="flex gap-2 sm:gap-3 md:gap-4 items-start">
                <div className="flex-shrink-0 mt-0.5 sm:mt-1">
                  <MapPin className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                </div>
                <div>
                  <p className="text-foreground font-semibold text-sm md:text-base">Dayanatpur, Jewar, Gautam Buddha Nagar, Uttar Pradesh 203135</p>
                  <p className="text-xs text-foreground/60">Northern India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - CTA Card */}
          <div className="bg-gradient-to-br from-primary via-primary to-primary/90 rounded-2xl p-4 sm:p-6 md:p-10 text-white shadow-2xl border border-primary/30">
            <div className="space-y-3 sm:space-y-4 md:space-y-6 text-center">
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold font-serif">Order Now</h3>
              </div>

              <a
                href="https://wa.me/917906265368?text=I'm%20interested%20in%20your%20construction%20materials"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button className="w-full bg-white hover:bg-white/95 text-primary font-bold text-sm md:text-base py-2 md:py-3 transition-all shadow-lg hover:shadow-xl">
                  WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
