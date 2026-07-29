'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

export interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
  email?: string;
}

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{ translateY: '-50%' }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: 'linear',
          repeatType: 'loop',
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role, email }, i) => (
                <div
                  className="p-6 rounded-3xl border border-white/10 bg-black/40 backdrop-blur-sm shadow-lg max-w-xs w-full text-white"
                  key={i}
                >
                  <div className="text-white/80 text-sm leading-relaxed">{text}</div>
                  <div className="flex items-center gap-2 mt-5">
                    <img
                      width={40}
                      height={40}
                      src={image}
                      alt={name}
                      className="h-10 w-10 rounded-full"
                    />
                    <div className="flex flex-col flex-1 min-w-0">
                      <div className="font-medium tracking-tight leading-5 truncate">{name}</div>
                      <div className="leading-5 text-white/50 tracking-tight text-[13px] truncate">{role}</div>
                    </div>
                    {email && (
                      <a
                        href={`mailto:${email}`}
                        aria-label={`Email ${name}`}
                        title={`Email ${name}`}
                        className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors"
                      >
                        <Mail size={16} />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
