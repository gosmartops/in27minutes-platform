'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Package, MapPin, Zap, User, Settings, X, Activity } from 'lucide-react';
import { useUIStore } from '@/store/ui-store';
import { useRouter } from 'next/navigation';

export default function CommandPalette() {
  const { isCommandPaletteOpen, setCommandPalette } = useUIStore();
  const [query, setQuery] = useState('');
  const router = useRouter();

  // Keyboard shortcut (Cmd+K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setCommandPalette(!isCommandPaletteOpen);
      }
      if (e.key === 'Escape') {
        setCommandPalette(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isCommandPaletteOpen, setCommandPalette]);

  const actions = [
    { id: 'search', title: 'Find any product', icon: Search, route: '/app/search', shortcut: 'S' },
    { id: 'orders', title: 'Track my active orders', icon: Package, route: '/app/orders', shortcut: 'O' },
    { id: 'merchant', title: 'Switch to Node Operations', icon: Activity, route: '/merchant/dashboard', shortcut: 'M' },
    { id: 'settings', title: 'Account Settings', icon: Settings, route: '/app/profile', shortcut: ',' },
  ];

  const filteredActions = actions.filter(action => 
    action.title.toLowerCase().includes(query.toLowerCase())
  );

  const handleAction = (route: string) => {
    setCommandPalette(false);
    router.push(route);
  };

  return (
    <AnimatePresence>
      {isCommandPaletteOpen && (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4 bg-[#050505]/80 backdrop-blur-sm"
          onClick={() => setCommandPalette(false)}
        >
          <motion.div 
            initial={{ scale: 0.95, y: 10, opacity: 0 }} 
            animate={{ scale: 1, y: 0, opacity: 1 }} 
            exit={{ scale: 0.95, y: 10, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="w-full max-w-2xl bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-[0_0_40px_rgba(57,255,20,0.1)] overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Input Area */}
            <div className="flex items-center gap-4 px-6 py-4 border-b border-white/5">
              <Search className="text-accent shrink-0" size={20} />
              <input 
                autoFocus
                type="text" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="What do you need to do?"
                className="w-full bg-transparent text-white placeholder-zinc-600 outline-none font-satoshi text-lg py-1"
              />
              <kbd className="hidden sm:inline-flex px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono text-zinc-500 uppercase tracking-widest ml-2 shrink-0">ESC</kbd>
            </div>

            {/* Results Area */}
            <div className="p-2 max-h-[60vh] overflow-y-auto">
              {filteredActions.length > 0 ? (
                <div className="space-y-1">
                  <p className="px-4 py-2 text-[10px] font-black uppercase tracking-widest text-zinc-600">Quick Actions</p>
                  {filteredActions.map((action) => (
                    <button
                      key={action.id}
                      onClick={() => handleAction(action.route)}
                      className="w-full flex items-center justify-between px-4 py-3 rounded-xl hover:bg-white/5 group transition-colors text-left"
                    >
                      <div className="flex items-center gap-3">
                        <div className="text-zinc-500 group-hover:text-accent transition-colors">
                          <action.icon size={18} />
                        </div>
                        <span className="font-medium text-zinc-300 group-hover:text-white transition-colors">{action.title}</span>
                      </div>
                      <kbd className="hidden sm:flex items-center justify-center min-w-[24px] h-[24px] rounded-md bg-black/50 border border-white/5 text-[10px] font-mono text-zinc-500 group-hover:text-accent group-hover:border-accent/30 transition-colors shadow-inner">
                        {action.shortcut}
                      </kbd>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="p-8 text-center">
                  <Activity className="mx-auto text-zinc-700 mb-4 animate-pulse" size={32} />
                  <p className="text-zinc-500 font-medium">Querying AI Dispatch for "{query}"...</p>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="bg-[#050505] px-6 py-3 border-t border-white/5 flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-zinc-600">
              <span>In27Minutes Command Interface</span>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
                <span className="text-accent">Online</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
