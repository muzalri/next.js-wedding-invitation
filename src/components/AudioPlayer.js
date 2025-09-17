"use client";

import { useState, useEffect, useRef } from 'react';

// Add custom animation and styles
const customStyles = `
@keyframes ping-slow {
  0% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.5);
    opacity: 0.2;
  }
  100% {
    transform: scale(1.8);
    opacity: 0;
  }
}

.animate-ping-slow {
  animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
}

.audio-button {
  border-radius: 50% !important;
  aspect-ratio: 1 / 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
`;

export default function AudioPlayer({ src = "/audio/wedding-song.mp3", autoPlayOnOpen = false }) {
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);
  
  // Inject custom styles
  useEffect(() => {
    // Create style element
    const styleElement = document.createElement('style');
    styleElement.innerHTML = customStyles;
    document.head.appendChild(styleElement);
    
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  useEffect(() => {
    if (!audioRef.current) return;

    // Set initial volume
    audioRef.current.volume = 0.5;

    // Setup audio events
    const audio = audioRef.current;
    
    const handleEnded = () => {
      audio.currentTime = 0;
      audio.play();
    };

    audio.addEventListener('ended', handleEnded);

    // Clean up
    return () => {
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  // Handle autoplay when opening the invitation
  useEffect(() => {
    if (autoPlayOnOpen && audioRef.current) {
      const playPromise = audioRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          // Auto-play was prevented
          console.log('Auto-play was prevented');
        });
      }
    }
  }, [autoPlayOnOpen]);

  const toggleMute = () => {
    if (!audioRef.current) return;
    
    if (isMuted) {
      // Unmute - restore previous volume
      audioRef.current.volume = 0.5;
    } else {
      // Mute
      audioRef.current.volume = 0;
    }
    
    setIsMuted(!isMuted);
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <audio ref={audioRef} src={src} loop autoPlay />
      
      {/* Single Audio Button - Mute/Unmute only */}
      <button
        onClick={toggleMute}
        className="audio-button w-16 h-16 bg-brown hover:bg-brown/90 text-cream rounded-full shadow-xl transition-all duration-300 border-2 border-gold/50 backdrop-blur-sm group flex items-center justify-center overflow-hidden"
        aria-label={isMuted ? 'Unmute music' : 'Mute music'}
        style={{ 
          boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
          borderRadius: '50%',
          aspectRatio: '1',
          width: '64px',
          height: '64px',
          transition: 'transform 0.3s ease-in-out, background-color 0.3s ease'
        }}
      >
        <div className="relative w-8 h-8 flex items-center justify-center">
          {/* Speaker Base - Always Visible */}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-8 w-8 transition-all duration-300" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217z" clipRule="evenodd" />
          </svg>
          
          {/* Sound Waves with Animation - Only visible when not muted */}
          <div className={`absolute inset-0 transition-all duration-500 ${isMuted ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`}>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-8 w-8" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M0 0h24v24H0z" fill="none" stroke="none" />
              <path d="M15 8a5 5 0 0 1 0 8" className="animate-pulse" style={{ animationDuration: '1.5s' }} />
              <path d="M17.7 5a9 9 0 0 1 0 14" className="animate-pulse" style={{ animationDuration: '1.8s', animationDelay: "0.3s" }} />
            </svg>
          </div>
          
          {/* X Mark with Animation - Only visible when muted */}
          <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${isMuted ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-0 rotate-90'}`}>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-8 w-8" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
        </div>
        
        {/* Gold border animation on hover */}
        <span className="absolute inset-0 rounded-full border-2 border-gold/0 group-hover:border-gold/60 transition-all duration-500 group-hover:scale-110 opacity-0 group-hover:opacity-100" style={{ borderRadius: '50%' }}></span>
        
        {/* Pulse animation for active state */}
        <span className={`absolute inset-0 rounded-full bg-gold/20 transform scale-50 opacity-0 transition-all duration-700 ${!isMuted ? 'animate-ping-slow' : ''}`} style={{ borderRadius: '50%' }}></span>
      </button>
    </div>
  );
}