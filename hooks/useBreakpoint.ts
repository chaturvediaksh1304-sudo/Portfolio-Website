import { useSyncExternalStore } from 'react';

// Single source of truth for the desktop/mobile split (spec §2).
const QUERY = '(min-width: 769px)';

function subscribe(cb: () => void) {
  const m = window.matchMedia(QUERY);
  m.addEventListener('change', cb);
  return () => m.removeEventListener('change', cb);
}

export function useIsDesktop(): boolean {
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(QUERY).matches,
    () => true, // SSR/first paint: assume desktop
  );
}
