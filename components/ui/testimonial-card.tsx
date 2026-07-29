'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface Stat {
  value: string;
  label: string;
}

export interface Testimonial {
  name: string;
  title: string;
  quote?: string;
  avatarSrc: string;
  rating: number;
}

export interface ClientsSectionProps {
  tagLabel: string;
  title: string;
  description: string;
  stats: Stat[];
  testimonials: Testimonial[];
  className?: string;
}

const StatCard = ({ value, label }: Stat) => (
  <div className="bg-white/5 border border-white/10 text-center rounded-xl p-4">
    <p className="text-2xl font-bold text-white">{value}</p>
    <p className="text-xs text-white/50">{label}</p>
  </div>
);

const StickyTestimonialCard = ({ testimonial, index }: { testimonial: Testimonial; index: number }) => {
  return (
    <motion.div className="sticky w-full" style={{ top: `${16 + index * 22}px` }}>
      <div className="p-6 rounded-2xl shadow-lg flex flex-col w-full bg-[#141418] border border-white/10">
        <div className="flex items-center gap-4">
          <div
            className="w-14 h-14 rounded-xl bg-cover bg-center flex-shrink-0"
            style={{ backgroundImage: `url(${testimonial.avatarSrc})` }}
            aria-label={`${testimonial.name}`}
          />
          <div className="flex-grow min-w-0">
            <p className="font-semibold text-lg text-white leading-tight">{testimonial.name}</p>
            <p className="text-sm text-white/50">{testimonial.title}</p>
          </div>
        </div>

        <div className="flex items-center gap-2 my-4">
          <span className="font-bold text-base text-white">{testimonial.rating.toFixed(1)}</span>
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={cn(
                  'h-4 w-4',
                  i < Math.floor(testimonial.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-white/20',
                )}
              />
            ))}
          </div>
        </div>

        {testimonial.quote && <p className="text-sm text-white/70 leading-relaxed">{testimonial.quote}</p>}
      </div>
    </motion.div>
  );
};

export const ClientsSection = ({
  tagLabel,
  title,
  description,
  stats,
  testimonials,
  className,
}: ClientsSectionProps) => {
  const scrollContainerHeight = `${testimonials.length * 190 + 60}px`;

  return (
    <section className={cn('w-full text-white', className)}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Left: sticky */}
        <div className="flex flex-col gap-5 lg:sticky lg:top-4">
          <div className="inline-flex items-center gap-2 self-start rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm">
            <div className="h-2 w-2 rounded-full bg-green-500" />
            <span className="text-white/60">{tagLabel}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
          <p className="text-white/60 leading-relaxed">{description}</p>
          <div className="grid grid-cols-3 gap-3 mt-2">
            {stats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </div>

        {/* Right: stacking cards */}
        <div className="relative flex flex-col gap-4" style={{ height: scrollContainerHeight }}>
          {testimonials.map((testimonial, index) => (
            <StickyTestimonialCard key={testimonial.name} index={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};
