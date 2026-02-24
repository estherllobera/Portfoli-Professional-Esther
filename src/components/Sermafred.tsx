import React from 'react';
import { motion } from 'motion/react';
import { Building2, Network, Target, Settings, BarChart3, Snowflake } from 'lucide-react';

export default function Sermafred() {
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
          SERMAFRED <br />
          <span className="gradient-text uppercase">LLEIDA, S.L.</span>
        </h2>
        <p className="text-navy/60 text-lg leading-relaxed max-w-2xl mx-auto">
          A Sermafred, som especialistes en oferir solucions integrals de climatització per garantir el màxim confort a la teva llar o empresa. Ens dediquem tant a la instal·lació de sistemes d'aire condicionat d'última generació com al servei tècnic especialitzat, assegurant que els teus equips funcionin sempre amb la màxima eficiència energètica. Amb anys d'experiència en el sector, el nostre compromís és oferir un tracte proper, professional i de qualitat, adaptant-nos a les necessitats específiques de cada client i espai.
        </p>
      </section>

      {/* Company Image */}
      <section className="mb-20">
        <div className="glass-card overflow-hidden relative aspect-video group">
          <img 
            src="https://picsum.photos/seed/sermafred-cooling/1200/675" 
            alt="Sermafred Office" 
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent flex flex-col items-center justify-end pb-12">
            <Snowflake size={64} className="text-white mb-4" />
            <span className="text-white font-black tracking-[0.3em] text-2xl uppercase">SERMAFRED LLEIDA, S.L.</span>
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
                <div className="bg-[#0059a1] px-12 py-3 font-bold text-white rounded-lg shadow-md text-2xl min-w-[200px] text-center">
                  Gerent
                </div>
                <div className="absolute left-1/2 -bottom-8 w-1 h-8 bg-[#0059a1] -translate-x-1/2" />
              </div>

              {/* Horizontal Line to Level 2 */}
              <div className="relative w-full max-w-[400px]">
                <div className="h-1 bg-[#0059a1] w-full" />
                {/* Vertical connectors */}
                <div className="absolute left-0 top-0 w-1 h-8 bg-[#0059a1]" />
                <div className="absolute right-0 top-0 w-1 h-8 bg-[#0059a1]" />
              </div>

              {/* Second Level */}
              <div className="flex justify-between w-full max-w-2xl gap-12 pt-4">
                {/* Administració */}
                <div className="flex-1">
                  <div className="bg-[#0059a1] px-4 py-4 font-bold text-white rounded-lg shadow-md text-center text-lg">
                    Administració
                  </div>
                </div>
                
                {/* Tècnics */}
                <div className="flex-1 flex flex-col items-center">
                  <div className="bg-[#0059a1] px-4 py-4 font-bold text-white rounded-lg shadow-md text-center text-lg w-full">
                    Tècnics
                  </div>
                  
                  {/* Connector to sub-technicians */}
                  <div className="w-1 h-8 bg-[#0059a1]" />
                  <div className="relative w-full">
                    <div className="h-1 bg-[#0059a1] w-full" />
                    {/* Connectors to O, A, S */}
                    <div className="absolute left-0 top-0 w-1 h-8 bg-[#0059a1]" />
                    <div className="absolute left-1/2 top-0 w-1 h-8 bg-[#0059a1] -translate-x-1/2" />
                    <div className="absolute right-0 top-0 w-1 h-8 bg-[#0059a1]" />
                  </div>
                  
                  {/* Sub-Technicians (O, A, S) */}
                  <div className="flex justify-between w-full pt-8 gap-3">
                    <div className="bg-[#e85718] flex-1 aspect-square flex items-center justify-center font-bold text-white rounded-lg shadow-md text-2xl">O</div>
                    <div className="bg-[#008f39] flex-1 aspect-square flex items-center justify-center font-bold text-white rounded-lg shadow-md text-2xl">A</div>
                    <div className="bg-[#f9b200] flex-1 aspect-square flex items-center justify-center font-bold text-white rounded-lg shadow-md text-2xl">S</div>
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-12 text-sm text-navy/40 italic text-center font-medium">
              Representació visual de la jerarquia i equips de treball a SERMAFRED LLEIDA, S.L.
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
                title: "Atenció Telefònica",
                desc: "Gestió de trucades en diversos idiomes.",
                icon: <Target size={24} />
              },
              {
                title: "Atenció al Client",
                desc: "Servei directe i personalitzat al client.",
                icon: <Network size={24} />
              },
              {
                title: "Comptabilitat i Facturació",
                desc: "Gestió administrativa i financera.",
                icon: <BarChart3 size={24} />
              },
              {
                title: "Gestió d'Avaries",
                desc: "Organització de les intervencions d'avaria i posta en marxa de les màquines.",
                icon: <Settings size={24} />
              },
              {
                title: "Comandes de peces",
                desc: "Gestió de compres i recanvis.",
                icon: <Target size={24} />
              },
              {
                title: "Recepció de material",
                desc: "Recepció de peces per les reparacions.",
                icon: <Building2 size={24} />
              },
              {
                title: "Protecció de dades",
                desc: "Responsable de Protecció de dades.",
                icon: <Network size={24} />
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

      {/* Future Outlook */}
      <section className="mt-20 space-y-12">
        <div className="glass-card p-8 bg-primary/5 border-primary/20 border-dashed border-2 text-center">
          <div className="inline-flex p-3 rounded-full bg-primary/10 text-primary mb-4">
            <BarChart3 size={32} />
          </div>
          <h3 className="text-2xl font-black text-navy mb-2 uppercase tracking-widest">Canvi Organitzatiu 2027</h3>
          <p className="text-navy/60 text-lg max-w-2xl mx-auto">
            A principis de 2027, la situació laboral canviarà i l'organigrama serà diferent, adaptant-se a les noves necessitats i objectius estratègics de l'empresa.
          </p>
        </div>

        {/* Current Organigram (Below Change Notice) */}
        <div className="glass-card p-12 bg-white">
          <div className="flex flex-col items-center space-y-8">
            <h4 className="text-2xl font-black text-navy mb-8 uppercase tracking-widest">Organigrama Actual</h4>
            
            {/* Top Level: Esther & Aaron */}
            <div className="flex justify-center gap-8 w-full max-w-md relative">
              <div className="bg-[#0059a1] px-8 py-3 font-bold text-white rounded-lg shadow-md text-xl flex-1 text-center">
                Esther
              </div>
              <div className="bg-[#0059a1] px-8 py-3 font-bold text-white rounded-lg shadow-md text-xl flex-1 text-center">
                Aaron
              </div>
              
              {/* Connector from Top to Middle */}
              <div className="absolute left-1/2 -bottom-8 w-1 h-8 bg-[#0059a1] -translate-x-1/2" />
              <div className="absolute left-[25%] -bottom-4 w-[50%] h-1 bg-[#0059a1]" />
              <div className="absolute left-[25%] -bottom-4 w-1 h-4 bg-[#0059a1]" />
              <div className="absolute right-[25%] -bottom-4 w-1 h-4 bg-[#0059a1]" />
            </div>

            {/* Middle Level: Tècnic */}
            <div className="pt-8 flex flex-col items-center relative">
              <div className="bg-[#0059a1] px-12 py-3 font-bold text-white rounded-lg shadow-md text-xl min-w-[180px] text-center">
                Tècnic
              </div>
              
              {/* Connector from Middle to Bottom */}
              <div className="w-1 h-12 bg-[#0059a1]" />
            </div>

            {/* Bottom Level: S */}
            <div className="bg-[#e85718] size-16 flex items-center justify-center font-bold text-white rounded-lg shadow-md text-3xl">
              S
            </div>
          </div>
          <p className="mt-12 text-sm text-navy/40 italic text-center font-medium">
            Representació de l'estructura operativa actual a Sermafred.
          </p>
        </div>
      </section>

    </motion.div>
  );
}
