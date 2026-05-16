import { useState } from 'react';
import { 
  Package, 
  Clock, 
  ChevronLeft,
  Star,
  Phone,
  MessageSquare
} from 'lucide-react';
import { motion } from 'framer-motion';

const CustomerTracking: React.FC = () => {
  const [progress] = useState(65);
  const [timeLeft] = useState(14); // minutes

  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-4">
      <div className="w-full max-w-md glass overflow-hidden">
        {/* Header */}
        <div className="p-6 flex items-center justify-between border-b border-zinc-800/50">
          <button className="text-zinc-400"><ChevronLeft size={24} /></button>
          <div className="text-center">
            <h2 className="font-black text-sm uppercase tracking-widest text-zinc-500">Live Delivery</h2>
            <p className="font-mono text-xs text-indigo-400">#ORD-7721</p>
          </div>
          <div className="w-6" />
        </div>

        {/* Map Placeholder with AI routing vibe */}
        <div className="h-64 bg-zinc-900 relative flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(99,102,241,0.15)_0%,_transparent_70%)]" />
          {/* Simulated paths */}
          <svg className="absolute inset-0 w-full h-full opacity-20">
            <path d="M0,100 Q100,50 200,150 T400,100" stroke="#6366f1" fill="none" strokeWidth="2" strokeDasharray="5,5" />
          </svg>
          
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-4 h-4 bg-indigo-500 rounded-full glow relative z-10"
          >
             <div className="absolute -inset-4 border border-indigo-500/30 rounded-full" />
          </motion.div>
          
          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
            <div className="glass px-3 py-1.5 flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full" />
              <span className="text-[10px] font-black text-white">AI OPTIMIZED ROUTE</span>
            </div>
            <div className="bg-indigo-500 text-white px-3 py-2 rounded-xl flex items-center gap-2 shadow-lg">
              <Clock size={16} />
              <span className="text-lg font-black">{timeLeft}m</span>
            </div>
          </div>
        </div>

        {/* Delivery Info */}
        <div className="p-8 space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-black text-white mb-1">In 14 Minutes</h3>
              <p className="text-zinc-500 text-sm font-medium">Expected Arrival: 7:14 PM</p>
            </div>
            <div className="w-16 h-16 rounded-full bg-zinc-800 border-2 border-zinc-700 flex items-center justify-center">
              <Package size={32} className="text-indigo-400" />
            </div>
          </div>

          {/* Progress Tracker */}
          <div className="space-y-4">
            <div className="h-2 w-full bg-zinc-900 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                className="h-full bg-indigo-500 glow"
              />
            </div>
            <div className="flex justify-between text-[10px] font-black text-zinc-500 uppercase tracking-widest">
              <span>Picked Up</span>
              <span className="text-indigo-400">On the way</span>
              <span>Delivered</span>
            </div>
          </div>

          {/* Merchant Info (Performance Proof) */}
          <div className="glass p-4 bg-white/[0.02] border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center">
                <Star size={24} className="text-accent" fill="currentColor" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">Gadget Hub Central</p>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] bg-indigo-500/20 text-indigo-400 px-1.5 py-0.5 rounded font-black">982 SCORE</span>
                  <span className="text-[10px] text-zinc-500 font-bold">TOP FIELD MERCHANT</span>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="p-2 bg-zinc-800 rounded-lg text-zinc-400"><Phone size={18} /></button>
              <button className="p-2 bg-zinc-800 rounded-lg text-zinc-400"><MessageSquare size={18} /></button>
            </div>
          </div>
        </div>

        <button className="w-full py-6 bg-indigo-600 text-white font-black uppercase tracking-widest text-sm hover:bg-indigo-500 transition-colors">
          View Live Feed
        </button>
      </div>
    </div>
  );
};

export default CustomerTracking;
