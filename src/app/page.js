"use client";

import Image from "next/image";
import { useState } from "react";
import Countdown from "@/components/Countdown";
import RSVPForm from "@/components/RSVPForm";
import CoverPage from "@/components/CoverPage";
import AudioPlayer from "@/components/AudioPlayer";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [musicAllowed, setMusicAllowed] = useState(false);

  // Set wedding date - example: December 21, 2025
  const weddingDate = "2025-12-21T08:00:00";
  
  // Function to scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
        {/* Fixed Navigation */}
        <nav className="fixed bottom-5 left-1/2 transform -translate-x-1/2 z-40 flex space-x-3 px-3 py-2.5 rounded-full bg-brown/90 backdrop-blur-md shadow-lg border border-gold/40">
          <button onClick={() => scrollToSection('home')} className="w-10 h-10 rounded-full bg-gold/80 flex items-center justify-center text-brown hover:bg-gold hover:scale-110 transition-all duration-300">
            <span className="sr-only">Home</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </button>
          <button onClick={() => scrollToSection('couple')} className="w-10 h-10 rounded-full bg-cream/80 flex items-center justify-center text-brown hover:bg-gold hover:scale-110 transition-all duration-300">
            <span className="sr-only">Couple</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
          <button onClick={() => scrollToSection('event')} className="w-10 h-10 rounded-full bg-cream/80 flex items-center justify-center text-brown hover:bg-gold hover:scale-110 transition-all duration-300">
            <span className="sr-only">Event</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </button>
          <button onClick={() => scrollToSection('gallery')} className="w-10 h-10 rounded-full bg-cream/80 flex items-center justify-center text-brown hover:bg-gold hover:scale-110 transition-all duration-300">
            <span className="sr-only">Gallery</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </button>
          <button onClick={() => scrollToSection('rsvp')} className="w-10 h-10 rounded-full bg-cream/80 flex items-center justify-center text-brown hover:bg-gold hover:scale-110 transition-all duration-300">
            <span className="sr-only">RSVP</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </button>
        </nav>
        
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-16 bg-cream relative">
          <div className="absolute inset-0 bg-[url('/images/flowers-and-leaves.png')] bg-repeat opacity-5"></div>
          <div className="max-w-4xl mx-auto w-full relative z-10 animate-fadeIn flex flex-col items-center justify-center">
            <div className="w-64 md:w-80 mx-auto mb-6 flex justify-center">
              <Image 
                src="/images/bismillah.png" 
                alt="Bismillahirrahmanirrahim" 
                width={320}
                height={100}
                className="w-full h-auto"
                priority
              />
            </div>
            <h3 
            style={{
              fontSize: "clamp(3rem, 2.5rem + 3vw, 5.5rem)",
              fontWeight: "500",
              letterSpacing: "0.05em"
            }}
            className="font-dancing text-gold mb-4 animate-fadeSlideDown font-bold text-3xl md:text-5xl">Pernikahan</h3>
            <h1  className="font-greatvibes text-5xl md:text-7xl text-brown my-6 animate-fadeSlideUp"
            style={{
              fontSize: "clamp(3rem, 2.5rem + 3vw, 5.5rem)",
              fontWeight: "500",
              letterSpacing: "0.05em"
            }}>Silvi & Isal</h1>
            <p 
            style={{
              marginTop: "0,5rem",
              marginBottom: "0,5rem"
            }}
            className="font-roboto text-2xl md:text-3xl text-brown mb-8 animate-fadeIn">21.12.2025</p>
            <div className="flex justify-center w-full">
              <Countdown targetDate={weddingDate} />
            </div>
            <div 
            style={{ marginTop : "1rem",
                     marginBottom : "0.5rem"         }}
            className="mt-12 mb-4 flex justify-center">
              <Image 
                src="/images/divider-flower.png" 
                alt="Divider" 
                width={200}
                height={30}
                className="mx-auto w-40 md:w-48 h-auto opacity-80"
              />
            </div>
          </div>
        </section>

        {/* Couple Section */}
        <section className="py-20 px-6 bg-cream relative flex items-center justify-center" id="couple">
          <div className="absolute inset-0 bg-[url('/images/flowers-and-leaves.png')] bg-repeat opacity-5"></div>
          <div className="max-w-5xl mx-auto text-center relative z-10">
            {/* Decorative elements */}
            <div className="flex justify-center mb-8">
              <Image 
                src="/images/divider-flowers-leaves.png" 
                alt="Divider" 
                width={180}
                height={40}
                className="w-40 md:w-48 h-auto opacity-70"
              />
            </div>
            <h2 
              className="font-greatvibes text-brown mb-6"
              style={{
                fontSize: "clamp(2.5rem, 2rem + 2vw, 4rem)",
                fontWeight: "500",
                letterSpacing: "0.05em"
              }}
            >
              Mempelai
            </h2>
            <div className="w-28 h-0.5 bg-gold/80 mx-auto mb-12"></div>
            
            {/* Couple Cards Container */}
            <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 md:gap-16">
              {/* Bride Card */}
              <div className="bride p-6 sm:p-8 bg-white rounded-2xl border-2 border-gold/20 shadow-lg relative w-full md:w-1/2 max-w-md transition-all duration-500 hover:shadow-xl hover:border-gold/40">
                {/* Corner decorations */}
                <div className="absolute top-0 left-0 w-16 sm:w-20 h-16 sm:h-20 bg-[url('/images/flower-corner.svg')] bg-no-repeat bg-contain opacity-30"></div>
                <div className="absolute bottom-0 right-0 w-16 sm:w-20 h-16 sm:h-20 bg-[url('/images/flower-corner.svg')] bg-no-repeat bg-contain opacity-30 rotate-180"></div>
                
                {/* Photo container with gold ring effect */}
                <div className="relative mx-auto mb-6 group">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gold/40 to-gold/10 transform scale-105 group-hover:scale-110 transition-transform duration-500"></div>
                  <div className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden mx-auto border-4 border-gold/30 shadow-lg flex items-center justify-center relative z-10">
                    {/* Photo placeholder */}
                    <div className="h-full w-full flex items-center justify-center text-gray-400 bg-cream/50">Foto</div>
                  </div>
                </div>
                
                {/* Bride details with enhanced typography */}
                <h3 className="font-greatvibes text-4xl sm:text-5xl text-gold mb-3">Silvia Nur Ardiansyah</h3>
                <p className="text-base text-brown/70 mb-2 italic">Putri dari</p>
                <p className="font-medium text-lg text-brown">Bapak Saiful Bachri & Ibu Yeni Nurdiansyah</p>
              </div>
              
              {/* Decorative "&" symbol for larger screens */}
              <div className="hidden md:flex items-center justify-center">
                <span className="font-greatvibes text-6xl text-gold opacity-80">&</span>
              </div>
              
              {/* Groom Card */}
              <div className="groom p-6 sm:p-8 bg-white rounded-2xl border-2 border-gold/20 shadow-lg relative w-full md:w-1/2 max-w-md transition-all duration-500 hover:shadow-xl hover:border-gold/40">
                {/* Corner decorations */}
                <div className="absolute top-0 right-0 w-16 sm:w-20 h-16 sm:h-20 bg-[url('/images/flower-corner.svg')] bg-no-repeat bg-contain opacity-30 rotate-90"></div>
                <div className="absolute bottom-0 left-0 w-16 sm:w-20 h-16 sm:h-20 bg-[url('/images/flower-corner.svg')] bg-no-repeat bg-contain opacity-30 -rotate-90"></div>
                
                {/* Photo container with gold ring effect */}
                <div className="relative mx-auto mb-6 group">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gold/40 to-gold/10 transform scale-105 group-hover:scale-110 transition-transform duration-500"></div>
                  <div className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden mx-auto border-4 border-gold/30 shadow-lg flex items-center justify-center relative z-10">
                    {/* Photo placeholder */}
                    <div className="h-full w-full flex items-center justify-center text-gray-400 bg-cream/50">Foto</div>
                  </div>
                </div>
                
                {/* Groom details with enhanced typography */}
                <h3 className="font-greatvibes text-4xl sm:text-5xl text-gold mb-3">Isal</h3>
                <p className="text-base text-brown/70 mb-2 italic">Putra dari</p>
                <p className="font-medium text-lg text-brown">Bapak & Ibu Isal</p>
              </div>
            </div>
          </div>
        </section>

        {/* Event Details Section */}
        <section className="py-16 px-6 bg-brown text-cream relative flex items-center justify-center" id="event">
          <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="mb-6">
              <Image 
                src="/images/divider1-white.png" 
                alt="Divider" 
                width={150}
                height={30}
                className="mx-auto w-32 h-auto opacity-80"
              />
            </div>
            <h2 className="font-greatvibes text-4xl md:text-5xl mb-8"
            style={{
                fontSize: "clamp(2.5rem, 2rem + 2vw, 4rem)",
                fontWeight: "500",
                letterSpacing: "0.05em"
              }}>Acara Pernikahan</h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mb-10"></div>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div className="ceremony p-5 sm:p-6 border border-gold/60 rounded-lg bg-brown/80 backdrop-blur-sm relative">
                {/* Flower decoration */}
                <div className="absolute -top-4 -left-4 w-12 sm:w-16 h-12 sm:h-16 bg-[url('/images/flower-corner.svg')] bg-contain bg-no-repeat opacity-70 hidden sm:block"></div>
                <div className="absolute -bottom-4 -right-4 w-12 sm:w-16 h-12 sm:h-16 bg-[url('/images/flower-corner.svg')] bg-contain bg-no-repeat opacity-70 rotate-180 hidden sm:block"></div>
                
                <div className="relative z-10">
                  <h3 
                  style={{fontSize: "1.5rem"}}
                  className="font-greatvibes text-3xl sm:text-4xl text-gold mb-3">Akad Nikah</h3>
                  <div className="w-20 h-0.5 bg-gold/60 mx-auto mb-4"></div>
                  <div className="space-y-3">
                    <p className="mb-1 text-lg"><strong className="text-gold">Tanggal:</strong> Minggu, 21 Desember 2025</p>
                    <p className="mb-1 text-lg"><strong className="text-gold">Waktu:</strong> 08:00 WIB</p>
                  </div>
                </div>
              </div>
              <div className="reception p-5 sm:p-6 border border-gold/60 rounded-lg bg-brown/80 backdrop-blur-sm relative">
                {/* Flower decoration */}
                <div className="absolute -top-4 -left-4 w-12 sm:w-16 h-12 sm:h-16 bg-[url('/images/flower-corner.svg')] bg-contain bg-no-repeat opacity-70 hidden sm:block"></div>
                <div className="absolute -bottom-4 -right-4 w-12 sm:w-16 h-12 sm:h-16 bg-[url('/images/flower-corner.svg')] bg-contain bg-no-repeat opacity-70 rotate-180 hidden sm:block"></div>
                
                <div className="relative z-10">
                  <h3
                   style={{fontSize: "1.5rem"}}
                  className="font-greatvibes text-3xl sm:text-4xl text-gold mb-3">Resepsi</h3>
                  <div className="w-20 h-0.5 bg-gold/60 mx-auto mb-4"></div>
                  <div className="space-y-3">
                    <p className="mb-1 text-lg"><strong className="text-gold">Tanggal:</strong> minggu, 21 Desember 2025</p>
                    <p className="mb-1 text-lg"><strong className="text-gold">Waktu:</strong> 13:00 WIB</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Location Section */}
         <section className="py-20 px-6 bg-cream relative flex flex-col items-center justify-center" id="lokasi">
          <div className="absolute inset-0 bg-[url('/images/flowers-and-leaves.png')] bg-repeat opacity-5"></div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-24 h-24 md:w-32 md:h-32 bg-[url('/images/flower-corner.svg')] bg-no-repeat bg-contain opacity-20"></div>
          <div className="absolute bottom-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-[url('/images/flower-corner.svg')] bg-no-repeat bg-contain opacity-20 rotate-180"></div>
          
          <div className="max-w-5xl mx-auto text-center relative z-10 w-full">
            <div className="flex justify-center"
            style={{ marginBottom : "1rem",
              marginTop : "1rem"
             }}>
              <Image 
                src="/images/divider-flower.png" 
                alt="Divider" 
                width={150}
                height={30}
                className="mx-auto w-36 h-auto opacity-80"
              />
            </div>
            <h2 
              className="font-greatvibes text-4xl md:text-5xl text-brown mb-8"
              style={{ textShadow: "1px 1px 3px rgba(139, 69, 19, 0.2)",
                marginBottom : "1rem",
                fontSize: "clamp(2.5rem, 2rem + 2vw, 4rem)",
                fontWeight: "500",
                letterSpacing: "0.05em"
               }}
               
            >Lokasi Acara</h2>
            <div className="w-24 h-0.5 bg-gold mx-auto mb-10"></div>
            

            
            {/* Google Maps Embed with enhanced styling */}
            <div 

            className="mt-8 rounded-xl overflow-hidden shadow-xl border-4 border-gold/20 relative group transform transition-transform hover:scale-[1.01] duration-500">
              <div className="absolute inset-0 bg-gradient-to-b from-gold/20 to-transparent opacity-50 pointer-events-none z-10"></div>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15863.293770064885!2d106.80967534990966!3d-6.608064295517928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c5e77c710065%3A0x88514bbe3e8884cc!2sPPIB%20Bogor!5e0!3m2!1sen!2sid!4v1695040220656!5m2!1sen!2sid" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Acara Pernikahan"
                className="w-full z-0"
              ></iframe>
            </div>
            
            <div 
            style={{ marginTop : "1rem",
                
            }}
            className="mt-10 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">

              <a 
                href="https://www.google.com/maps/place/PPIB+Bogor/@-6.6080643,106.8096753,14.42z/data=!4m6!3m5!1s0x2e69c5e77c710065:0x88514bbe3e8884cc!8m2!3d-6.6075666!4d106.8091148!16s%2Fg%2F11bc7pcbr_?entry=ttu&g_ep=EgoyMDI1MDkxNS4wIKXMDSoASAFQAw%3D%3D" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center px-6 py-3 bg-brown text-gold rounded-full border border-gold/40 hover:bg-gold hover:text-brown transition-colors duration-300 group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 group-hover:animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Petunjuk Arah Lengkap
              </a>
            </div>
            <div 
            style={{ marginTop : "1rem",
              marginBottom : "1rem"
            }}
            className="mt-10 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <a 
                href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Pernikahan%20Silvia%20%26%20Isal&dates=20251221T080000/20251221T130000&details=Kami%20mengundang%20Anda%20ke%20acara%20pernikahan%20Silvia%20dan%20Isal.&location=PPIB%20Bogor,%20-6.6075666,%20106.8091148"
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center px-6 py-3 bg-brown text-gold rounded-full border border-gold/40 hover:bg-gold hover:text-brown transition-colors duration-300 group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 group-hover:animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Simpan ke Kalender
              </a>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 px-6 bg-cream relative flex items-center justify-center" id="gallery">
          <div className="absolute inset-0 bg-[url('/images/flowers-and-leaves.png')] bg-repeat opacity-5"></div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="mb-6 flex justify-center" >
              <Image 
                src="/images/divider-leaves.png" 
                alt="Divider" 
                width={150}
                height={30}
                className="mx-auto w-32 h-auto opacity-70"
              />
            </div>
            <h2 
             style={{fontSize: "3rem",
              marginBottom: "1rem"
             }}
            className="font-greatvibes text-4xl md:text-5xl text-brown">Galeri Kami</h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mb-10"></div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="aspect-square bg-white/80 rounded-lg overflow-hidden flex items-center justify-center text-gray-400 border border-gold/30 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <span className="font-dancing text-brown/70">Foto {item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RSVP Section */}
        <section className="py-16 px-6 bg-brown text-cream relative flex items-center justify-center" id="rsvp">
          <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="text-center mb-6">
              <Image 
                src="/images/divider1-white.png" 
                alt="Divider" 
                width={150}
                height={30}
                className="mx-auto w-32 h-auto opacity-80 rotate-180"
              />
            </div>
            <RSVPForm />
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16 px-6 text-center bg-cream relative">
          <div className="absolute inset-0 bg-[url('/images/flowers-and-leaves.png')] bg-repeat opacity-5"></div>
          <div className="absolute top-0 left-0 w-full">
            <Image 
              src="/images/divider2-top.png" 
              alt="Divider Top" 
              width={1920}
              height={100}
              className="w-full h-auto"
            />
          </div>
          <div className="relative z-10 pt-8">
            <div className="mb-8">
              <Image 
                src="/images/divider-flower.png" 
                alt="Divider" 
                width={200}
                height={30}
                className="mx-auto w-40 h-auto opacity-70 rotate-180"
              />
            </div>
            <p className="font-dancing text-2xl md:text-3xl text-gold mb-3">Terima Kasih</p>
            <p className="font-greatvibes text-3xl md:text-5xl text-brown mb-4">Silvi & Isal</p>
            <div className="w-20 h-0.5 bg-gold/60 mx-auto mb-6"></div>
            <p className="text-sm">&copy; {new Date().getFullYear()} Undangan Pernikahan</p>
          </div>
        </footer>
      </main>
    </>
  );
}
