import React from 'react';

// Ortak Mentu logosu bileşeni
// Logoyu `public/mentu-logo.png` altında bekliyor.
export const Logo: React.FC<{ className?: string }> = ({ className = "h-10 w-10" }) => (
  <img
    src="/mentu-logo.png"
    alt="Mentu logo"
    className={className + " object-contain"}
  />
);
