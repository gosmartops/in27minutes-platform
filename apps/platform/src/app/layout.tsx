import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CommandPalette from "@/components/global/CommandPalette";
import CommandPaletteTrigger from "@/components/global/CommandPaletteTrigger";

const inter = Inter({ subsets: ["latin"], variable: '--font-sans' });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: '--font-mono' });

export const metadata: Metadata = {
  title: "In27Minutes | Rapid Commerce OS",
  description: "AI-native rapid commerce operating system. Delivered in 27 minutes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body className="antialiased min-h-screen bg-[#050505] text-white overflow-x-hidden selection:bg-accent/30 selection:text-white">
        <div className="living-bg" />
        
        {/* Global UI Skeleton Placeholder */}
        <div className="relative z-10 flex flex-col min-h-screen">
          {/* Top Navbar Placeholder */}
          <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-md px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-ping shadow-[0_0_8px_rgba(57,255,20,0.5)]"></div>
              <span className="font-bold font-satoshi tracking-tight text-xl">In27Minutes<span className="text-accent">.</span></span>
            </div>
            
            <nav className="hidden md:flex items-center gap-10 lg:gap-12 text-xs font-bold uppercase tracking-widest text-zinc-500">
              <a href="/" className="hover:text-white transition-colors py-2">OS</a>
              <a href="/app/home" className="hover:text-white transition-colors py-2">Commerce Engine</a>
              <a href="/merchant/dashboard" className="hover:text-white transition-colors py-2">Nodes</a>
              <a href="/driver/dashboard" className="hover:text-white transition-colors py-2">Fleet</a>
            </nav>
            
            <div className="flex items-center gap-4">
              <CommandPaletteTrigger />
              <a href="/auth/login" className="px-4 py-2 bg-white text-black font-bold uppercase tracking-wider text-[10px] hover:bg-accent hover:text-black transition-colors rounded-full">
                Initialize
              </a>
            </div>
          </header>

          {/* Main App Content */}
          <main className="flex-1 flex flex-col">
            {children}
          </main>
          
          {/* Global Footer (Marketing only ideally, but keeping it simple for now) */}
          <footer className="mt-auto border-t border-white/5 px-6 py-4 flex items-center justify-between text-[10px] text-zinc-600 font-bold uppercase tracking-widest">
            <p>Intelligence Orchestration: ON</p>
            <p className="text-accent">SLA: 27 MIN</p>
          </footer>
        </div>

        {/* Global Floating Actions & Command Palette */}
        <CommandPalette />
      </body>
    </html>
  );
}
