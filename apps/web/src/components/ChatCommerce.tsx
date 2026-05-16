import React, { useState, useRef, useEffect } from 'react';
import { 
  Send, 
  Sparkles, 
  Package, 
  Clock, 
  ShieldCheck, 
  ArrowRight,
  User,
  Bot
} from 'lucide-react';
import { motion } from 'framer-motion';
import { api } from '../lib/agents';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  results?: any[];
}

const ChatCommerce: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', role: 'assistant', content: "Hi! I'm your In27Minutes assistant. What do you need delivered in 27 minutes or less?" }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg: Message = { id: Date.now().toString(), role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    try {
      const response = await api.query('user-1', input);
      const assistantMsg: Message = { 
        id: (Date.now() + 1).toString(), 
        role: 'assistant', 
        content: response.explanation,
        results: response.results
      };
      setMessages(prev => [...prev, assistantMsg]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-zinc-950 text-white max-w-2xl mx-auto border-x border-zinc-900">
      {/* Chat Header */}
      <header className="p-6 border-b border-zinc-900 flex items-center justify-between bg-zinc-950/50 backdrop-blur-md sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-none bg-cyan-400 flex items-center justify-center glow shadow-[0_0_15px_rgba(34,211,238,0.3)]">
            <Sparkles size={20} fill="black" />
          </div>
          <div>
            <h1 className="font-black text-lg tracking-tight">In27Minutes<span className="text-cyan-400">.</span></h1>
            <p className="text-[9px] text-cyan-400 font-black uppercase tracking-[0.2em]">AI Shopping Agent</p>
          </div>
        </div>
      </header>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-8 scroll-smooth">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
            <div className={`w-10 h-10 rounded-none flex-shrink-0 flex items-center justify-center ${
              msg.role === 'assistant' ? 'bg-cyan-400/10 text-cyan-400 border border-cyan-400/20' : 'bg-zinc-800 text-zinc-400 border border-zinc-700'
            }`}>
              {msg.role === 'assistant' ? <Bot size={20} /> : <User size={20} />}
            </div>
            
            <div className={`space-y-4 max-w-[85%] ${msg.role === 'user' ? 'text-right' : ''}`}>
              <div className={`inline-block p-4 rounded-none text-sm font-medium leading-relaxed whitespace-pre-line ${
                msg.role === 'user' ? 'bg-cyan-400 text-black shadow-lg font-bold' : 'bg-zinc-900 text-zinc-300 border border-zinc-800'
              }`}>
                {msg.content}
              </div>

              {msg.results && msg.results.length > 0 && (
                <div className="grid grid-cols-1 gap-4 mt-4">
                  {msg.results.map((res: any, i: number) => (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      key={i}
                      className="glass p-5 border-cyan-400/30 bg-cyan-400/[0.03] group hover:border-cyan-400/50 transition-all cursor-pointer rounded-[32px]"
                    >
                      <div className="flex gap-4">
                        <div className="w-16 h-16 rounded-[32px] bg-zinc-900 border border-zinc-800 flex items-center justify-center text-cyan-400">
                          <Package size={32} />
                        </div>
                         <div className="flex-1">
                          <div className="flex justify-between items-start mb-1 mt-1">
                            <h4 className="font-bold text-white">{res.title}</h4>
                            <span className="text-emerald-400 font-mono font-black">₦{(res.price/1000).toFixed(0)}k</span>
                          </div>
                          <p className="text-[9px] text-zinc-500 font-black uppercase tracking-[0.2em] mb-3">{res.merchant_name} · {res.eta_minutes}m · Tier {res.sla_tier}</p>
                          <div className="flex items-center gap-3">
                            <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-none font-bold flex items-center gap-1">
                              <ShieldCheck size={10} /> Verified Stock
                            </span>
                            <span className="text-[10px] bg-cyan-400/10 text-cyan-400 px-2 py-0.5 rounded-none font-bold flex items-center gap-1">
                              <Clock size={10} /> 27M Promise
                            </span>
                          </div>
                        </div>
                      </div>
                      <button className="w-full mt-5 py-3 bg-white text-black rounded-none font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-cyan-400 transition-colors">
                        BUY NOW <ArrowRight size={14} />
                      </button>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-none bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 flex items-center justify-center">
              <Bot size={20} />
            </div>
            <div className="bg-zinc-900 p-4 rounded-none flex gap-1 items-center border border-zinc-800">
              <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1 }} className="w-1.5 h-1.5 bg-zinc-500 rounded-full" />
              <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-1.5 h-1.5 bg-zinc-500 rounded-full" />
              <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-1.5 h-1.5 bg-zinc-500 rounded-full" />
            </div>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="p-6 border-t border-zinc-900 bg-zinc-950/80 backdrop-blur-xl">
        <form onSubmit={handleSubmit} className="relative">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="What do you need?" 
            className="w-full bg-zinc-900 border border-zinc-800 rounded-none py-4 px-6 pr-16 text-sm font-medium focus:outline-none focus:border-cyan-400/50 transition-all placeholder:text-zinc-600"
          />
          <button 
            type="submit"
            className="absolute right-2 top-2 bottom-2 aspect-square bg-cyan-400 rounded-none flex items-center justify-center text-black hover:bg-white transition-colors"
          >
            <Send size={18} />
          </button>
        </form>
        <p className="mt-4 text-[9px] text-zinc-600 font-black uppercase text-center tracking-[0.2em]">
          Secured by AI Routing · 27-Minute Standard
        </p>
      </div>
    </div>
  );
};

export default ChatCommerce;
