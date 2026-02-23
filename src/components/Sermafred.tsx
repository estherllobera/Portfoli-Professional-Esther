import React from 'react';
import { motion } from 'motion/react';
import { Snowflake, Info, Building, HardHat, Users, Leaf, Mail, Link as LinkIcon } from 'lucide-react';

export default function Sermafred() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-screen-md mx-auto pb-24"
    >
      {/* Hero Section */}
      <section className="px-6 py-12 md:py-20 text-center">
        <div className="mb-6 inline-flex p-4 rounded-full bg-primary/10 text-primary">
          <Building size={48} />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
          Benvinguts a <span className="text-primary">Sermafred</span>
        </h1>
        <p className="text-lg text-slate-600 max-w-lg mx-auto leading-relaxed">
          Líders en solucions de refrigeració industrial i climatització professional amb més de 20 anys d'experiència al sector.
        </p>
      </section>

      {/* About Company Section */}
      <section className="px-6 py-8">
        <div className="bg-white rounded-xl p-8 border border-slate-100 shadow-sm">
          <div className="flex items-center gap-3 mb-4 text-primary">
            <Info size={20} />
            <h2 className="text-xl font-bold uppercase tracking-wider text-sm">Sobre l'empresa</h2>
          </div>
          <p className="text-slate-700 leading-relaxed">
            Sermafred és una organització compromesa amb l'eficiència energètica i la innovació tecnològica. Ens especialitzem en el disseny, instal·lació i manteniment de sistemes crítics per a la indústria alimentària i farmacèutica, garantint sempre els més alts estàndards de qualitat i sostenibilitat.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="p-4 bg-background-light rounded-lg border-l-4 border-primary">
              <span className="block text-2xl font-bold text-primary">50+</span>
              <span className="text-xs text-slate-500 uppercase font-medium">Projectes Anuals</span>
            </div>
            <div className="p-4 bg-background-light rounded-lg border-l-4 border-primary">
              <span className="block text-2xl font-bold text-primary">24/7</span>
              <span className="text-xs text-slate-500 uppercase font-medium">Servei Tècnic</span>
            </div>
          </div>
        </div>
      </section>

      {/* Organigram Section */}
      <section className="px-6 py-12 text-center">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Estructura Organitzativa</h2>
          <div className="h-1 w-12 bg-primary mx-auto rounded-full"></div>
        </div>
        <div className="relative bg-white p-4 rounded-xl shadow-md border border-slate-100 overflow-hidden">
          <img 
            src="https://picsum.photos/seed/org/800/500" 
            alt="Organigrama" 
            className="w-full h-auto rounded-lg grayscale hover:grayscale-0 transition-all duration-500"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>
        </div>
        <p className="mt-4 text-sm text-slate-500 italic">
          Representació visual de la jerarquia i equips de Sermafred.
        </p>
      </section>

      {/* Responsibilities Section */}
      <section className="px-6 py-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
          <Building className="text-primary" />
          Responsabilitats Actuals
        </h2>
        <div className="space-y-6">
          {[
            {
              title: "Gestió de Projectes Tècnics",
              desc: "Coordinació integral des de la fase de disseny fins a l'execució final de sistemes de fred industrial, assegurant terminis i pressupostos.",
              icon: <HardHat size={24} />
            },
            {
              title: "Lideratge d'Equips",
              desc: "Supervisió de quadrilles tècniques en camp, fomentant un entorn de treball segur i eficient sota les normatives ISO vigents.",
              icon: <Users size={24} />
            },
            {
              title: "Optimització Energètica",
              desc: "Anàlisi i implementació de millores en sistemes existents per reduir la petjada de carboni i el consum elèctric dels nostres clients.",
              icon: <Leaf size={24} />
            }
          ].map((item, i) => (
            <div key={i} className="flex gap-4 group">
              <div className="flex-none w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                {item.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="px-6 py-12 mt-12 border-t border-slate-200 text-center">
        <div className="mb-6">
          <div className="bg-primary/5 inline-block p-4 rounded-xl border border-primary/20">
            <p className="text-slate-900 font-semibold">T'interessa saber-ne més?</p>
            <p className="text-sm text-slate-500 mt-1">Connectem professionalment.</p>
            <div className="flex justify-center gap-4 mt-4">
              <button className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center text-primary hover:scale-110 transition-transform">
                <Mail size={20} />
              </button>
              <button className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center text-primary hover:scale-110 transition-transform">
                <LinkIcon size={20} />
              </button>
            </div>
          </div>
        </div>
        <p className="text-xs text-slate-400 uppercase tracking-widest">© 2024 Sermafred Portfolio • Minimal Design</p>
      </footer>
    </motion.div>
  );
}
