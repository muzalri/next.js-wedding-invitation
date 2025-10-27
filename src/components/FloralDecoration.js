"use client";

export default function FloralDecoration({ position = "top-left", style = {} }) {
  const positions = {
    "top-left": { top: 0, left: 0, transform: 'rotate(0deg)' },
    "top-right": { top: 0, right: 0, transform: 'rotate(90deg)' },
    "bottom-left": { bottom: 0, left: 0, transform: 'rotate(-90deg)' },
    "bottom-right": { bottom: 0, right: 0, transform: 'rotate(180deg)' }
  };

  return (
    <div style={{
      position: 'absolute',
      pointerEvents: 'none',
      zIndex: 10,
      width: '96px',
      height: '96px',
      ...positions[position],
      ...style
    }}>
      {/* Floral SVG Pattern */}
      <svg
        viewBox="0 0 100 100"
        style={{
          width: '100%',
          height: '100%',
          opacity: 0.7,
          animationName: 'float',
          animationDuration: '6s',
          animationTimingFunction: 'ease-in-out',
          animationIterationCount: 'infinite',
          animationDelay: '0s'
        }}
      >
        {/* Main flower */}
        <path
          d="M50 20 C 40 20, 30 25, 30 35 C 30 40, 32 45, 50 45 C 68 45, 70 40, 70 35 C 70 25, 60 20, 50 20 Z"
          fill="#d4af37"
          opacity="0.6"
        />
        {/* Leaves */}
        <path
          d="M20 50 C 20 35, 30 30, 40 35 C 35 40, 30 45, 30 50 C 30 55, 35 60, 40 65 C 30 70, 20 65, 20 50 Z"
          fill="#6d4c3d"
          opacity="0.5"
        />
        <path
          d="M50 30 C 45 20, 50 10, 55 15 C 52 25, 50 30, 50 35 Z"
          fill="#d4af37"
          opacity="0.4"
        />
      </svg>
      
      {/* Additional decorative elements */}
      <svg
        viewBox="0 0 100 100"
        style={{
          position: 'absolute',
          top: '16px',
          left: '16px',
          width: '64px',
          height: '64px',
          opacity: 0.5,
          animationName: 'float',
          animationDuration: '6s',
          animationTimingFunction: 'ease-in-out',
          animationIterationCount: 'infinite',
          animationDelay: '1s'
        }}
      >
        <circle cx="50" cy="50" r="8" fill="#d4af37" opacity="0.6" />
        <circle cx="50" cy="50" r="4" fill="#6d4c3d" opacity="0.8" />
      </svg>
    </div>
  );
}
