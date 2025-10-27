"use client";

import Image from 'next/image';

export default function CornerDecorations() {
  return (
    <>
      <style jsx>{`
        @keyframes gentle-sway {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-8px) rotate(1deg);
          }
        }

        @keyframes gentle-sway-reverse {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-8px) rotate(-1deg);
          }
        }
      `}</style>

      {/* Top Left Corner */}
      <div style={{
        position: 'fixed',
        top: '-30px',
        left: '-30px',
        width: '350px',
        height: '350px',
        pointerEvents: 'none',
        zIndex: 5,
        animationName: 'gentle-sway',
        animationDuration: '8s',
        animationIterationCount: 'infinite',
        animationTimingFunction: 'ease-in-out',
        opacity: 0.9
      }}>
        <Image
          src="/images/flower-corner.svg"
          alt="Flower decoration"
          width={350}
          height={350}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))'
          }}
        />
      </div>

      {/* Top Right Corner */}
      <div style={{
        position: 'fixed',
        top: '-30px',
        right: '-30px',
        width: '350px',
        height: '350px',
        pointerEvents: 'none',
        zIndex: 5,
        transform: 'scaleX(-1)',
        animationName: 'gentle-sway-reverse',
        animationDuration: '8s',
        animationDelay: '1s',
        animationIterationCount: 'infinite',
        animationTimingFunction: 'ease-in-out',
        opacity: 0.9
      }}>
        <Image
          src="/images/flower-corner.svg"
          alt="Flower decoration"
          width={350}
          height={350}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))'
          }}
        />
      </div>

      {/* Bottom Left Corner */}
      <div style={{
        position: 'fixed',
        bottom: '50px',
        left: '-30px',
        width: '300px',
        height: '300px',
        pointerEvents: 'none',
        zIndex: 5,
        transform: 'scaleY(-1)',
        animationName: 'gentle-sway',
        animationDuration: '8s',
        animationDelay: '2s',
        animationIterationCount: 'infinite',
        animationTimingFunction: 'ease-in-out',
        opacity: 0.85
      }}>
        <Image
          src="/images/flower-corner.svg"
          alt="Flower decoration"
          width={300}
          height={300}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))'
          }}
        />
      </div>

      {/* Bottom Right Corner */}
      <div style={{
        position: 'fixed',
        bottom: '50px',
        right: '-30px',
        width: '300px',
        height: '300px',
        pointerEvents: 'none',
        zIndex: 5,
        transform: 'scale(-1, -1)',
        animationName: 'gentle-sway-reverse',
        animationDuration: '8s',
        animationDelay: '3s',
        animationIterationCount: 'infinite',
        animationTimingFunction: 'ease-in-out',
        opacity: 0.85
      }}>
        <Image
          src="/images/flower-corner.svg"
          alt="Flower decoration"
          width={300}
          height={300}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))'
          }}
        />
      </div>
    </>
  );
}
