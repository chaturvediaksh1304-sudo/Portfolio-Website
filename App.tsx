import React from 'react';
import { useIsDesktop } from './hooks/useBreakpoint';
import DesktopView from './desktop/DesktopView';
import MobileView from './mobile/MobileView';

export default function App() {
  return useIsDesktop() ? <DesktopView /> : <MobileView />;
}
