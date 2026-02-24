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
          Auxiliar Administrativa
        </div>
        <h2 className="text-5xl md:text-6xl font-black leading-tight text-navy">
          SPF DIANA <br />
          <span className="gradient-text">ESPAÑA, S.L.</span>
        </h2>
        <p className="text-navy/60 text-lg leading-relaxed max-w-2xl mx-auto">
          A SPF, som especialistes en el disseny i la producció de solucions d’alta palatabilitat per a la indústria del pet food. La nostra missió és transformar l'alimentació diària de gossos i gats en una experiència sensorial única, desenvolupant saboritzants d'alta qualitat que garanteixen que cada àpat sigui irresistible. Treballem amb tecnologia d'avantguarda per satisfer els paladars més exigents i millorar el benestar nutricional de les mascotes.
        </p>
      </section>

      {/* Company Image */}
      <section className="mb-20">
        <div className="glass-card overflow-hidden relative aspect-video group">
          <img 
            src="https://picsum.photos/seed/spf-mountain/1200/675" 
            alt="SPF Office" 
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent flex flex-col items-center justify-end pb-12">
            <Building2 size={64} className="text-white mb-4" />
            <span className="text-white font-black tracking-[0.3em] text-2xl uppercase">SPF DIANA ESPAÑA, S.L.</span>
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
          <div className="glass-card p-8 overflow-hidden bg-white">
            <div className="flex flex-col items-center space-y-8">
              <h4 className="text-2xl font-black text-navy mb-4 uppercase tracking-widest">Organigrama</h4>
              
              {/* Gerent */}
              <div className="relative">
                <div className="border-2 border-navy px-12 py-3 font-bold text-navy bg-white shadow-sm">
                  Gerent
                </div>
                <div className="absolute left-1/2 -bottom-8 w-0.5 h-8 bg-navy -translate-x-1/2" />
              </div>

              {/* Horizontal Line */}
              <div className="relative w-full px-4">
                <div className="h-0.5 bg-navy w-full" />
                {/* Vertical connectors */}
                <div className="absolute left-[16.6%] top-0 w-0.5 h-8 bg-navy" />
                <div className="absolute left-1/2 top-0 w-0.5 h-8 bg-navy -translate-x-1/2" />
                <div className="absolute right-[16.6%] top-0 w-0.5 h-8 bg-navy" />
              </div>

              {/* Departments */}
              <div className="grid grid-cols-3 w-full gap-4 pt-4">
                <div className="flex flex-col items-center space-y-8">
                  <div className="border-2 border-navy px-4 py-3 font-bold text-navy bg-white w-full text-center text-sm">
                    Administració
                  </div>
                  <div className="flex gap-4">
                    <div className="border-2 border-navy size-10 flex items-center justify-center font-bold text-navy">M</div>
                    <div className="border-2 border-navy size-10 flex items-center justify-center font-bold text-navy">E</div>
                  </div>
                </div>
                <div className="flex flex-col items-center space-y-8">
                  <div className="border-2 border-navy px-4 py-3 font-bold text-navy bg-white w-full text-center text-sm">
                    Producció
                  </div>
                  <div className="flex gap-4">
                    <div className="border-2 border-navy size-10 flex items-center justify-center font-bold text-navy">E</div>
                    <div className="border-2 border-navy size-10 flex items-center justify-center font-bold text-navy">E</div>
                  </div>
                </div>
                <div className="flex flex-col items-center space-y-8">
                  <div className="border-2 border-navy px-4 py-3 font-bold text-navy bg-white w-full text-center text-sm">
                    Qualitat
                  </div>
                  <div className="flex gap-4">
                    <div className="border-2 border-navy size-10 flex items-center justify-center font-bold text-navy">J</div>
                    <div className="border-2 border-navy size-10 flex items-center justify-center font-bold text-navy">B</div>
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-12 text-sm text-navy/40 italic text-center font-medium">
              Representació visual de la jerarquia i equips de treball a SPF DIANA ESPAÑA, S.L.
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

    </motion.div>
  );
}
