"use client";

import { useRef, useState } from 'react';

export default function RSVPForm() {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attending: '',
    guests: 1,
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    
    // Show success message and reset form
    setIsSubmitted(true);
    formRef.current.reset();
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <div className="max-w-md mx-auto text-center relative">
      <div className="relative z-10">
        <h2 className="font-greatvibes text-3xl md:text-5xl text-gold mb-6">Konfirmasi Kehadiran</h2>
        <div className="w-16 h-0.5 bg-gold mx-auto mb-8"></div>
        
        {isSubmitted && (
          <div className="mb-6 p-4 bg-gold text-brown rounded">
            <p className="font-medium">Terima kasih! Konfirmasi kehadiran Anda telah dikirim.</p>
          </div>
        )}
      </div>
        
      {/* Flower decoration */}
      <div className="absolute -top-10 -left-10 w-20 h-20 bg-[url('/images/flower-corner.svg')] bg-contain bg-no-repeat opacity-70 hidden sm:block"></div>
      <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-[url('/images/flower-corner.svg')] bg-contain bg-no-repeat opacity-70 rotate-180 hidden sm:block"></div>
      
      <form ref={formRef} className="space-y-4 bg-brown p-5 sm:p-6 rounded border border-gold/30 relative shadow-lg z-10" onSubmit={handleSubmit}>
        <div>
          <input 
            type="text" 
            name="name"
            placeholder="Nama Anda" 
            className="w-full p-3 bg-cream text-brown rounded border border-gold/30 focus:outline-none focus:border-gold"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input 
            type="email" 
            name="email"
            placeholder="Email Anda" 
            className="w-full p-3 bg-cream text-brown rounded border border-gold/30 focus:outline-none focus:border-gold"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <select 
            name="attending"
            className="w-full p-3 bg-cream text-brown rounded border border-gold/30 focus:outline-none focus:border-gold appearance-none"
            onChange={handleChange}
            required
          >
            <option value="">Apakah Anda akan hadir?</option>
            <option value="yes">Ya, saya akan hadir</option>
            <option value="no">Maaf, saya tidak bisa hadir</option>
          </select>
        </div>
        <div>
          <input 
            type="number" 
            name="guests"
            placeholder="Jumlah Tamu" 
            className="w-full p-3 bg-cream text-brown rounded border border-gold/30 focus:outline-none focus:border-gold"
            onChange={handleChange}
            min="1"
            max="10"
            required
          />
        </div>
        <div>
          <textarea 
            name="message"
            placeholder="Pesan Anda" 
            className="w-full p-3 bg-cream text-brown rounded border border-gold/30 focus:outline-none focus:border-gold h-28"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="pt-3">
          <button 
            type="submit" 
            className="w-full p-3 bg-gold text-brown font-medium rounded-lg hover:bg-cream hover:text-gold border border-transparent hover:border-gold/50 transition-all duration-300 shadow-md"
          >
            Kirim Konfirmasi
          </button>
        </div>
      </form>
    </div>
  );
}