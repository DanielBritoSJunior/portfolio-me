// src/components/Button.tsx

import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  href: string;
}

const Button: React.FC<ButtonProps> = ({ children, href }) => {
  return (
    <a
      href={href}
      className="inline-block px-8 py-4 border-2 border-teal-400 rounded font-mono text-teal-400 hover:bg-teal-400 hover:text-blue-950 transition-colors"
    >
      {children}
    </a>
  );
};

export default Button;