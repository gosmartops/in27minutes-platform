import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Bot, 
  MapPin, 
  Sparkles, 
  Zap, 
  Cpu, 
  ShoppingBag,
  Camera,
  Link as LinkIcon
} from 'lucide-react';

interface CustomerOnboardingProps {
  onComplete: () => void;
}

const CustomerOnboarding: React.FC<CustomerOnboardingProps> = ({ onComplete }) => {
  const [step, setStep] = useState(1);
  const [location, setLocation] = useState('');
  const [firstRequest, setFirstRequest] = useState('');

  const nextStep = () => {
    if (step < 6) {
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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-400/5 blur-[120px] rounded-full pointer-events-none" />
      
      {/* Step Indicator */}
      <div className="fixed top-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {[1, 2, 3, 4, 5, 6].map((s) => (
          <div 
            key={s} 
            className={`h-1 rounded-none transition-all duration-500 ${
              s === step ? 'w-8 bg-cyan-400 glow' : 
              s < step ? 'w-4 bg-cyan-400/50' : 'w-4 bg-zinc-800'
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
              <div className="w-16 h-16 rounded-none bg-cyan-400/10 flex items-center justify-center text-cyan-400 mx-auto mb-8 border border-cyan-400/20 glow">
                <Cpu size={32} />
              </div>
              <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter">
                Welcome to In27Minutes<span className="text-cyan-400">.</span>
              </h1>
              <p className="text-lg text-zinc-400 leading-relaxed mb-10">
                Tell us what you need. Our AI will find it and get it delivered fast.
              </p>
              <button onClick={nextStep} className="w-full py-5 bg-cyan-400 text-black rounded-none font-black text-xs uppercase tracking-[0.2em] hover:bg-white transition-all flex items-center justify-center gap-3">
                Get Started <ArrowRight size={16} />
              </button>
            </motion.div>
          )}

          {/* Screen 2 — What is this? */}
          {step === 2 && (
            <motion.div 
              key="step2" variants={variants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.4 }}
              className="glass p-12 rounded-[32px] border-white/5"
            >
              <div className="mb-4">
                <span className="text-[9px] text-cyan-400 font-black uppercase tracking-[0.4em]">Paradigm Shift</span>
              </div>
              <h2 className="text-3xl font-black mb-6 tracking-tight">Shopping, but without searching<span className="text-cyan-400">.</span></h2>
              <p className="text-zinc-400 mb-8 text-lg">Instead of browsing endless products, just describe what you want.</p>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-center gap-4 p-4 bg-zinc-900/50 rounded-none border border-white/5">
                  <Bot className="text-cyan-400" size={24} />
                  <div>
                    <p className="text-[9px] text-zinc-500 font-black uppercase tracking-[0.2em]">Our AI Engine</p>
                    <p className="text-sm font-bold text-white">Understands your request</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-zinc-900/50 rounded-none border border-white/5">
                  <Sparkles className="text-cyan-400" size={24} />
                  <div>
                    <p className="text-[9px] text-zinc-500 font-black uppercase tracking-[0.2em]">Local Matches</p>
                    <p className="text-sm font-bold text-white">Finds the best options near you</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-zinc-900/50 rounded-none border border-white/5">
                  <Zap className="text-cyan-400" size={24} />
                  <div>
                    <p className="text-[9px] text-zinc-500 font-black uppercase tracking-[0.2em]">Execution</p>
                    <p className="text-sm font-bold text-white">Assigns a trusted Field Merchant</p>
                  </div>
                </div>
              </div>

              <div className="p-4 border-l-4 border-cyan-400 bg-cyan-400/[0.02] mb-8">
                <p className="text-lg font-black italic">"You don’t shop. You request."</p>
              </div>

              <button onClick={nextStep} className="w-full py-5 bg-cyan-400 text-black rounded-none font-black text-xs uppercase tracking-[0.2em] hover:bg-white transition-all flex items-center justify-center gap-3">
                Continue <ArrowRight size={16} />
              </button>
            </motion.div>
          )}

          {/* Screen 3 — Your Location */}
          {step === 3 && (
            <motion.div 
              key="step3" variants={variants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.4 }}
              className="glass p-12 rounded-[32px] border-white/5 text-center"
            >
              <div className="w-16 h-16 rounded-none bg-zinc-900 flex items-center justify-center text-white mx-auto mb-8 border border-zinc-800">
                <MapPin size={32} />
              </div>
              <h2 className="text-3xl font-black mb-4 tracking-tight">Where should we deliver to<span className="text-cyan-400">?</span></h2>
              <p className="text-zinc-500 text-sm mb-8">We use this to find nearby Field Merchants for faster delivery.</p>
              
              <div className="space-y-4 mb-10 text-left">
                <button className="w-full p-4 bg-zinc-900 rounded-none border border-zinc-800 hover:border-cyan-400 flex items-center gap-4 transition-all">
                  <div className="w-2 h-2 bg-cyan-400 rounded-none glow" />
                  <span className="font-bold text-sm">Use Current Location (Auto-detect)</span>
                </button>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Or enter manually..." 
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full bg-zinc-900/50 border border-zinc-800 rounded-none p-4 text-sm focus:outline-none focus:border-cyan-400/50 transition-all placeholder:text-zinc-600"
                  />
                </div>
              </div>

              <button onClick={nextStep} className="w-full py-5 bg-cyan-400 text-black rounded-none font-black text-xs uppercase tracking-[0.2em] hover:bg-white transition-all flex items-center justify-center gap-3">
                Continue <ArrowRight size={16} />
              </button>
            </motion.div>
          )}

          {/* Screen 4 — Preferences */}
          {step === 4 && (
            <motion.div 
              key="step4" variants={variants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.4 }}
              className="glass p-12 rounded-[32px] border-white/5"
            >
              <div className="mb-4">
                <span className="text-[9px] text-cyan-400 font-black uppercase tracking-[0.4em]">AI Memory Setup</span>
              </div>
              <h2 className="text-3xl font-black mb-4 tracking-tight">Help us understand you better<span className="text-cyan-400">.</span></h2>
              <p className="text-zinc-500 text-sm mb-10">This improves your recommendations over time.</p>
              
              <div className="space-y-8 mb-10">
                <div>
                  <label className="block text-[9px] text-zinc-500 font-black uppercase tracking-[0.2em] mb-3">Shopping Style</label>
                  <div className="grid grid-cols-3 gap-2">
                    {['Budget', 'Balanced', 'Premium'].map(style => (
                      <button key={style} className="py-3 bg-zinc-900 border border-zinc-800 hover:border-cyan-400 text-xs font-bold rounded-none transition-all">
                        {style}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-[9px] text-zinc-500 font-black uppercase tracking-[0.2em] mb-3">Frequent Categories</label>
                  <div className="flex flex-wrap gap-2">
                    {['Phones', 'Fashion', 'Tech', 'Groceries', 'Beauty'].map(cat => (
                      <button key={cat} className="px-4 py-2 bg-zinc-900 border border-zinc-800 hover:border-cyan-400 text-xs font-bold rounded-none transition-all">
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <button onClick={nextStep} className="flex-1 py-5 bg-zinc-900 text-white rounded-none font-black text-xs uppercase tracking-[0.2em] border border-zinc-800 hover:border-cyan-400 transition-all">
                  Skip for now
                </button>
                <button onClick={nextStep} className="flex-1 py-5 bg-cyan-400 text-black rounded-none font-black text-xs uppercase tracking-[0.2em] hover:bg-white transition-all">
                  Save
                </button>
              </div>
            </motion.div>
          )}

          {/* Screen 5 — First Request */}
          {step === 5 && (
            <motion.div 
              key="step5" variants={variants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.4 }}
              className="glass p-12 rounded-[32px] border-white/5"
            >
              <div className="mb-4">
                <span className="text-[9px] text-cyan-400 font-black uppercase tracking-[0.4em]">Initial Intent</span>
              </div>
              <h2 className="text-4xl font-black mb-8 tracking-tight">What do you need<span className="text-cyan-400">?</span></h2>
              
              <div className="relative mb-6">
                <textarea 
                  rows={4}
                  value={firstRequest}
                  onChange={(e) => setFirstRequest(e.target.value)}
                  placeholder="e.g. iPhone 13 under ₦500k"
                  className="w-full bg-zinc-900/80 border border-zinc-800 rounded-none p-6 text-lg focus:outline-none focus:border-cyan-400/50 transition-all placeholder:text-zinc-600 resize-none font-medium"
                />
                <div className="absolute bottom-4 right-4 flex gap-2">
                  <button className="p-2 bg-zinc-800 text-zinc-400 hover:text-white rounded-none transition-colors">
                    <Camera size={18} />
                  </button>
                  <button className="p-2 bg-zinc-800 text-zinc-400 hover:text-white rounded-none transition-colors">
                    <LinkIcon size={18} />
                  </button>
                </div>
              </div>
              
              <p className="text-[10px] text-zinc-500 font-bold mb-10">You can also upload a photo or paste a link.</p>

              <button onClick={nextStep} className="w-full py-5 bg-cyan-400 text-black rounded-none font-black text-xs uppercase tracking-[0.2em] hover:bg-white transition-all flex items-center justify-center gap-3">
                Ask AI <ArrowRight size={16} />
              </button>
            </motion.div>
          )}

          {/* Screen 6 — System Intro */}
          {step === 6 && (
            <motion.div 
              key="step6" variants={variants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.4 }}
              className="glass p-12 rounded-[32px] border-white/5 relative overflow-hidden"
            >
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-cyan-400/10 blur-[80px] rounded-full pointer-events-none" />
              
              <div className="mb-4">
                <span className="text-[9px] text-cyan-400 font-black uppercase tracking-[0.4em]">Activation</span>
              </div>
              <h2 className="text-4xl font-black mb-8 tracking-tight leading-tight">Meet your AI Shopping Assistant<span className="text-cyan-400">.</span></h2>
              
              <div className="space-y-6 mb-10 bg-zinc-900/50 p-8 rounded-none border border-white/5">
                <p className="text-[9px] text-zinc-500 font-black uppercase tracking-[0.2em] mb-4">It will:</p>
                <ul className="space-y-4">
                  {[
                    "Understand your request",
                    "Compare local options",
                    "Score best Field Merchants",
                    "Estimate delivery time instantly"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 font-bold text-sm">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-none glow" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-xl font-black text-white italic mb-10 text-center">
                Your first delivery could arrive in minutes.
              </p>

              <button onClick={nextStep} className="w-full py-6 bg-white text-black rounded-none font-black text-xs uppercase tracking-[0.2em] hover:bg-cyan-400 transition-all flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(34,211,238,0.2)]">
                Start Shopping <ShoppingBag size={16} />
              </button>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
};

export default CustomerOnboarding;
