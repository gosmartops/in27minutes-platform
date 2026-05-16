import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  Clock, 
  Package, 
  ShieldCheck, 
  ChevronRight,
  Zap,
  Award,
  ArrowUpRight,
  BarChart3,
  Activity,
  AlertTriangle,
  CheckCircle2,
  XCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePerformanceSimulation } from '../hooks/usePerformance';

const MerchantDashboard: React.FC = () => {
  const { merchant, snapshot } = usePerformanceSimulation();
  const [activeOrders, setActiveOrders] = useState([
    { id: 'ORD-7725', items: 'USB-C Cable x2', timeRemaining: 840, priority: 'Critical', type: 'Tier 1' },
    { id: 'ORD-7730', items: 'MacBook Air M3 (Space Gray)', timeRemaining: 3600, priority: 'Normal', type: 'Tier 2' },
  ]);

  const [incomingDemand, setIncomingDemand] = useState<{ id: string, product: string, price: number, countdown: number } | null>(null);

  // Simulate an incoming order after 5 seconds
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIncomingDemand({
        id: 'ORD-8801',
        product: 'iPhone 13 (Midnight)',
        price: 485000,
        countdown: 90 // 90 seconds window
      });
    }, 5000);
    return () => clearTimeout(timeout);
  }, []);

  // Tick down countdowns
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveOrders(prev => prev.map(order => ({
        ...order,
        timeRemaining: Math.max(0, order.timeRemaining - 1)
      })));

      if (incomingDemand) {
        setIncomingDemand(prev => {
          if (!prev || prev.countdown <= 0) return null;
          return { ...prev, countdown: prev.countdown - 1 };
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [incomingDemand]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const metricConfig = [
    { label: 'Speed Score', val: snapshot.speed_score, max: 1000, weight: '40%', color: '#6366f1', icon: Clock },
    { label: 'Accuracy Score', val: snapshot.accuracy_score, max: 1000, weight: '25%', color: '#10b981', icon: Package },
    { label: 'Reliability Score', val: snapshot.reliability_score, max: 1000, weight: '15%', color: '#f59e0b', icon: ShieldCheck },
    { label: 'Location Efficiency', val: snapshot.location_efficiency_score, max: 1000, weight: '10%', color: '#ec4899', icon: Zap },
    { label: 'CSat Score', val: snapshot.satisfaction_score, max: 1000, weight: '10%', color: '#8b5cf6', icon: Award },
  ];

  return (
    <div className="min-h-screen p-8 max-w-7xl mx-auto">
      {/* Header */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-4xl font-black gradient-text tracking-tighter">In27Minutes</h1>
            <span className="px-3 py-1 bg-indigo-500/10 text-indigo-400 rounded-full text-[10px] font-bold tracking-widest border border-indigo-500/20">MERCHANT NETWORK</span>
          </div>
          <p className="text-zinc-500 font-medium tracking-wide uppercase text-xs">AI Reputation-Based Logistics Economy</p>
        </div>
        
        <div className="flex gap-4">
          <div className="glass px-6 py-4 flex items-center gap-4">
            <div className="text-right">
              <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Base Reputation</p>
              <div className="flex items-baseline gap-1">
                <motion.p key={snapshot.total_score} className="text-3xl font-black text-indigo-400">{snapshot.total_score}</motion.p>
                <span className="text-zinc-600 text-lg font-bold">/1000</span>
              </div>
            </div>
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-indigo-500/10 border border-indigo-500/20">
              <Activity className="text-indigo-400" size={24} />
            </div>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* Incoming Demand Modal/Notification */}
          <AnimatePresence>
            {incomingDemand && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="glass border-2 border-indigo-500 p-8 relative overflow-hidden bg-indigo-500/[0.05]"
              >
                <div className="absolute top-0 right-0 p-4">
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] font-black text-indigo-400 uppercase mb-1">Acceptance Window</span>
                    <span className="text-3xl font-mono font-black text-indigo-400">{incomingDemand.countdown}s</span>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-indigo-500 flex items-center justify-center text-white glow shadow-[0_0_30px_rgba(99,102,241,0.4)]">
                    <Zap size={32} fill="currentColor" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-black text-white mb-1">Incoming AI Intent</h2>
                    <p className="text-zinc-400 text-sm font-medium mb-6">User intent matched to your performance & stock profile.</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="p-4 bg-zinc-900/50 rounded-xl border border-zinc-800">
                        <p className="text-[10px] text-zinc-500 font-bold uppercase mb-1">Product</p>
                        <p className="text-white font-bold">{incomingDemand.product}</p>
                      </div>
                      <div className="p-4 bg-zinc-900/50 rounded-xl border border-zinc-800">
                        <p className="text-[10px] text-zinc-500 font-bold uppercase mb-1">Yield</p>
                        <p className="text-white font-bold">₦{(incomingDemand.price / 1000).toFixed(0)}k</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <button 
                        onClick={() => setIncomingDemand(null)}
                        className="flex-1 py-4 bg-indigo-600 text-white font-black rounded-xl hover:bg-indigo-500 transition-all flex items-center justify-center gap-2"
                      >
                        <CheckCircle2 size={20} /> ACCEPT ORDER
                      </button>
                      <button 
                        onClick={() => setIncomingDemand(null)}
                        className="px-8 py-4 bg-zinc-800 text-zinc-400 font-black rounded-xl hover:bg-zinc-700 transition-all flex items-center justify-center gap-2"
                      >
                        <XCircle size={20} /> REJECT
                      </button>
                    </div>
                    <p className="mt-4 text-[10px] text-zinc-600 font-bold uppercase text-center">Note: Rejection impact: -10 Reliability Score</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Detailed Score Breakdown */}
          <section className="glass p-8">
            <h2 className="text-xl font-bold mb-8 flex items-center gap-3">
              <BarChart3 className="text-indigo-500" size={24} />
              Performance DNA
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              {metricConfig.map((m) => (
                <div key={m.label} className="space-y-4">
                  <div className="flex justify-between items-end">
                    <div className="space-y-1">
                      <span className="text-zinc-500 text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                        <m.icon size={12} /> {m.label} <span className="text-indigo-500 opacity-50">({m.weight})</span>
                      </span>
                      <p className="text-white font-black text-2xl">{m.val.toFixed(0)} <span className="text-zinc-700 text-sm">/ {m.max}</span></p>
                    </div>
                  </div>
                  <div className="h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${(m.val / m.max) * 100}%` }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: m.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Active Queue */}
          <section>
            <h2 className="text-xl font-bold mb-6 flex items-center gap-3 text-emerald-400">
              <CheckCircle2 size={24} />
              Execution Layer
            </h2>
            <div className="space-y-4">
              {activeOrders.map((order) => (
                <div key={order.id} className="glass p-6 flex items-center justify-between group hover:border-emerald-500/30 transition-all">
                  <div className="flex items-center gap-6">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-zinc-900 border border-zinc-800 ${order.priority === 'Critical' ? 'text-rose-400' : 'text-emerald-400'}`}>
                      <Package size={28} />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="font-mono font-bold text-zinc-500 text-xs">{order.id}</span>
                        <span className="text-[9px] bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded font-black tracking-widest uppercase">{order.type}</span>
                      </div>
                      <p className="text-lg text-white font-bold">{order.items}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-zinc-500 font-black uppercase mb-1">Countdown</p>
                    <p className={`text-3xl font-mono font-black ${order.timeRemaining < 300 ? 'text-rose-500' : 'text-emerald-400'}`}>
                      {formatTime(order.timeRemaining)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* Right Column */}
        <div className="lg:col-span-4 space-y-8">
          
          {/* Penalty/Reward Panel */}
          <section className="glass p-6 border-rose-500/20 bg-rose-500/[0.02]">
            <h3 className="font-bold text-rose-400 mb-6 flex items-center gap-2 uppercase text-sm tracking-widest">
              <AlertTriangle size={18} /> Enforcement Alerts
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-rose-500/10 border border-rose-500/20 rounded-xl">
                <p className="text-xs font-bold text-white mb-1">Speed Penalty Risk</p>
                <p className="text-xs text-rose-300 opacity-80 leading-relaxed">
                  Average delivery time is creeping toward 27.2 min. Routing priority may be downgraded to Tier B.
                </p>
              </div>
              <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
                <h4 className="text-xs font-bold text-emerald-400 mb-1 flex items-center gap-1">
                  <Award size={12} /> Reward Unlocked
                </h4>
                <p className="text-xs text-emerald-300 opacity-80 leading-relaxed">
                  "Elite Field Merchant" badge active. Platform fee reduced by 2.5% for the next 24 hours.
                </p>
              </div>
            </div>
          </section>

          {/* AI Insights - Re-branded */}
          <section className="glass p-8 bg-indigo-500/[0.03]">
             <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center text-white glow">
                <TrendingUp size={24} />
              </div>
              <div>
                <h3 className="font-bold">Yield Engine</h3>
                <p className="text-[10px] text-indigo-400 font-black uppercase tracking-widest">Market Predictions</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex justify-between items-center pb-4 border-b border-zinc-800">
                <span className="text-zinc-500 text-xs font-medium">Nearby Intent (10m)</span>
                <span className="font-mono font-bold text-white">42 requests</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-zinc-800">
                <span className="text-zinc-500 text-xs font-medium">Capture Rate</span>
                <span className="font-mono font-bold text-emerald-400">8.2%</span>
              </div>
              <div className="pt-2">
                <p className="text-[10px] text-zinc-500 font-black uppercase mb-4">Network Saturation</p>
                <div className="h-1 w-full bg-zinc-900 rounded-full">
                  <div className="h-full bg-indigo-500 w-[65%]" />
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default MerchantDashboard;
