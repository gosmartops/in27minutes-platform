import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Activity, Database, Brain, CheckCircle2, BarChart, Truck, Globe, MapPin, Zap
} from 'lucide-react';

interface LandingPageProps {
  onStartShopping: () => void;
  onBecomeMerchant: () => void;
}

const questions = [
  {
    title: "How do you currently fulfill local orders?",
    options: [
      { text: "Manual routing and basic courier services.", icon: Truck },
      { text: "Centralized warehouse with next-day delivery.", icon: Database },
      { text: "We already use hyper-local AI routing.", icon: Brain }
    ]
  },
  {
    title: "How do your customers discover products?",
    options: [
      { text: "Traditional search bars and categories.", icon: Activity },
      { text: "Personalized recommendations engine.", icon: BarChart },
      { text: "Intent-based AI chat and voice.", icon: Zap }
    ]
  },
  {
    title: "What is your average delivery time?",
    options: [
      { text: "2-3 business days.", icon: Globe },
      { text: "Same-day delivery.", icon: MapPin },
      { text: "Under 30 minutes.", icon: CheckCircle2 }
    ]
  }
];

const LandingPage: React.FC<LandingPageProps> = ({ onStartShopping, onBecomeMerchant }) => {
  const [step, setStep] = useState(1);
  const [isComplete, setIsComplete] = useState(false);

  const handleOptionClick = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      setIsComplete(true);
    }
  };

  const resetAudit = () => {
    setStep(1);
    setIsComplete(false);
  };

  return (
    <div className="bg-[#050505] min-h-screen text-white font-sans selection:bg-cyan-400 selection:text-black">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center">
            <span className="font-black text-2xl tracking-tighter text-white">
              IN27MINUTES<span className="text-cyan-400">.</span>
            </span>
          </div>
          
          <div className="hidden lg:flex items-center gap-8">
            {['How It Works', 'Solutions', 'Pricing', 'Insights', 'AI Audit', 'Community'].map((item, i) => (
              <a 
                key={i} 
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className={`text-[9px] font-black uppercase tracking-[0.1em] transition-colors ${item === 'AI Audit' ? 'text-cyan-400' : 'text-neutral-500 hover:text-cyan-400'}`}
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <button className="hidden md:block text-[9px] font-black uppercase tracking-[0.1em] text-neutral-500 hover:text-white transition-colors">
              Login
            </button>
            <button 
              onClick={onBecomeMerchant}
              className="hidden md:block px-6 py-3 bg-white text-black text-[9px] font-black uppercase tracking-[0.1em] rounded-full hover:bg-cyan-400 transition-colors"
            >
              Create Account
            </button>
            <button 
              onClick={onStartShopping}
              className="text-[9px] font-black uppercase tracking-[0.1em] text-white hover:text-cyan-400 transition-colors"
            >
              Deploy
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-32 pb-24 px-6 relative">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-400/10 blur-[120px] rounded-full pointer-events-none" />

        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16 relative z-10">
          <div className="inline-block mb-6">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-400">
              —— 2026 AUDIT ——
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
            <span className="text-white">Commerce Readiness </span>
            <span className="text-neutral-500">Evaluation.</span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-400 font-light max-w-2xl mx-auto leading-relaxed">
            Evaluate your infrastructure against the new standard of AI-native commerce. Discover the gap between traditional search and autonomous 27-minute fulfillment.
          </p>
        </div>

        {/* Audit Box */}
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="bg-neutral-900/60 border border-white/10 rounded-[3rem] p-8 md:p-16 backdrop-blur-md relative overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              {!isComplete ? (
                <motion.div
                  key="questionnaire"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-black uppercase tracking-widest text-neutral-500">
                        Question {step} of 3
                      </span>
                      <div className="flex-1 h-1 bg-neutral-800 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-cyan-400 transition-all duration-500"
                          style={{ width: `${(step / 3) * 100}%` }}
                        />
                      </div>
                      <span className="text-xs font-black uppercase tracking-widest text-cyan-400">
                        Step {step}
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-medium text-white mb-8">
                      {questions[step - 1].title}
                    </h2>
                  </div>

                  <div className="space-y-4">
                    {questions[step - 1].options.map((opt, i) => (
                      <button
                        key={i}
                        onClick={handleOptionClick}
                        className="w-full text-left p-6 rounded-2xl border border-white/5 bg-neutral-950 hover:bg-neutral-800 hover:border-cyan-400/50 transition-all group flex items-center justify-between"
                      >
                        <div className="flex items-center gap-4">
                          <opt.icon className="text-cyan-400 w-6 h-6" />
                          <span className="text-neutral-300 group-hover:text-white transition-colors">
                            {opt.text}
                          </span>
                        </div>
                        <ArrowRight className="text-neutral-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                      </button>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="results"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <div className="text-center mb-10">
                    <span className="block text-[10px] font-black uppercase tracking-[0.5em] text-cyan-400 mb-6">
                      AUDIT COMPLETE
                    </span>
                    <div className="text-6xl md:text-8xl font-black tracking-tighter mb-4">
                      <span className="text-white">43% </span>
                      <span className="text-neutral-500">Ready</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Transitioning (Average)</h3>
                    <p className="text-neutral-400 font-light max-w-lg mx-auto">
                      Your commerce infrastructure is functional but relies on legacy patterns. You are losing customers to zero-friction, intent-based platforms.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="p-6 bg-black/50 rounded-2xl border border-white/5">
                      <BarChart className="text-cyan-400 mb-4" size={24} />
                      <h4 className="text-white font-bold mb-2">Efficiency Gap</h4>
                      <p className="text-neutral-500 text-sm">High friction in discovery to delivery pipeline.</p>
                    </div>
                    <div className="p-6 bg-black/50 rounded-2xl border border-white/5">
                      <Brain className="text-cyan-400 mb-4" size={24} />
                      <h4 className="text-white font-bold mb-2">Agent Potential</h4>
                      <p className="text-neutral-500 text-sm">Missing intent-based routing capabilities.</p>
                    </div>
                    <div className="p-6 bg-black/50 rounded-2xl border border-white/5">
                      <CheckCircle2 className="text-cyan-400 mb-4" size={24} />
                      <h4 className="text-white font-bold mb-2">Next Steps</h4>
                      <p className="text-neutral-500 text-sm">Deploy local merchant orchestration.</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button 
                      onClick={onStartShopping}
                      className="w-full sm:w-auto bg-cyan-400 hover:bg-white text-black font-black text-[10px] uppercase tracking-[0.2em] rounded-2xl px-8 py-4 transition-all"
                    >
                      Book Free Consultation
                    </button>
                    <button 
                      onClick={resetAudit}
                      className="w-full sm:w-auto bg-neutral-950 text-white font-black text-[10px] uppercase tracking-[0.2em] rounded-2xl border border-white/10 hover:border-white/30 px-8 py-4 transition-all"
                    >
                      Retake Audit
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </main>

      {/* Build AI-Native Company Module */}
      <section className="py-32 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-7xl font-bold tracking-tighter mb-10 text-white">
            Build An AI-Native Commerce Engine
          </h2>
          <p className="text-xl md:text-2xl text-neutral-400 font-light leading-relaxed mb-12 max-w-3xl mx-auto">
            Deploy AI-powered workflows, hyper-local routing, and instant fulfillment intelligence across your network with In27Minutes.
          </p>
          <button 
            onClick={onStartShopping}
            className="group px-12 py-6 bg-cyan-400 text-black text-[10px] font-black uppercase tracking-[0.3em] rounded-2xl hover:bg-white transition-all shadow-xl shadow-cyan-400/10 flex items-center justify-center gap-4 mx-auto"
          >
            Deploy Now
            <ArrowRight className="group-hover:translate-x-2 transition-transform" size={16} />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-white/5 bg-neutral-950">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <span className="font-black text-3xl tracking-tighter text-white block mb-6">
              IN27MINUTES<span className="text-cyan-400">.</span>
            </span>
            <p className="text-neutral-500 text-sm leading-relaxed mb-8 pr-8">
              The Agentic Commerce System. We fuse daily commerce operations with autonomous AI to boost delivery speeds and merchant performance.
            </p>
            <div className="flex gap-4">
              {['IN', 'TW', 'EM'].map((social, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-xl bg-neutral-900 flex items-center justify-center text-xs font-black text-neutral-500 hover:text-black hover:bg-cyan-400 transition-colors">
                  {social}
                </a>
              ))}
            </div>
          </div>
          
          <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { title: 'Product', links: ['Routing', 'Merchants', 'Security', 'Pricing'] },
              { title: 'Solutions', links: ['Enterprise', 'Logistics', 'Retail', 'Custom'] },
              { title: 'Resources', links: ['Documentation', 'API', 'Case Studies', 'Blog'] },
              { title: 'Company', links: ['About', 'Careers', 'Contact', 'Legal'] }
            ].map((col, i) => (
              <div key={i}>
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white mb-6">
                  {col.title}
                </h4>
                <ul className="space-y-4">
                  {col.links.map((link, j) => (
                    <li key={j}>
                      <a href="#" className="text-sm text-neutral-500 hover:text-cyan-400 transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
