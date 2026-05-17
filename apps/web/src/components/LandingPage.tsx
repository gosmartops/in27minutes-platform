import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Bot, Zap, Package, MessageSquare, UserCheck, 
  SearchX, CheckCircle2, TrendingUp, Cpu
} from 'lucide-react';

interface LandingPageProps {
  onStartShopping: () => void;
  onBecomeMerchant: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onStartShopping, onBecomeMerchant }) => {
  return (
    <div className="bg-[#050505] min-h-screen text-white font-sans selection:bg-cyan-400 selection:text-black">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-black text-2xl tracking-tighter text-white">
              IN27MINUTES<span className="text-cyan-400">.</span>
            </span>
          </div>
          
          <div className="hidden lg:flex items-center gap-8">
            {['How It Works', 'Merchants', 'Performance'].map((item, i) => (
              <a 
                key={i} 
                href={`#${item.toLowerCase().replace(/ /g, '-')}`}
                className="text-[9px] font-black uppercase tracking-[0.1em] text-neutral-500 hover:text-cyan-400 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <button 
              onClick={onBecomeMerchant}
              className="hidden md:block text-[9px] font-black uppercase tracking-[0.1em] text-neutral-500 hover:text-white transition-colors"
            >
              Merchants
            </button>
            <button 
              onClick={onStartShopping}
              className="px-6 py-3 bg-white text-black text-[9px] font-black uppercase tracking-[0.1em] rounded-none hover:bg-cyan-400 transition-colors flex items-center gap-2"
            >
              Launch App <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-32 pb-24 relative">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-400/10 blur-[120px] rounded-full pointer-events-none" />

        {/* Hero Section */}
        <section className="px-6 relative z-10 pt-20 pb-32">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block mb-6">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-400">
                  —— AI-NATIVE COMMERCE NETWORK ——
                </span>
              </div>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9]">
                <span className="text-white">Commerce.</span><br/>
                <span className="text-neutral-500">Delivered in 27 Minutes.</span>
              </h1>
              <p className="text-xl md:text-2xl text-neutral-400 font-medium max-w-2xl mx-auto leading-relaxed mb-12">
                In27Minutes is an AI-native commerce network where you simply say what you need, and our AI finds it, assigns a Field Merchant, and delivers it fast.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <button 
                  onClick={onStartShopping}
                  className="w-full sm:w-auto px-10 py-5 bg-cyan-400 text-black rounded-none font-black text-[10px] uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:bg-white transition-all flex items-center justify-center gap-3"
                >
                  Start Shopping <ArrowRight size={18} />
                </button>
                <button 
                  onClick={onBecomeMerchant}
                  className="w-full sm:w-auto px-10 py-5 bg-[#0a0a0a] text-white rounded-none font-black text-[10px] uppercase tracking-[0.2em] border border-white/10 hover:border-cyan-400 transition-all"
                >
                  Become a Field Merchant
                </button>
              </div>
              <p className="text-[9px] text-neutral-600 font-bold uppercase tracking-[0.3em]">
                Powered by AI routing, real-time inventory, and a performance-based merchant network.
              </p>
            </motion.div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-32 px-6 border-t border-white/5 bg-[#0a0a0a]/30">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20 text-center">
              <div className="mb-4">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-400">
                  —— OPERATIONAL WORKFLOW ——
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">How In27Minutes Works<span className="text-cyan-400">.</span></h2>
              <p className="text-neutral-500 font-bold uppercase text-[10px] tracking-[0.3em]">Just intent → AI → delivery</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Tell Us What You Need", text: "Just type, speak, or upload a photo. “I need an iPhone 13 under ₦500k in Lagos”", icon: MessageSquare },
                { step: "02", title: "AI Understands Intent", text: "Our AI breaks down product, budget, urgency, and location. No searching required.", icon: Bot },
                { step: "03", title: "Assign Best Merchant", text: "Routed to the closest, fastest, and most reliable Field Merchant. Only performance-ranked.", icon: UserCheck },
                { step: "04", title: "Delivered in Minutes", text: "The merchant fulfills and delivers directly. We track everything in real time.", icon: Zap }
              ].map((s, i) => (
                <div key={i} className="bg-neutral-900/40 p-8 border border-white/5 group hover:border-cyan-400/30 hover:bg-neutral-900/80 transition-all rounded-[2rem] relative overflow-hidden backdrop-blur-md">
                  <div className="flex justify-between items-start mb-8 relative z-10">
                    <div className="w-12 h-12 rounded-full bg-cyan-400/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-400 group-hover:text-black transition-all">
                      <s.icon size={20} />
                    </div>
                    <span className="font-mono font-black text-white/5 text-4xl leading-none group-hover:text-cyan-400/20 transition-colors">{s.step}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white relative z-10">{s.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed relative z-10">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="py-32 px-6 border-t border-white/5">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="mb-4">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-400">
                  —— PROTOCOL ADVANTAGE ——
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight leading-tight">A New Way to Shop<span className="text-cyan-400">.</span></h2>
              <div className="space-y-6 text-neutral-400 text-lg leading-relaxed">
                <p>Traditional e-commerce makes you search. <span className="text-white font-bold">We remove searching completely.</span></p>
                <div className="space-y-4">
                  {[
                    "Understand what you want",
                    "Find the best available option",
                    "Assign the fastest merchant",
                    "Optimize delivery in real time"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <CheckCircle2 size={20} className="text-cyan-400 flex-shrink-0" />
                      <span className="text-sm font-bold text-neutral-300">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="pt-6 border-t border-white/5">
                  The result: <span className="text-white font-black italic">Shopping becomes instant decision-making, not browsing.</span>
                </p>
              </div>
            </div>
            <div className="bg-cyan-400/5 p-12 border border-cyan-400/20 relative overflow-hidden rounded-[3rem] backdrop-blur-md">
               <div className="absolute -top-24 -right-24 w-64 h-64 bg-cyan-400/20 blur-[80px] rounded-full" />
               <div className="relative z-10 space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-cyan-400/20 flex items-center justify-center text-cyan-400 flex-shrink-0">
                      <Bot size={20} />
                    </div>
                    <div className="bg-[#0a0a0a]/80 p-5 rounded-2xl border border-white/5 text-sm text-neutral-300 backdrop-blur-sm">
                      "I need a high-spec smartphone for content creation, budget ₦800k, delivery to Victoria Island."
                    </div>
                  </div>
                  <div className="flex flex-row-reverse items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-500 flex-shrink-0">
                      <Cpu size={20} />
                    </div>
                    <div className="bg-cyan-400 p-5 rounded-2xl text-sm text-black font-bold shadow-[0_0_20px_rgba(34,211,238,0.2)]">
                      "Analyzing 42 local inventories... Matched with 'Silicon Valley VI'. Delivery ETA: 19 minutes."
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* Field Merchants */}
        <section id="merchants" className="py-32 px-6 border-t border-white/5 bg-[#0a0a0a]/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div className="lg:col-span-5">
                <div className="mb-4">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-400">
                    —— FULFILLMENT LAYER ——
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight leading-tight">Meet Field Merchants<span className="text-cyan-400">.</span></h2>
                <p className="text-lg text-neutral-400 leading-relaxed mb-10">
                  Field Merchants are the backbone of In27Minutes. They are real, verified local businesses that store inventory, fulfill orders, and deliver directly.
                </p>
                <div className="p-8 bg-cyan-400/[0.02] border border-cyan-400/20 rounded-[2rem]">
                  <h4 className="text-cyan-400 font-black text-2xl mb-6 italic">"Merchants don’t chase customers. AI brings customers to them."</h4>
                  <button 
                    onClick={onBecomeMerchant}
                    className="flex items-center gap-3 text-white font-black text-[10px] uppercase tracking-widest hover:gap-5 transition-all"
                  >
                    Join the Network <ArrowRight size={14} className="text-cyan-400" />
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
                  <div key={i} className="bg-neutral-900/40 p-8 border border-white/5 flex flex-col justify-between rounded-[2rem] hover:border-cyan-400/30 transition-all backdrop-blur-md">
                    <f.icon className="text-cyan-400 mb-8" size={28} />
                    <h3 className="text-lg font-bold text-white">{f.title}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why We Are Different */}
        <section className="py-32 px-6 border-t border-white/5">
          <div className="max-w-5xl mx-auto">
            <div className="mb-20 text-center">
              <div className="mb-4">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-400">
                  —— NETWORK DIFFERENTIATION ——
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">Not a Marketplace. A Commerce Network<span className="text-cyan-400">.</span></h2>
              <p className="text-neutral-500 font-bold uppercase text-[10px] tracking-[0.3em]">No browsing. No friction. No delay.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-neutral-900/30 p-10 border border-white/5 rounded-[2rem] backdrop-blur-md">
                <h3 className="text-neutral-500 font-black text-xl mb-10 uppercase tracking-widest">Traditional</h3>
                <ul className="space-y-8">
                  {["You search", "You compare", "You wait"].map((l, i) => (
                    <li key={i} className="flex items-center gap-5 text-neutral-500 font-medium">
                      <SearchX size={20} /> {l}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-cyan-400/5 p-10 border border-cyan-400/30 shadow-[0_0_40px_rgba(34,211,238,0.1)] rounded-[2rem] backdrop-blur-md relative transform md:-translate-y-4">
                <div className="absolute top-0 right-0 p-6">
                  <span className="text-[8px] font-black bg-cyan-400 text-black px-3 py-1 rounded-full uppercase tracking-widest">In27Minutes</span>
                </div>
                <h3 className="text-cyan-400 font-black text-xl mb-10 uppercase tracking-widest">The New Standard</h3>
                <ul className="space-y-8">
                  {["You speak", "AI decides", "Merchants execute"].map((l, i) => (
                    <li key={i} className="flex items-center gap-5 text-white font-bold text-lg">
                      <Zap size={20} className="text-cyan-400" /> {l}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Trust / System */}
        <section id="performance" className="py-32 px-6 border-t border-white/5 bg-[#0a0a0a]/30">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="mb-4">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-400">
                  —— REPUTATION PROTOCOL ——
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight">Built on Performance Intelligence<span className="text-cyan-400">.</span></h2>
              <p className="text-lg text-neutral-400 leading-relaxed mb-10">
                Every Field Merchant is scored in real time. Top performers get more orders. Low performers get filtered out.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Delivery Speed", val: "94%" },
                  { label: "Accuracy", val: "99%" },
                  { label: "Reliability", val: "97%" },
                  { label: "Satisfaction", val: "4.9/5" }
                ].map((m, i) => (
                  <div key={i} className="p-5 bg-neutral-900/50 rounded-2xl border border-white/5 backdrop-blur-sm">
                    <p className="text-[9px] text-neutral-500 font-black uppercase tracking-widest mb-2">{m.label}</p>
                    <p className="text-white font-black text-2xl">{m.val}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-neutral-900/40 p-8 border border-white/10 rounded-[2rem] backdrop-blur-md">
              <h4 className="text-[10px] font-black text-cyan-400 uppercase tracking-[0.2em] mb-8">Real-Time Scoring Engine</h4>
              <div className="space-y-4">
                {[
                  { name: "Merchant #001", score: 982, status: "Active" },
                  { name: "Merchant #002", score: 945, status: "Active" },
                  { name: "Merchant #003", score: 580, status: "Filtered" }
                ].map((m, i) => (
                  <div key={i} className="flex items-center justify-between p-5 bg-[#0a0a0a]/80 rounded-xl border border-white/5">
                    <span className="text-sm font-bold text-white">{m.name}</span>
                    <div className="flex items-center gap-6">
                      <span className="font-mono font-black text-cyan-400">{m.score}</span>
                      <span className={`text-[8px] font-black uppercase px-3 py-1.5 rounded-none tracking-widest ${m.status === 'Active' ? 'bg-cyan-400/10 text-cyan-400 border border-cyan-400/20' : 'bg-neutral-800 text-neutral-500'}`}>
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
        <section className="py-40 px-6 border-t border-white/5 text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-400/10 blur-[120px] rounded-full -z-10" />
          <div className="mb-6">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-400">
              —— IMMEDIATE ACTIVATION ——
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter">Start Shopping Differently<span className="text-cyan-400">.</span></h2>
          <p className="text-xl text-neutral-400 font-medium mb-14 max-w-xl mx-auto">
            Tell AI what you need. We’ll handle everything else.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
              onClick={onStartShopping}
              className="w-full sm:w-auto px-12 py-6 bg-cyan-400 text-black rounded-none font-black text-[10px] uppercase tracking-[0.2em] hover:bg-white transition-all shadow-[0_0_30px_rgba(34,211,238,0.2)]"
            >
              Start Now
            </button>
            <button 
              onClick={onBecomeMerchant}
              className="w-full sm:w-auto px-12 py-6 bg-[#0a0a0a] text-white rounded-none font-black text-[10px] uppercase tracking-[0.2em] border border-white/10 hover:border-cyan-400 transition-all"
            >
              Become a Merchant
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-white/5 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-4">
            <span className="font-black text-3xl tracking-tighter text-white block mb-6">
              IN27MINUTES<span className="text-cyan-400">.</span>
            </span>
            <p className="text-neutral-500 text-sm leading-relaxed mb-8 pr-8">
              In27Minutes is an AI-native commerce network connecting customers and Field Merchants through intelligent routing and real-time fulfillment systems.
            </p>
            <div className="text-[9px] font-bold text-neutral-600 uppercase tracking-widest">
              © 2026 In27Minutes. All rights reserved.
            </div>
          </div>
          
          <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { title: 'Product', links: ['Routing', 'Merchants', 'Security', 'Pricing'] },
              { title: 'Solutions', links: ['Logistics', 'Retail', 'Enterprise', 'Custom'] },
              { title: 'Resources', links: ['Documentation', 'API', 'Case Studies', 'Blog'] },
              { title: 'Company', links: ['About', 'Careers', 'Contact', 'Legal'] }
            ].map((col, i) => (
              <div key={i}>
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white mb-8">
                  {col.title}
                </h4>
                <ul className="space-y-5">
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
