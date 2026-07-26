import React from 'react';

// Liquid-glass button (spec §5): wrap → button → text layers.
export default function GlassButton({
  children,
  onClick,
  className = '',
  title,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  title?: string;
}) {
  return (
    <span className="inline-flex">
      <button
        onClick={onClick}
        title={title}
        className={`glass-surface rounded-full px-4 py-2 text-sm text-white flex items-center gap-2 transition-transform active:scale-95 ${className}`}
      >
        {children}
      </button>
    </span>
  );
}
