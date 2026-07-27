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
      <AnimatePresence>
        {!booted && <BootScreen key="boot" onDone={() => setBooted(true)} />}
      </AnimatePresence>
    </>
  );
}
