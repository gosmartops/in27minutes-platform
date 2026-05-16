'use client';

import { useUIStore } from '@/store/ui-store';

export default function CommandPaletteTrigger() {
  const { toggleCommandPalette } = useUIStore();

  return (
    <button 
      onClick={toggleCommandPalette}
      className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-zinc-400 hover:text-white transition-colors"
    >
      <span className="font-mono bg-white/10 px-1.5 rounded text-[10px]">⌘K</span> Command
    </button>
  );
}
