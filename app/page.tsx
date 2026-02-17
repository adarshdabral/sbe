'use client';

import { useState } from 'react';
import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { Products } from '@/components/products';
import { WhyChooseUs } from '@/components/why-choose-us';
import { AboutUs } from '@/components/about-us';
import { ChatWidget } from '@/components/chat-widget';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  return (
    <main className="min-h-screen bg-background">
      <Header isScrolled={isScrolled} />
      <Hero />
      <Products />
      <WhyChooseUs />
      <AboutUs />
      <Contact />
      <ChatWidget />
      <Footer />
    </main>
  );
}
