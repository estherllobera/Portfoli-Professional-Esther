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
    <div className="min-h-screen bg-background-light">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="flex items-center px-4 py-3 justify-between max-w-xl mx-auto">
          <div className="flex items-center gap-2">
            <div className="bg-primary p-1 rounded-lg">
              <GraduationCap size={20} className="text-white" />
            </div>
            <span className="font-bold text-lg tracking-tight">Portfolio</span>
          </div>
          <button className="p-2 rounded-full hover:bg-slate-100">
            <Menu size={24} />
          </button>
        </div>

        {/* Sub-nav Tabs */}
        <nav className="flex overflow-x-auto no-scrollbar px-4 gap-6 border-t border-slate-100 bg-white max-w-xl mx-auto">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentScreen(item.id as Screen)}
              className={`flex flex-col items-center justify-center border-b-2 pb-3 pt-4 shrink-0 transition-all duration-300 ${
                currentScreen === item.id 
                  ? 'border-primary text-slate-900' 
                  : 'border-transparent text-slate-500 hover:text-primary'
              }`}
            >
              <p className="text-[10px] font-bold uppercase tracking-wider">{item.label}</p>
            </button>
          ))}
        </nav>
      </header>

      {/* Main Content */}
      <main className="relative">
        <AnimatePresence mode="wait">
          <div key={currentScreen}>
            {renderScreen()}
          </div>
        </AnimatePresence>
      </main>

      {/* Bottom Navigation */}
      <footer className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 px-6 py-3">
        <div className="max-w-xl mx-auto flex justify-between items-center">
          <button 
            onClick={() => setActiveTab('inici')}
            className={`flex flex-col items-center gap-1 transition-colors ${activeTab === 'inici' ? 'text-primary' : 'text-slate-400'}`}
          >
            <Home size={24} fill={activeTab === 'inici' ? 'currentColor' : 'none'} />
            <span className="text-[10px] font-bold uppercase tracking-tighter">Inici</span>
          </button>
          <button 
            onClick={() => setActiveTab('estudis')}
            className={`flex flex-col items-center gap-1 transition-colors ${activeTab === 'estudis' ? 'text-primary' : 'text-slate-400'}`}
          >
            <School size={24} fill={activeTab === 'estudis' ? 'currentColor' : 'none'} />
            <span className="text-[10px] font-bold uppercase tracking-tighter">Estudis</span>
          </button>
          <button 
            onClick={() => setActiveTab('laboral')}
            className={`flex flex-col items-center gap-1 transition-colors ${activeTab === 'laboral' ? 'text-primary' : 'text-slate-400'}`}
          >
            <Briefcase size={24} fill={activeTab === 'laboral' ? 'currentColor' : 'none'} />
            <span className="text-[10px] font-bold uppercase tracking-tighter">Laboral</span>
          </button>
          <button 
            onClick={() => setActiveTab('perfil')}
            className={`flex flex-col items-center gap-1 transition-colors ${activeTab === 'perfil' ? 'text-primary' : 'text-slate-400'}`}
          >
            <User size={24} fill={activeTab === 'perfil' ? 'currentColor' : 'none'} />
            <span className="text-[10px] font-bold uppercase tracking-tighter">Perfil</span>
          </button>
        </div>
      </footer>
    </div>
  );
}
