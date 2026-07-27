import { create } from 'zustand';

export interface WinState {
  id: string;      // == appId (apps are singletons here)
  appId: string;
  x: number;
  y: number;
  w: number;
  h: number;
  z: number;
  minimized: boolean;
  maximized: boolean;
  prev?: { x: number; y: number; w: number; h: number };
}

interface WindowStore {
  windows: WinState[];
  focusedId: string | null;
  topZ: number;
  open: (appId: string) => void;
  close: (id: string) => void;
  focus: (id: string) => void;
  toggleMinimize: (id: string) => void;
  toggleMaximize: (id: string) => void;
  setBounds: (id: string, b: Partial<Pick<WinState, 'x' | 'y' | 'w' | 'h'>>) => void;
}

export const useWindowStore = create<WindowStore>((set, get) => ({
  windows: [],
  focusedId: null,
  topZ: 10,

  open: (appId) => {
    const existing = get().windows.find((w) => w.appId === appId);
    if (existing) {
      // Re-open = focus + un-minimize (macOS single-window apps).
      const z = get().topZ + 1;
      set((s) => ({
        focusedId: appId,
        topZ: z,
        windows: s.windows.map((w) =>
          w.id === appId ? { ...w, minimized: false, z } : w,
        ),
      }));
      return;
    }
    const n = get().windows.length;
    const z = get().topZ + 1;
    set((s) => ({
      focusedId: appId,
      topZ: z,
      windows: [
        ...s.windows,
        {
          id: appId,
          appId,
          x: 140 + (n % 6) * 34,
          y: 96 + (n % 6) * 30,
          w: 760,
          h: 520,
          z,
          minimized: false,
          maximized: false,
        },
      ],
    }));
  },

  close: (id) =>
    set((s) => ({
      windows: s.windows.filter((w) => w.id !== id),
      focusedId: s.focusedId === id ? null : s.focusedId,
    })),

  focus: (id) => {
    const z = get().topZ + 1;
    set((s) => ({
      focusedId: id,
      topZ: z,
      windows: s.windows.map((w) => (w.id === id ? { ...w, z } : w)),
    }));
  },

  toggleMinimize: (id) =>
    set((s) => ({
      windows: s.windows.map((w) =>
        w.id === id ? { ...w, minimized: !w.minimized } : w,
      ),
    })),

  toggleMaximize: (id) =>
    set((s) => ({
      windows: s.windows.map((w) => {
        if (w.id !== id) return w;
        if (w.maximized) {
          return { ...w, maximized: false, ...(w.prev ?? {}) };
        }
        return { ...w, maximized: true, prev: { x: w.x, y: w.y, w: w.w, h: w.h } };
      }),
    })),

  setBounds: (id, b) =>
    set((s) => ({
      windows: s.windows.map((w) => (w.id === id ? { ...w, ...b } : w)),
    })),
}));
