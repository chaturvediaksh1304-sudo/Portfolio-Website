import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useIsDesktop } from './hooks/useBreakpoint';
import DesktopView from './desktop/DesktopView';
import MobileView from './mobile/MobileView';
import BootScreen from './desktop/BootScreen';

export default function App() {
  const isDesktop = useIsDesktop();
  const [booted, setBooted] = useState(false);

  return (
    <>
      {isDesktop ? <DesktopView /> : <MobileView />}
      {/* Screen dimmer — Control Center's brightness slider writes this element's opacity. */}
      <div
        id="screen-dim"
        className="pointer-events-none fixed inset-0 z-[10000] bg-black"
        style={{ opacity: 0 }}
      />
      <AnimatePresence>
        {!booted && <BootScreen key="boot" onDone={() => setBooted(true)} />}
      </AnimatePresence>
    </>
  );
}
