import React from 'react';
import { 
  ArrowRight, 
  Bot, 
  Zap, 
  Package, 
  MessageSquare, 
  UserCheck, 
  SearchX,
  CheckCircle2,
  TrendingUp,
  Cpu
} from 'lucide-react';
import { motion } from 'framer-motion';

interface LandingPageProps {
  onStartShopping: () => void;
  onBecomeMerchant: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onStartShopping, onBecomeMerchant }) => {
  return (
    <div className="bg-zinc-950 text-white selection:bg-indigo-500/30">
      
      {/* Navbar (Internal) */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b-0 border-white/5 bg-zinc-950/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center glow">
              <Cpu size={18} fill="white" />
            </div>
            <span className="font-black text-xl tracking-tighter">In27Minutes</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-[10px] font-black uppercase tracking-widest text-zinc-500">
            <a href="#how-it-works" className="hover:text-white transition-colors">How it works</a>
            <a href="#merchants" className="hover:text-white transition-colors">Merchants</a>
            <a href="#performance" className="hover:text-white transition-colors">Performance</a>
          </div>
          <button 
            onClick={onStartShopping}
            className="px-5 py-2.5 bg-white text-black rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-zinc-200 transition-all flex items-center gap-2"
          >
            Launch App <ArrowRight size={14} />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-indigo-600/10 blur-[120px] rounded-full -z-10" />
        
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl md:text-8xl font-black gradient-text tracking-tighter leading-[0.9] mb-8">
              Commerce.<br />Delivered in 27 Minutes.
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 font-medium max-w-2xl mx-auto mb-12 leading-relaxed">
              In27Minutes is an AI-native commerce network where you simply say what you need, and our AI finds it, assigns a Field Merchant, and delivers it fast.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <button 
                onClick={onStartShopping}
                className="w-full sm:w-auto px-10 py-5 bg-indigo-600 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] glow hover:bg-indigo-500 transition-all flex items-center justify-center gap-3"
              >
                Start Shopping <ArrowRight size={18} />
              </button>
              <button 
                onClick={onBecomeMerchant}
                className="w-full sm:w-auto px-10 py-5 bg-zinc-900 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] border border-zinc-800 hover:border-zinc-700 transition-all"
              >
                Become a Field Merchant
              </button>
            </div>
            <p className="text-[10px] text-zinc-600 font-bold uppercase tracking-[0.3em]">
              Powered by AI routing, real-time inventory, and a performance-based merchant network.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-32 px-6 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center">
            <h2 className="text-4xl font-black mb-4 tracking-tight">How In27Minutes Works</h2>
            <p className="text-zinc-500 font-bold uppercase text-[10px] tracking-[0.3em]">Just intent → AI → delivery</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                step: "01", 
                title: "Tell Us What You Need", 
                text: "Just type, speak, or upload a photo. “I need an iPhone 13 under ₦500k in Lagos”",
                icon: MessageSquare
              },
              { 
                step: "02", 
                title: "AI Understands Intent", 
                text: "Our AI breaks down product, budget, urgency, and location. No searching required.",
                icon: Bot
              },
              { 
                step: "03", 
                title: "Assign Best Merchant", 
                text: "Routed to the closest, fastest, and most reliable Field Merchant. Only performance-ranked.",
                icon: UserCheck
              },
              { 
                step: "04", 
                title: "Delivered in Minutes", 
                text: "The merchant fulfills and delivers directly. We track everything in real time.",
                icon: Zap
              }
            ].map((s, i) => (
              <div key={i} className="glass p-8 border-white/5 group hover:border-indigo-500/30 transition-all">
                <div className="flex justify-between items-start mb-8">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                    <s.icon size={24} />
                  </div>
                  <span className="font-mono font-black text-indigo-500/20 text-4xl leading-none">{s.step}</span>
                </div>
                <h3 className="text-xl font-bold mb-4">{s.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-32 px-6 border-y border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl font-black mb-8 tracking-tight">A New Way to Shop</h2>
            <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
              <p>Traditional e-commerce makes you search. <span className="text-white font-bold">We remove searching completely.</span></p>
              <div className="space-y-4">
                {[
                  "Understand what you want",
                  "Find the best available option",
                  "Assign the fastest merchant",
                  "Optimize delivery in real time"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-indigo-500" />
                    <span className="text-sm font-bold text-zinc-300">{item}</span>
                  </div>
                ))}
              </div>
              <p className="pt-6 border-t border-white/5">
                The result: <span className="text-white font-black italic">Shopping becomes instant decision-making, not browsing.</span>
              </p>
            </div>
          </div>
          <div className="glass p-12 bg-indigo-600/5 border-indigo-500/20 relative overflow-hidden">
             <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-600/20 blur-[80px] rounded-full" />
             <div className="relative z-10 space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                    <Bot size={20} />
                  </div>
                  <div className="bg-zinc-900/50 p-4 rounded-2xl rounded-tl-none border border-white/5 text-sm text-zinc-300">
                    "I need a high-spec smartphone for content creation, budget ₦800k, delivery to Victoria Island."
                  </div>
                </div>
                <div className="flex flex-row-reverse items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-500">
                    <Cpu size={20} />
                  </div>
                  <div className="bg-indigo-600 p-4 rounded-2xl rounded-tr-none text-sm text-white font-bold glow">
                    "Analyzing 42 local inventories... Matched with 'Silicon Valley VI'. Delivery ETA: 19 minutes."
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Field Merchants */}
      <section id="merchants" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <h2 className="text-4xl font-black mb-8 tracking-tight leading-tight">Meet Field Merchants</h2>
              <p className="text-lg text-zinc-400 leading-relaxed mb-8">
                Field Merchants are the backbone of In27Minutes. They are real, verified local businesses that store inventory, fulfill orders, and deliver directly.
              </p>
              <div className="p-8 glass border-emerald-500/20 bg-emerald-500/[0.02]">
                <h4 className="text-emerald-400 font-black text-2xl mb-4 italic italic">"Merchants don’t chase customers. AI brings customers to them."</h4>
                <button 
                  onClick={onBecomeMerchant}
                  className="flex items-center gap-2 text-white font-black text-[10px] uppercase tracking-widest hover:gap-4 transition-all"
                >
                  Join the Network <ArrowRight size={14} className="text-emerald-500" />
                </button>
              </div>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "Store Inventory", icon: Package },
                { title: "Fulfill Orders", icon: CheckCircle2 },
                { title: "Deliver Directly", icon: Zap },
                { title: "Performance Driven", icon: TrendingUp }
              ].map((f, i) => (
                <div key={i} className="glass p-8 border-white/5 flex flex-col justify-between">
                  <f.icon className="text-indigo-500 mb-8" size={32} />
                  <h3 className="text-lg font-bold">{f.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 27-Minute Promise */}
      <section className="py-32 px-6 bg-indigo-600 overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter italic">The 27-Minute Promise</h2>
          <p className="text-xl md:text-2xl text-white/80 font-medium mb-12 leading-relaxed">
            Our system prioritizes ultra-fast delivery where possible. Speed is not luck. It’s AI orchestration.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Nearby Merchant", "Available Stock", "Fast Prep"].map((t, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl">
                <span className="text-white font-black text-sm uppercase tracking-widest">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We Are Different */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-20 text-center">
            <h2 className="text-4xl font-black mb-4 tracking-tight">Not a Marketplace. A Commerce Network.</h2>
            <p className="text-zinc-500 font-bold uppercase text-[10px] tracking-[0.3em]">No browsing. No friction. No delay.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="glass p-10 border-rose-500/20">
              <h3 className="text-rose-400 font-black text-xl mb-8 uppercase tracking-widest">Traditional</h3>
              <ul className="space-y-6">
                {["You search", "You compare", "You wait"].map((l, i) => (
                  <li key={i} className="flex items-center gap-4 text-zinc-500 font-medium">
                    <SearchX size={18} /> {l}
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass p-10 border-emerald-500/20 bg-emerald-500/[0.03] scale-105 shadow-2xl">
              <h3 className="text-emerald-400 font-black text-xl mb-8 uppercase tracking-widest">In27Minutes</h3>
              <ul className="space-y-6">
                {["You speak", "AI decides", "Merchants execute"].map((l, i) => (
                  <li key={i} className="flex items-center gap-4 text-white font-bold">
                    <Zap size={18} className="text-emerald-400" /> {l}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trust / System */}
      <section id="performance" className="py-32 px-6 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl font-black mb-8 tracking-tight">Built on Performance Intelligence</h2>
            <p className="text-lg text-zinc-400 leading-relaxed mb-8">
              Every Field Merchant is scored in real time. Top performers get more orders. Low performers get filtered out.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Delivery Speed", val: "94%" },
                { label: "Accuracy", val: "99%" },
                { label: "Reliability", val: "97%" },
                { label: "Satisfaction", val: "4.9/5" }
              ].map((m, i) => (
                <div key={i} className="p-4 bg-zinc-950/50 rounded-xl border border-white/5">
                  <p className="text-[10px] text-zinc-500 font-black uppercase mb-1">{m.label}</p>
                  <p className="text-white font-black text-xl">{m.val}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="glass p-8 border-indigo-500/20">
            <h4 className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-6">Real-Time Scoring Engine</h4>
            <div className="space-y-4">
              {[
                { name: "Merchant #001", score: 982, status: "Active" },
                { name: "Merchant #002", score: 945, status: "Active" },
                { name: "Merchant #003", score: 580, status: "Filtered" }
              ].map((m, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-zinc-950/50 rounded-xl">
                  <span className="text-sm font-bold text-white">{m.name}</span>
                  <div className="flex items-center gap-4">
                    <span className="font-mono font-black text-indigo-400">{m.score}</span>
                    <span className={`text-[8px] font-black uppercase px-2 py-1 rounded ${m.status === 'Active' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'}`}>
                      {m.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 px-6 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-indigo-600/20 blur-[100px] rounded-full -z-10" />
        <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">Start Shopping Differently</h2>
        <p className="text-xl text-zinc-400 font-medium mb-12 max-w-xl mx-auto">
          Tell AI what you need. We’ll handle everything else.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={onStartShopping}
            className="w-full sm:w-auto px-12 py-6 bg-white text-black rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-zinc-200 transition-all shadow-2xl"
          >
            Start Now
          </button>
          <button 
            onClick={onBecomeMerchant}
            className="w-full sm:w-auto px-12 py-6 bg-zinc-900 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] border border-zinc-800 hover:bg-zinc-800 transition-all"
          >
            Become a Merchant
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
          <div className="max-w-sm">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 bg-indigo-600 rounded flex items-center justify-center">
                <Cpu size={14} fill="white" />
              </div>
              <span className="font-black text-lg tracking-tighter">In27Minutes</span>
            </div>
            <p className="text-zinc-500 text-xs leading-relaxed font-medium">
              In27Minutes is an AI-native commerce network connecting customers and Field Merchants through intelligent routing and real-time fulfillment systems.
            </p>
          </div>
          <div className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">
            © 2026 In27Minutes. All rights reserved.
          </div>
        </div>
      </footer>

    </div>
  );
};

export default LandingPage;
