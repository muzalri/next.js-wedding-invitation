"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function FloatingElements() {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    // Generate elegant floating petals and leaves
    const generateElements = () => {
      const items = [];
      const images = [
        '/images/divider-flower.png',
        '/images/divider-leaves.png'
      ];
      
      // Fewer elements for more elegance (10 instead of 12)
      for (let i = 0; i < 10; i++) {
        items.push({
          id: i,
          image: images[i % 2],
          left: Math.random() * 100,
          delay: Math.random() * 15,
          duration: 25 + Math.random() * 20,
          size: 30 + Math.random() * 40,
          rotation: Math.random() * 360,
          opacity: 0.2 + Math.random() * 0.3
        });
      }
      setElements(items);
    };

    generateElements();
  }, []);

  return (
    <>
      <style jsx>{`
        @keyframes elegant-fall {
          0% {
            transform: translateY(-150px) translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(110vh) translateX(100px) rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes gentle-sway {
          0%, 100% {
            transform: translateX(0) rotate(0deg);
          }
          25% {
            transform: translateX(-15px) rotate(-5deg);
          }
          50% {
            transform: translateX(0) rotate(0deg);
          }
          75% {
            transform: translateX(15px) rotate(5deg);
          }
        }
      `}</style>

      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
        overflow: 'hidden'
      }}>
        {elements.map((element) => (
          <div
            key={element.id}
            style={{
              position: 'absolute',
              left: `${element.left}%`,
              top: '-150px',
              width: `${element.size}px`,
              height: `${element.size}px`,
              animationName: 'elegant-fall, gentle-sway',
              animationDuration: `${element.duration}s, 4s`,
              animationDelay: `${element.delay}s, 0s`,
              animationIterationCount: 'infinite, infinite',
              animationTimingFunction: 'linear, ease-in-out',
              opacity: element.opacity
            }}
          >
            <Image
              src={element.image}
              alt="Flower petal"
              width={element.size}
              height={element.size}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                filter: 'blur(0.5px) brightness(1.1)',
                transform: `rotate(${element.rotation}deg)`
              }}
            />
          </div>
        ))}
      </div>
    </>
  );
}
