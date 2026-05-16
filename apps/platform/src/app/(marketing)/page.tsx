import { Search, MapPin, Zap } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-[80vh] items-center justify-center text-center px-4 relative">
      {/* Hero Content */}
      <div className="z-10 max-w-4xl mx-auto space-y-8 mt-12">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mx-auto mb-4">
          <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-widest text-zinc-300">
            System Online • 27-Minute SLA Active
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-satoshi font-black tracking-tighter leading-[1.1]">
          Commerce.<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-600">
            Delivered in 27 Minutes.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto font-medium leading-relaxed">
          In27Minutes is an AI-native commerce network where you simply say what you need, and our AI finds it, assigns a Field Merchant, and delivers it fast.
        </p>

        {/* Global Search/Intent Input */}
        <div className="max-w-2xl mx-auto relative group mt-12">
          <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 to-transparent rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
          <div className="relative flex items-center bg-[#0a0a0a] border border-white/10 rounded-2xl p-2 shadow-2xl">
            <div className="pl-4 pr-2 text-zinc-500">
              <Search size={20} />
            </div>
            <input 
              type="text"
              placeholder='e.g., "I need an iPhone 13 under ₦500k in Lagos"'
              className="w-full bg-transparent border-none text-white outline-none font-satoshi text-lg py-3 placeholder:text-zinc-600"
            />
            <button className="px-6 py-3 bg-white text-black font-bold uppercase tracking-wider text-[10px] rounded-xl hover:bg-accent transition-colors shrink-0">
              Request
            </button>
          </div>
        </div>
      </div>

      {/* Live Delivery Stats (Mock) */}
      <div className="mt-32 w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass p-6 text-left relative overflow-hidden group">
          <div className="absolute inset-x-0 bottom-0 h-1 bg-accent/20 group-hover:bg-accent transition-colors" />
          <MapPin className="text-zinc-500 mb-4" size={24} />
          <h3 className="text-3xl font-black font-satoshi text-white mb-1">1,402</h3>
          <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Active Field Nodes</p>
        </div>
        <div className="glass p-6 text-left relative overflow-hidden group">
          <div className="absolute inset-x-0 bottom-0 h-1 bg-accent/20 group-hover:bg-accent transition-colors" />
          <Zap className="text-zinc-500 mb-4" size={24} />
          <h3 className="text-3xl font-black font-satoshi text-white mb-1">18.4m</h3>
          <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Average Delivery Time</p>
        </div>
        <div className="glass p-6 text-left relative overflow-hidden group">
          <div className="absolute inset-x-0 bottom-0 h-1 bg-accent/20 group-hover:bg-accent transition-colors" />
          <Search className="text-zinc-500 mb-4" size={24} />
          <h3 className="text-3xl font-black font-satoshi text-white mb-1">99.9%</h3>
          <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Intent Match Rate</p>
        </div>
      </div>
    </div>
  );
}

