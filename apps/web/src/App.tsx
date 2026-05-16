import { useState } from 'react'
import MerchantDashboard from './components/MerchantDashboard'
import CustomerTracking from './components/CustomerTracking'
import ChatCommerce from './components/ChatCommerce'

type AppView = 'chat' | 'merchant' | 'customer';

function App() {
  const [view, setView] = useState<AppView>('chat');

  return (
    <div className="App relative bg-zinc-950 min-h-screen">
      {/* View Toggle */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 glass p-1.5 flex gap-1 border-white/10 shadow-2xl">
        <button 
          onClick={() => setView('chat')}
          className={`px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
            view === 'chat' ? 'bg-indigo-600 text-white glow' : 'text-zinc-500 hover:text-white'
          }`}
        >
          AI Chat
        </button>
        <button 
          onClick={() => setView('merchant')}
          className={`px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
            view === 'merchant' ? 'bg-indigo-600 text-white glow' : 'text-zinc-500 hover:text-white'
          }`}
        >
          Merchant Dash
        </button>
        <button 
          onClick={() => setView('customer')}
          className={`px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
            view === 'customer' ? 'bg-indigo-600 text-white glow' : 'text-zinc-500 hover:text-white'
          }`}
        >
          Order Tracking
        </button>
      </div>

      <div className="pb-24">
        {view === 'chat' && <ChatCommerce />}
        {view === 'merchant' && <MerchantDashboard />}
        {view === 'customer' && <CustomerTracking />}
      </div>
    </div>
  )
}

export default App
