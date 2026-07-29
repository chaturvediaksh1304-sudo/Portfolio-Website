import React from 'react';
import { REFERENCES } from '../constants';
import { TestimonialsColumn, type Testimonial } from '../components/ui/testimonials-columns';

// Factual mapping — relationship as the card text (no invented quotes);
// initials avatars via ui-avatars (no real photos).
const TESTIMONIALS: Testimonial[] = REFERENCES.map((r) => ({
  text: r.relationship + (r.location ? ` · ${r.location}` : ''),
  name: r.name,
  role: `${r.occupation}${r.organization ? ` · ${r.organization}` : ''}`,
  image: `https://ui-avatars.com/api/?name=${encodeURIComponent(r.name)}&background=1c1c24&color=ffffff&bold=true`,
  email: r.email,
}));

const col1 = TESTIMONIALS.filter((_, i) => i % 2 === 0);
const col2 = TESTIMONIALS.filter((_, i) => i % 2 === 1);

export default function ReferencesApp() {
  return (
    <div className="p-6 md:p-8 text-white font-brother">
      <h2 className="text-3xl font-light mb-1">References</h2>
      <p className="text-white/50 mb-6">
        People who’ll vouch — supervisors, professors, and colleagues.
      </p>

      <div className="relative h-[440px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]">
        <div className="flex justify-center gap-6">
          <TestimonialsColumn testimonials={col1} duration={24} />
          <TestimonialsColumn testimonials={col2} duration={30} className="hidden md:block" />
        </div>
      </div>
    </div>
  );
}
