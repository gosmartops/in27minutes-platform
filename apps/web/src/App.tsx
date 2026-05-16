import { useState } from 'react'
import MerchantDashboard from './components/MerchantDashboard'
import CustomerTracking from './components/CustomerTracking'
import ChatCommerce from './components/ChatCommerce'
import LandingPage from './components/LandingPage'
import CustomerOnboarding from './components/onboarding/CustomerOnboarding'
import MerchantOnboarding from './components/onboarding/MerchantOnboarding'

type AppView = 'home' | 'customerOnboarding' | 'merchantOnboarding' | 'chat' | 'merchant' | 'customer';

function App() {
  const [view, setView] = useState<AppView>('home');

  return (
    <div className="App relative bg-zinc-950 min-h-screen">
      <div className="living-bg" />
      {/* View Toggle */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 glass p-1.5 flex gap-1 border-white/10 shadow-2xl rounded-none">
        <button 
          onClick={() => setView('home')}
          className={`px-5 py-2.5 rounded-none text-[10px] font-black uppercase tracking-widest transition-all ${
            view === 'home' ? 'bg-cyan-400 text-black glow' : 'text-zinc-500 hover:text-white'
          }`}
        >
          Home
        </button>
        <button 
          onClick={() => setView('chat')}
          className={`px-5 py-2.5 rounded-none text-[10px] font-black uppercase tracking-widest transition-all ${
            view === 'chat' ? 'bg-cyan-400 text-black glow' : 'text-zinc-500 hover:text-white'
          }`}
        >
          AI Chat
        </button>
        <button 
          onClick={() => setView('merchant')}
          className={`px-5 py-2.5 rounded-none text-[10px] font-black uppercase tracking-widest transition-all ${
            view === 'merchant' ? 'bg-cyan-400 text-black glow' : 'text-zinc-500 hover:text-white'
          }`}
        >
          Merchant Dash
        </button>
        <button 
          onClick={() => setView('customer')}
          className={`px-5 py-2.5 rounded-none text-[10px] font-black uppercase tracking-widest transition-all ${
            view === 'customer' ? 'bg-cyan-400 text-black glow' : 'text-zinc-500 hover:text-white'
          }`}
        >
          Order Tracking
        </button>
      </div>

      <div className="pb-24">
        {view === 'home' && (
          <LandingPage 
            onStartShopping={() => setView('customerOnboarding')} 
            onBecomeMerchant={() => setView('merchantOnboarding')} 
          />
        )}
        {view === 'customerOnboarding' && <CustomerOnboarding onComplete={() => setView('chat')} />}
        {view === 'merchantOnboarding' && <MerchantOnboarding onComplete={() => setView('merchant')} />}
        {view === 'chat' && <ChatCommerce />}
        {view === 'merchant' && <MerchantDashboard />}
        {view === 'customer' && <CustomerTracking />}
      </div>
    </div>
  )
}

export default App
