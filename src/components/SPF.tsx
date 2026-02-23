import React from 'react';
import { motion } from 'motion/react';
import { Building2, Network, Target, Settings, BarChart3, Verified } from 'lucide-react';

export default function SPF() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="px-6 pb-32"
    >
      {/* Hero Section */}
      <section className="py-12 text-center space-y-6">
        <div className="inline-block px-4 py-1.5 text-xs font-black tracking-widest text-primary uppercase bg-primary/10 rounded-full">
          Consultoria & Gestió
        </div>
        <h2 className="text-5xl md:text-6xl font-black leading-tight text-navy">
          Innovació i <br />
          <span className="gradient-text">Excel·lència</span>
        </h2>
        <p className="text-navy/60 text-lg leading-relaxed max-w-2xl mx-auto">
          A SPF ens dediquem a oferir solucions estratègiques personalitzades per a empreses que busquen optimitzar els seus processos.
        </p>
      </section>

      {/* Company Image */}
      <section className="mb-20">
        <div className="glass-card overflow-hidden relative aspect-video group">
          <img 
            src="https://picsum.photos/seed/office/1200/675" 
            alt="SPF Office" 
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent flex flex-col items-center justify-end pb-12">
            <Building2 size={64} className="text-white mb-4" />
            <span className="text-white font-black tracking-[0.3em] text-2xl">SPF BARCELONA</span>
          </div>
        </div>
      </section>

      {/* Structure & Functions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <section className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="size-12 rounded-2xl bg-accent-teal/10 flex items-center justify-center text-accent-teal">
              <Network size={24} />
            </div>
            <h3 className="text-3xl font-black text-navy">Estructura</h3>
          </div>
          <div className="glass-card p-4 overflow-hidden">
            <img 
              src="https://picsum.photos/seed/chart/800/600" 
              alt="Organigrama" 
              className="w-full rounded-3xl"
              referrerPolicy="no-referrer"
            />
            <p className="mt-6 text-sm text-navy/40 italic text-center font-medium">
              Representació visual de la jerarquia i equips de treball a SPF
            </p>
          </div>
        </section>

        <section className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="size-12 rounded-2xl bg-accent-pink/10 flex items-center justify-center text-accent-pink">
              <Target size={24} />
            </div>
            <h3 className="text-3xl font-black text-navy">Funcions</h3>
          </div>
          <div className="space-y-4">
            {[
              {
                title: "Consultoria Estratègica",
                desc: "Anàlisi de mercat i definició de fulls de ruta.",
                icon: <Target size={24} />
              },
              {
                title: "Optimització Operativa",
                desc: "Millora de processos interns i eficiència.",
                icon: <Settings size={24} />
              },
              {
                title: "Gestió de Projectes",
                desc: "Supervisió integral des de la concepció.",
                icon: <BarChart3 size={24} />
              }
            ].map((func, i) => (
              <motion.div 
                key={i}
                whileHover={{ x: 10 }}
                className="glass-card p-6 flex gap-6 items-center"
              >
                <div className="size-14 rounded-2xl bg-white shadow-lg flex items-center justify-center text-primary shrink-0">
                  {func.icon}
                </div>
                <div>
                  <h4 className="font-black text-xl text-navy">{func.title}</h4>
                  <p className="text-sm text-navy/50 mt-1">{func.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* About Card */}
      <section className="mt-20">
        <div className="bg-navy p-12 rounded-[3rem] text-white overflow-hidden relative">
          <div className="relative z-10 max-w-xl">
            <h3 className="text-4xl font-black mb-4">Sobre SPF</h3>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              Som un equip multidisciplinari compromès amb la qualitat i el servei al client a tota Catalunya.
            </p>
            <button className="bg-primary text-white px-8 py-4 rounded-2xl font-bold shadow-xl shadow-primary/20 hover:scale-105 transition-transform">
              Contacta amb nosaltres
            </button>
          </div>
          <Verified size={240} className="absolute -bottom-12 -right-12 text-white/5 select-none" />
        </div>
      </section>
    </motion.div>
  );
}
