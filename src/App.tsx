/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  School, 
  Home, 
  Briefcase, 
  User, 
  ChevronRight,
  GraduationCap
} from 'lucide-react';

import Estudis from './components/Estudis';
import Laboral from './components/Laboral';
import SPF from './components/SPF';
import Sermafred from './components/Sermafred';

type Screen = 'estudis' | 'laboral' | 'spf' | 'sermafred';
type Tab = 'inici' | 'estudis' | 'laboral' | 'perfil';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('estudis');
  const [activeTab, setActiveTab] = useState<Tab>('estudis');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'estudis': return <Estudis />;
      case 'laboral': return <Laboral />;
      case 'spf': return <SPF />;
      case 'sermafred': return <Sermafred />;
      default: return <Estudis />;
    }
  };

  const navItems = [
    { id: 'estudis', label: 'Estudis' },
    { id: 'laboral', label: 'Començament laboral' },
    { id: 'spf', label: 'SPF' },
    { id: 'sermafred', label: 'Sermafred' },
  ];

  return (
    <div className="min-h-screen bg-peach">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/60 backdrop-blur-lg border-b border-white/20">
        <div className="flex items-center px-6 py-4 justify-between max-w-4xl mx-auto">
          <div className="flex items-center gap-2">
            <div className="bg-primary p-2 rounded-xl shadow-lg shadow-primary/20">
              <GraduationCap size={24} className="text-white" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-navy">Esther Portfolio</span>
          </div>
          <button className="p-2 rounded-full hover:bg-white/50 transition-colors">
            <Menu size={24} className="text-navy" />
          </button>
        </div>

        {/* Sub-nav Tabs */}
        <nav className="flex overflow-x-auto no-scrollbar px-6 gap-8 bg-transparent max-w-4xl mx-auto">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentScreen(item.id as Screen)}
              className={`flex flex-col items-center justify-center pb-4 pt-2 shrink-0 transition-all duration-300 relative ${
                currentScreen === item.id 
                  ? 'text-primary font-bold' 
                  : 'text-navy/50 hover:text-primary'
              }`}
            >
              <span className="text-xs uppercase tracking-widest">{item.label}</span>
              {currentScreen === item.id && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-full"
                />
              )}
            </button>
          ))}
        </nav>
      </header>

      {/* Main Content */}
      <main className="relative py-8">
        <AnimatePresence mode="wait">
          <div key={currentScreen} className="max-w-4xl mx-auto">
            {renderScreen()}
          </div>
        </AnimatePresence>
      </main>

      {/* Bottom Navigation */}
      <footer className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-white/80 backdrop-blur-xl border border-white/40 px-8 py-4 rounded-full shadow-2xl flex gap-12 items-center">
        {[
          { id: 'inici', icon: Home, label: 'Inici' },
          { id: 'estudis', icon: School, label: 'Estudis' },
          { id: 'laboral', icon: Briefcase, label: 'Laboral' },
          { id: 'perfil', icon: User, label: 'Perfil' },
        ].map((tab) => (
          <button 
            key={tab.id}
            onClick={() => setActiveTab(tab.id as Tab)}
            className={`flex flex-col items-center gap-1 transition-all duration-300 ${
              activeTab === tab.id ? 'text-primary scale-110' : 'text-navy/30 hover:text-navy/60'
            }`}
          >
            <tab.icon size={24} strokeWidth={activeTab === tab.id ? 2.5 : 2} />
            <span className="text-[10px] font-bold uppercase tracking-tighter">{tab.label}</span>
          </button>
        ))}
      </footer>
    </div>
  );
}
