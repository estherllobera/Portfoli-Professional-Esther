import React from 'react';
import { motion } from 'motion/react';
import { Snowflake, Info, Building, HardHat, Users, Leaf, Mail, Link as LinkIcon } from 'lucide-react';

export default function Sermafred() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="px-6 pb-32"
    >
      {/* Hero Section */}
      <section className="py-12 text-center space-y-8">
        <div className="mb-6 inline-flex p-6 rounded-[2rem] bg-white shadow-2xl text-primary">
          <Building size={64} />
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-navy leading-tight">
          Benvinguts a <br />
          <span className="gradient-text uppercase">SERMAFRED LLEIDA, S.L.</span>
        </h1>
        <p className="text-xl text-navy/60 max-w-2xl mx-auto leading-relaxed">
          Líders en solucions de refrigeració industrial i climatització professional amb més de 20 anys d'experiència.
        </p>
      </section>

      {/* About Company Section */}
      <section className="py-12">
        <div className="glass-card p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="flex items-center gap-4 mb-8 text-primary">
            <Info size={32} />
            <h2 className="text-2xl font-black uppercase tracking-widest">Sobre l'empresa</h2>
          </div>
          <p className="text-navy/70 text-xl leading-relaxed max-w-3xl">
            Sermafred és una organització compromesa amb l'eficiència energètica i la innovació tecnològica. Ens especialitzem en el disseny, instal·lació i manteniment de sistemes crítics.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="p-8 bg-white rounded-3xl shadow-xl shadow-primary/5 border border-slate-50">
              <span className="block text-5xl font-black text-primary mb-2">50+</span>
              <span className="text-sm text-navy/40 uppercase font-black tracking-widest">Projectes Anuals</span>
            </div>
            <div className="p-8 bg-white rounded-3xl shadow-xl shadow-primary/5 border border-slate-50">
              <span className="block text-5xl font-black text-primary mb-2">24/7</span>
              <span className="text-sm text-navy/40 uppercase font-black tracking-widest">Servei Tècnic</span>
            </div>
          </div>
        </div>
      </section>

      {/* Organigram Section */}
      <section className="py-20 text-center space-y-12">
        <div className="space-y-4">
          <h2 className="text-5xl font-black text-navy">Estructura Organitzativa</h2>
          <p className="text-navy/40 font-medium">Representació visual de la jerarquia i equips de Sermafred.</p>
        </div>
        <div className="glass-card p-6 relative group overflow-hidden">
          <img 
            src="https://picsum.photos/seed/org/1200/800" 
            alt="Organigrama" 
            className="w-full h-auto rounded-[2rem] grayscale group-hover:grayscale-0 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
        </div>
      </section>

      {/* Responsibilities Section */}
      <section className="py-12 space-y-12">
        <h2 className="text-4xl font-black text-navy flex items-center gap-4">
          <Building className="text-primary" size={40} />
          Responsabilitats
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Gestió Projectes",
              desc: "Coordinació integral des del disseny fins a l'execució.",
              icon: <HardHat size={32} />
            },
            {
              title: "Lideratge",
              desc: "Supervisió de quadrilles tècniques en camp.",
              icon: <Users size={32} />
            },
            {
              title: "Optimització",
              desc: "Anàlisi i millora de sistemes energètics.",
              icon: <Leaf size={32} />
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="glass-card p-8 space-y-6"
            >
              <div className="size-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="text-2xl font-black text-navy leading-tight">{item.title}</h3>
              <p className="text-navy/50 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

    </motion.div>
  );
}
