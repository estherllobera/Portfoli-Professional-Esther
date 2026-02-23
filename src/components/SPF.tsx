import React from 'react';
import { motion } from 'motion/react';
import { Building2, Network, Target, Settings, BarChart3, Verified } from 'lucide-react';

export default function SPF() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-lg mx-auto pb-24"
    >
      {/* Hero Section */}
      <section className="px-6 pt-10 pb-8 text-center">
        <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-primary uppercase bg-primary/10 rounded-full">
          Consultoria & Gestió
        </div>
        <h2 className="text-3xl font-extrabold leading-tight text-slate-900 mb-4">
          Innovació i Excel·lència Professional
        </h2>
        <p className="text-slate-600 text-base leading-relaxed">
          A SPF ens dediquem a oferir solucions estratègiques personalitzades per a empreses que busquen optimitzar els seus processos i créixer de manera sostenible en el mercat actual.
        </p>
      </section>

      {/* Company Image */}
      <section className="px-6 mb-12">
        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-sm border border-slate-200 bg-white flex items-center justify-center">
          <img 
            src="https://picsum.photos/seed/office/800/450" 
            alt="SPF Office" 
            className="absolute inset-0 w-full h-full object-cover opacity-90"
            referrerPolicy="no-referrer"
          />
          <div className="relative z-10 flex flex-col items-center">
            <Building2 size={48} className="text-white mb-2" />
            <span className="text-white font-bold tracking-widest text-lg">SPF BARCELONA</span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
        </div>
      </section>

      {/* Structure */}
      <section className="px-6 mb-12">
        <div className="flex items-center gap-3 mb-6">
          <Network className="text-primary" />
          <h3 className="text-xl font-bold text-slate-900">Estructura Organitzativa</h3>
        </div>
        <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="flex flex-col items-center">
            <img 
              src="https://picsum.photos/seed/chart/600/400" 
              alt="Organigrama" 
              className="w-full rounded-lg"
              referrerPolicy="no-referrer"
            />
            <p className="mt-4 text-xs text-slate-500 italic text-center">
              Representació visual de la jerarquia i equips de treball a SPF
            </p>
          </div>
        </div>
      </section>

      {/* Functions */}
      <section className="px-6 mb-12">
        <div className="flex items-center gap-3 mb-6">
          <Target className="text-primary" />
          <h3 className="text-xl font-bold text-slate-900">Funcions Desenvolupades</h3>
        </div>
        <div className="space-y-4">
          {[
            {
              title: "Consultoria Estratègica",
              desc: "Anàlisi de mercat i definició de fulls de ruta per a la transformació digital.",
              icon: <Target size={20} className="text-primary" />
            },
            {
              title: "Optimització Operativa",
              desc: "Millora de processos interns per augmentar l'eficiència i reduir costos.",
              icon: <Settings size={20} className="text-primary" />
            },
            {
              title: "Gestió de Projectes",
              desc: "Supervisió integral des de la concepció fins a l'execució final.",
              icon: <BarChart3 size={20} className="text-primary" />
            }
          ].map((func, i) => (
            <div key={i} className="flex gap-4 p-4 bg-white rounded-xl border border-slate-200 transition-all hover:border-primary/50">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                {func.icon}
              </div>
              <div>
                <h4 className="font-bold text-slate-900">{func.title}</h4>
                <p className="text-sm text-slate-600 mt-1">{func.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Card */}
      <section className="px-6">
        <div className="bg-primary p-8 rounded-2xl text-white overflow-hidden relative">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-2">Sobre SPF</h3>
            <p className="text-blue-50 text-sm leading-relaxed mb-6">
              Som un equip multidisciplinari compromès amb la qualitat i el servei al client a tota Catalunya.
            </p>
            <button className="bg-white text-primary px-6 py-2.5 rounded-lg font-bold text-sm shadow-md transition-transform active:scale-95">
              Contacta amb nosaltres
            </button>
          </div>
          <Verified size={120} className="absolute -bottom-4 -right-4 text-white/10 select-none" />
        </div>
      </section>
    </motion.div>
  );
}
