import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, BookOpen, Laptop, CheckCircle2, History } from 'lucide-react';

export default function Estudis() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-xl mx-auto pb-24"
    >
      {/* Hero Section */}
      <section className="px-6 pt-12 pb-8">
        <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 mb-2">Estudis</h1>
        <div className="h-1.5 w-16 bg-primary rounded-full mb-6"></div>
        <p className="text-slate-600 text-lg leading-relaxed">
          Trajectòria acadèmica i formació professional continuada.
        </p>
      </section>

      {/* Section 1: EGB I PFII: TÈCNIC ADMINISTRATIU */}
      <section className="px-6 py-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
            <History size={24} />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">EGB I PFII: TÈCNIC ADMINISTRATIU</h2>
        </div>
        <div className="space-y-6">
          <p className="text-slate-600 leading-relaxed">
            La meva formació inicial va començar amb l'Educació General Bàsica, on vaig desenvolupar les habilitats fonamentals. Posteriorment, vaig realitzar la Formació Professional especialitzada, centrant-me en les bases tècniques que han definit la meva carrera.
          </p>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square bg-slate-200 rounded-xl overflow-hidden relative group">
              <div className="absolute inset-0 flex items-center justify-center">
                <BookOpen size={40} className="text-slate-400" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/50 to-transparent">
                <span className="text-white text-xs font-medium">Centre d'Estudis</span>
              </div>
            </div>
            <div className="aspect-square bg-slate-200 rounded-xl overflow-hidden relative group">
              <div className="absolute inset-0 flex items-center justify-center">
                <GraduationCap size={40} className="text-slate-400" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/50 to-transparent">
                <span className="text-white text-xs font-medium">Projectes Tècnics</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Actualitat */}
      <section className="px-6 py-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
            <Laptop size={24} />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">Actualitat</h2>
        </div>
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <div className="aspect-video bg-slate-100 rounded-xl mb-6 relative overflow-hidden flex items-center justify-center">
            <Laptop size={64} className="text-slate-300" />
            <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-widest">
              En curs
            </div>
          </div>
          <h3 className="text-lg font-bold mb-3">Desenvolupament i Especialització</h3>
          <p className="text-slate-600 mb-6 leading-relaxed">
            Actualment estic ampliant els meus coneixements en noves tecnologies i metodologies de gestió. El focus es troba en l'optimització de processos i la implementació de solucions digitals en entorns industrials.
          </p>
          <ul className="space-y-3">
            {[
              "Màster en Gestió d'Actius Industrials",
              "Certificació Avançada en Eficiència Energètica",
              "Seminaris sobre Indústria 4.0"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-primary shrink-0" />
                <span className="text-sm text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </motion.div>
  );
}
