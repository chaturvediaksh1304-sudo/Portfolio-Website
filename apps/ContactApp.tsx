import React from 'react';
import { SOCIAL_LINKS } from '../constants';

export default function ContactApp() {
  return (
    <div className="p-7 md:p-9 text-white">
      <h2 className="text-2xl font-semibold m-0 mb-1">Have a problem worth solving?</h2>
      <p className="text-white/50 mb-6">I’m probably interested. Reach me here.</p>

      <a
        href="mailto:chaturvedi.aksh1304@gmail.com"
        className="inline-block text-xl md:text-2xl no-underline text-white hover:text-white/70 transition-colors mb-8"
      >
        chaturvedi.aksh1304@gmail.com
      </a>

      <div className="flex flex-wrap items-center gap-3">
        {SOCIAL_LINKS.map(({ name, url, icon: Icon }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noreferrer"
            aria-label={name}
            className="glass-surface rounded-full p-3 text-white/70 hover:text-white flex"
          >
            <Icon size={18} />
          </a>
        ))}
      </div>
    </div>
  );
}
