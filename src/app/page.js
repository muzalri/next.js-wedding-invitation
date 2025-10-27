"use client";

import { useState } from "react";
import CoverPage from "@/components/CoverPage";
import AudioPlayer from "@/components/AudioPlayer";
import HeroSection from "@/components/HeroSection";
import CoupleSection from "@/components/CoupleSection";
import EventDetails from "@/components/EventDetails";
import Gallery from "@/components/Gallery";
import Timeline from "@/components/Timeline";
import WishesForm from "@/components/WishesForm";
import GiftRegistry from "@/components/GiftRegistry";
import FloatingNavigation from "@/components/FloatingNavigation";
import FloatingElements from "@/components/FloatingElements";
import CornerDecorations from "@/components/CornerDecorations";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [musicAllowed, setMusicAllowed] = useState(false);

  return (
    <>
      {/* Cover Section - Initially visible */}
      <section className={`fixed inset-0 z-50 transition-all duration-1000 ease-in-out ${isOpen ? 'translate-y-[-100%]' : 'translate-y-0'}`}>
        <div className="absolute inset-0 backdrop-blur-sm z-10 bg-cream/30"></div>
        <CoverPage onOpen={() => {
          setIsOpen(true);
          setMusicAllowed(true);
        }} />
      </section>
      
      {/* Audio Player */}
      {isOpen && (
        <AudioPlayer 
          src="/audio/wedding-song.mp3" 
          autoPlayOnOpen={musicAllowed}
        />
      )}

      {/* Main Content - Visible after clicking "Open Invitation" */}
      <main className="bg-cream text-brown overflow-x-hidden overflow-y-auto h-screen">
        {/* Floating Elements - Flowers, Leaves, Butterflies */}
        {isOpen && <FloatingElements />}
        
        {/* Corner Decorations */}
        {isOpen && <CornerDecorations />}
        
        {/* Floating Navigation */}
        <FloatingNavigation />
        
        {/* Hero Section */}
        <section id="home">
          <HeroSection />
        </section>

        {/* Couple Section */}
        <section id="couple">
          <CoupleSection />
        </section>

        {/* Event Details Section */}
        <section id="event">
          <EventDetails />
        </section>

        {/* Gallery Section */}
        <section id="gallery">
          <Gallery />
        </section>

        {/* Timeline Section */}
        <section id="story">
          <Timeline />
        </section>

        {/* Wishes Form Section */}
        <section id="wishes">
          <WishesForm />
        </section>

        {/* Gift Registry Section */}
        <section id="gift">
          <GiftRegistry />
        </section>

        {/* Footer */}
        <footer className="py-16 px-6 text-center bg-cream relative">
          <div className="absolute inset-0 bg-[url('/images/flowers-and-leaves.png')] bg-repeat opacity-5"></div>
          <div className="relative z-10 pt-8">
            <div className="mb-8">
              <svg viewBox="0 0 100 100" className="w-24 h-24 mx-auto animate-float">
                <path d="M50 40 C 40 40, 35 45, 35 55 C 35 60, 40 65, 50 65 C 60 65, 65 60, 65 55 C 65 45, 60 40, 50 40 Z" fill="var(--gold)" opacity="0.8" />
              </svg>
            </div>
            <p className="font-dancing text-2xl md:text-3xl text-gold mb-3">Terima Kasih</p>
            <p className="font-greatvibes text-3xl md:text-5xl text-brown mb-4">Indah & Buha</p>
            <div className="w-20 h-0.5 bg-gold/60 mx-auto mb-6"></div>
            <p className="text-sm text-brown/70 mb-8">
              Merupakan suatu kehormatan dan kebahagiaan bagi kami<br />
              apabila Bapak/Ibu/Saudara/i berkenan hadir<br />
              untuk memberikan doa restu kepada kami.
            </p>
            <div className="text-xs text-brown/50">
              <p>© 2025 Indah & Buha Wedding</p>
              <p className="mt-2">Made with ❤️</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
