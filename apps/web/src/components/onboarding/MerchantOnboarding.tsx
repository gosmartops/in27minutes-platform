import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Store, 
  Network, 
  Package, 
  Zap, 
  TrendingUp, 
  CheckCircle2,
  Box
} from 'lucide-react';

interface MerchantOnboardingProps {
  onComplete: () => void;
}

const MerchantOnboarding: React.FC<MerchantOnboardingProps> = ({ onComplete }) => {
  const [step, setStep] = useState(1);
  const [businessName, setBusinessName] = useState('');

  const nextStep = () => {
    if (step < 7) {
      setStep(step + 1);
    } else {
      onComplete();
    }
  };

  const variants = {
    enter: { opacity: 0, y: 20 },
    center: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center p-6 text-white overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      {/* Step Indicator */}
      <div className="fixed top-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {[1, 2, 3, 4, 5, 6, 7].map((s) => (
          <div 
            key={s} 
            className={`h-1 rounded-none transition-all duration-500 ${
              s === step ? 'w-8 bg-emerald-400 glow' : 
              s < step ? 'w-4 bg-emerald-400/50' : 'w-4 bg-zinc-800'
            }`} 
          />
        ))}
      </div>

      <div className="w-full max-w-xl relative z-10">
        <AnimatePresence mode="wait">
          
          {/* Screen 1 — Welcome */}
          {step === 1 && (
            <motion.div 
              key="step1" variants={variants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.4 }}
              className="glass p-12 rounded-[32px] border-white/5 text-center"
            >
              <div className="w-16 h-16 rounded-none bg-emerald-400/10 flex items-center justify-center text-emerald-400 mx-auto mb-8 border border-emerald-400/20 glow">
                <Store size={32} />
              </div>
              <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter">
                Become a Field Merchant<span className="text-emerald-400">.</span>
              </h1>
              <p className="text-lg text-zinc-400 leading-relaxed mb-10">
                Turn your store into an AI-powered demand engine.
              </p>
              <button onClick={nextStep} className="w-full py-5 bg-emerald-400 text-black rounded-none font-black text-xs uppercase tracking-[0.2em] hover:bg-white transition-all flex items-center justify-center gap-3">
                Get Started <ArrowRight size={16} />
              </button>
            </motion.div>
          )}

          {/* Screen 2 — What is a Field Merchant? */}
          {step === 2 && (
            <motion.div 
              key="step2" variants={variants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.4 }}
              className="glass p-12 rounded-[32px] border-white/5"
            >
              <div className="mb-4">
                <span className="text-[9px] text-emerald-400 font-black uppercase tracking-[0.4em]">Node Definition</span>
              </div>
              <h2 className="text-3xl font-black mb-6 tracking-tight leading-tight">
                You are not a seller. You are a node in a commerce network<span className="text-emerald-400">.</span>
              </h2>
              <p className="text-zinc-400 mb-8 text-lg">In27Minutes connects you directly to customer demand.</p>
              
              <div className="space-y-6 mb-10">
                <p className="text-[9px] text-zinc-500 font-black uppercase tracking-[0.2em] mb-4">The AI:</p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Sends you orders automatically",
                    "Optimizes your pricing",
                    "Tracks your performance",
                    "Increases visibility based on speed"
                  ].map((item, i) => (
                    <div key={i} className="p-4 bg-zinc-900/50 rounded-none border border-white/5 flex items-start gap-3">
                      <Network className="text-emerald-400 shrink-0" size={16} />
                      <span className="text-xs font-bold text-zinc-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 border-l-4 border-emerald-400 bg-emerald-400/[0.02] mb-8">
                <p className="text-lg font-black italic">"Customers don’t find you. AI sends them to you."</p>
              </div>

              <button onClick={nextStep} className="w-full py-5 bg-emerald-400 text-black rounded-none font-black text-xs uppercase tracking-[0.2em] hover:bg-white transition-all flex items-center justify-center gap-3">
                Continue <ArrowRight size={16} />
              </button>
            </motion.div>
          )}

          {/* Screen 3 — Business Setup */}
          {step === 3 && (
            <motion.div 
              key="step3" variants={variants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.4 }}
              className="glass p-12 rounded-[32px] border-white/5"
            >
              <div className="mb-4">
                <span className="text-[9px] text-emerald-400 font-black uppercase tracking-[0.4em]">Entity Registration</span>
              </div>
              <h2 className="text-3xl font-black mb-8 tracking-tight">Tell us about your business<span className="text-emerald-400">.</span></h2>
              
              <div className="space-y-6 mb-10">
                <div>
                  <input type="text" placeholder="Business Name" value={businessName} onChange={(e) => setBusinessName(e.target.value)} className="w-full bg-zinc-900/50 border border-zinc-800 rounded-none p-4 text-sm focus:outline-none focus:border-emerald-400/50 transition-all placeholder:text-zinc-600" />
                </div>
                <div>
                  <input type="text" placeholder="Phone Number" className="w-full bg-zinc-900/50 border border-zinc-800 rounded-none p-4 text-sm focus:outline-none focus:border-emerald-400/50 transition-all placeholder:text-zinc-600" />
                </div>
                <div>
                  <input type="text" placeholder="Location (Address/City)" className="w-full bg-zinc-900/50 border border-zinc-800 rounded-none p-4 text-sm focus:outline-none focus:border-emerald-400/50 transition-all placeholder:text-zinc-600" />
                </div>
                <div>
                  <label className="block text-[9px] text-zinc-500 font-black uppercase tracking-[0.2em] mb-3 mt-4">Facility Type</label>
                  <div className="grid grid-cols-2 gap-2">
                    {['Retail store', 'Small shop', 'Warehouse', 'Home-based merchant'].map(type => (
                      <button key={type} className="py-4 px-2 bg-zinc-900 border border-zinc-800 hover:border-emerald-400 text-xs font-bold rounded-none transition-all text-center">
                        {type}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <button onClick={nextStep} className="w-full py-5 bg-emerald-400 text-black rounded-none font-black text-xs uppercase tracking-[0.2em] hover:bg-white transition-all flex items-center justify-center gap-3">
                Continue <ArrowRight size={16} />
              </button>
            </motion.div>
          )}

          {/* Screen 4 — Inventory Setup */}
          {step === 4 && (
            <motion.div 
              key="step4" variants={variants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.4 }}
              className="glass p-12 rounded-[32px] border-white/5"
            >
              <div className="mb-4">
                <span className="text-[9px] text-emerald-400 font-black uppercase tracking-[0.4em]">Catalog Sync</span>
              </div>
              <h2 className="text-3xl font-black mb-4 tracking-tight">What do you sell<span className="text-emerald-400">?</span></h2>
              <p className="text-zinc-500 text-sm mb-10">Add your products or let AI help you build your catalog.</p>
              
              <div className="space-y-4 mb-10">
                <button className="w-full p-6 bg-zinc-900 rounded-none border border-zinc-800 hover:border-emerald-400 flex items-center gap-4 transition-all group">
                  <div className="w-10 h-10 rounded-none bg-emerald-400/10 text-emerald-400 flex items-center justify-center group-hover:bg-emerald-400 group-hover:text-black transition-colors">
                    <Box size={20} />
                  </div>
                  <div className="text-left">
                    <span className="block font-bold text-sm text-white">Add manually</span>
                    <span className="text-xs text-zinc-500 font-medium">One product at a time</span>
                  </div>
                </button>
                <button className="w-full p-6 bg-zinc-900 rounded-none border border-zinc-800 hover:border-emerald-400 flex items-center gap-4 transition-all group">
                  <div className="w-10 h-10 rounded-none bg-emerald-400/10 text-emerald-400 flex items-center justify-center group-hover:bg-emerald-400 group-hover:text-black transition-colors">
                    <Package size={20} />
                  </div>
                  <div className="text-left">
                    <span className="block font-bold text-sm text-white">Upload list</span>
                    <span className="text-xs text-zinc-500 font-medium">CSV or Excel format</span>
                  </div>
                </button>
                <button className="w-full p-6 bg-emerald-400/5 rounded-none border border-emerald-400/20 hover:border-emerald-400 flex items-center gap-4 transition-all group">
                  <div className="w-10 h-10 rounded-none bg-emerald-400/20 text-emerald-400 flex items-center justify-center group-hover:bg-emerald-400 group-hover:text-black transition-colors">
                    <Zap size={20} />
                  </div>
                  <div className="text-left">
                    <span className="block font-bold text-sm text-emerald-400">Let AI generate catalog</span>
                    <span className="text-xs text-emerald-400/70 font-medium">Scan shelves or describe items</span>
                  </div>
                </button>
              </div>

              <button onClick={nextStep} className="w-full py-5 bg-emerald-400 text-black rounded-none font-black text-xs uppercase tracking-[0.2em] hover:bg-white transition-all flex items-center justify-center gap-3">
                Set up inventory <ArrowRight size={16} />
              </button>
            </motion.div>
          )}

          {/* Screen 5 — Delivery Responsibility */}
          {step === 5 && (
            <motion.div 
              key="step5" variants={variants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.4 }}
              className="glass p-12 rounded-[32px] border-white/5"
            >
              <div className="mb-4">
                <span className="text-[9px] text-emerald-400 font-black uppercase tracking-[0.4em]">Logistics Protocol</span>
              </div>
              <h2 className="text-3xl font-black mb-8 tracking-tight leading-tight">You handle fulfillment and delivery<span className="text-emerald-400">.</span></h2>
              
              <div className="space-y-6 mb-10 bg-zinc-900/50 p-8 rounded-none border border-white/5">
                <p className="text-[9px] text-zinc-500 font-black uppercase tracking-[0.2em] mb-4">When you receive an order:</p>
                <ul className="space-y-4">
                  {[
                    "Pack the item immediately",
                    "Confirm readiness in the app",
                    "Deliver directly OR hand to logistics partner"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 font-bold text-sm">
                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-none glow" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-zinc-400 mb-6 text-sm">Your speed affects your ranking.</p>

              <div className="p-4 border-l-4 border-emerald-400 bg-emerald-400/[0.02] mb-8">
                <p className="text-lg font-black italic text-white">"Faster merchants get more orders."</p>
              </div>

              <button onClick={nextStep} className="w-full py-5 bg-emerald-400 text-black rounded-none font-black text-xs uppercase tracking-[0.2em] hover:bg-white transition-all flex items-center justify-center gap-3">
                Continue <ArrowRight size={16} />
              </button>
            </motion.div>
          )}

          {/* Screen 6 — Performance System */}
          {step === 6 && (
            <motion.div 
              key="step6" variants={variants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.4 }}
              className="glass p-12 rounded-[32px] border-white/5"
            >
              <div className="mb-4">
                <span className="text-[9px] text-emerald-400 font-black uppercase tracking-[0.4em]">Scoring Engine</span>
              </div>
              <h2 className="text-3xl font-black mb-8 tracking-tight leading-tight">Your success is measured automatically<span className="text-emerald-400">.</span></h2>
              
              <p className="text-[9px] text-zinc-500 font-black uppercase tracking-[0.2em] mb-4">Every order affects your score:</p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { label: "Speed", desc: "27-min target" },
                  { label: "Accuracy", desc: "Correct items" },
                  { label: "Reliability", desc: "No cancellations" },
                  { label: "Satisfaction", desc: "Customer rating" }
                ].map((item, i) => (
                  <div key={i} className="p-4 bg-zinc-900/50 rounded-none border border-white/5">
                    <p className="font-bold text-white mb-1">{item.label}</p>
                    <p className="text-xs text-zinc-500">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="flex gap-4 mb-8">
                <div className="flex-1 p-4 bg-emerald-400/10 border border-emerald-400/20 rounded-none text-center">
                  <span className="block text-[9px] text-emerald-400 font-black uppercase tracking-[0.1em] mb-1">High Score</span>
                  <span className="font-bold text-white text-sm">More orders</span>
                </div>
                <div className="flex-1 p-4 bg-rose-500/10 border border-rose-500/20 rounded-none text-center">
                  <span className="block text-[9px] text-rose-400 font-black uppercase tracking-[0.1em] mb-1">Low Score</span>
                  <span className="font-bold text-white text-sm">Fewer orders</span>
                </div>
              </div>

              <div className="p-4 border-l-4 border-emerald-400 bg-emerald-400/[0.02] mb-8">
                <p className="text-lg font-black italic text-white">"Performance is your growth engine."</p>
              </div>

              <button onClick={nextStep} className="w-full py-5 bg-emerald-400 text-black rounded-none font-black text-xs uppercase tracking-[0.2em] hover:bg-white transition-all flex items-center justify-center gap-3">
                Continue <ArrowRight size={16} />
              </button>
            </motion.div>
          )}

          {/* Screen 7 — Final Activation */}
          {step === 7 && (
            <motion.div 
              key="step7" variants={variants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.4 }}
              className="glass p-12 rounded-[32px] border-emerald-500/30 bg-emerald-500/[0.02] relative overflow-hidden text-center"
            >
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-emerald-400/10 blur-[80px] rounded-full pointer-events-none" />
              
              <div className="w-20 h-20 rounded-none bg-emerald-400 flex items-center justify-center text-black mx-auto mb-8 glow shadow-[0_0_30px_rgba(52,211,153,0.3)]">
                <CheckCircle2 size={40} />
              </div>
              
              <div className="mb-4">
                <span className="text-[9px] text-emerald-400 font-black uppercase tracking-[0.4em]">Node Activated</span>
              </div>
              <h2 className="text-4xl font-black mb-6 tracking-tight leading-tight">You’re ready to start receiving orders<span className="text-emerald-400">.</span></h2>
              
              <p className="text-lg font-bold text-zinc-400 mb-10">
                AI will now match you with nearby demand in real time.
              </p>

              <button onClick={nextStep} className="w-full py-6 bg-emerald-400 text-black rounded-none font-black text-xs uppercase tracking-[0.2em] hover:bg-white transition-all flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(52,211,153,0.2)]">
                Activate Merchant Account <TrendingUp size={16} />
              </button>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
};

export default MerchantOnboarding;
