import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, BookOpen, Laptop, CheckCircle2, Settings, Verified } from 'lucide-react';

export default function Estudis() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="px-6 pb-32"
    >
      {/* Hero Section */}
      <section className="py-12 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <p className="text-navy/70 text-2xl leading-relaxed max-w-lg font-medium">
            Trajectòria acadèmica i formació professional continuada.
          </p>
        </div>
        <div className="flex-1 relative">
          <div className="w-full aspect-square rounded-full bg-gradient-to-br from-primary/20 to-accent-pink/20 absolute -z-10 blur-3xl" />
          <img 
            src="https://picsum.photos/seed/mountain/800/600" 
            alt="Muntanya" 
            className="w-full h-auto rounded-[3rem] shadow-2xl border-8 border-white object-cover aspect-square"
            referrerPolicy="no-referrer"
          />
          {/* Floating Elements */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3"
          >
            <div className="bg-primary p-2 rounded-lg">
              <GraduationCap className="text-white" />
            </div>
            <div className="text-xs font-bold text-navy">Formació</div>
          </motion.div>
        </div>
      </section>

      {/* Section 1: EGB I FP-II */}
      <section className="py-16">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 grid grid-cols-2 gap-6">
            <div className="glass-card p-6 space-y-4 hover:scale-105 transition-transform cursor-default">
              <div className="w-12 h-12 rounded-2xl bg-accent-teal/10 flex items-center justify-center text-accent-teal">
                <BookOpen size={24} />
              </div>
              <h3 className="font-bold text-lg">Col·legi L'estonnac</h3>
              <p className="text-xs text-navy/40 font-bold uppercase tracking-widest">EGB</p>
            </div>
            <div className="glass-card p-6 space-y-4 translate-y-8 hover:scale-105 transition-transform cursor-default">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <GraduationCap size={24} />
              </div>
              <h3 className="font-bold text-lg">Acadèmia Cots</h3>
              <p className="text-xs text-navy/40 font-bold uppercase tracking-widest">1996</p>
            </div>
          </div>
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl md:text-5xl font-black text-navy">
              EGB I FP-II: <br />
              <span className="text-primary">Tècnic Administratiu</span>
            </h2>
            <p className="text-navy/60 leading-relaxed text-lg">
              La meva formació inicial va començar amb l'Educació General Bàsica, on vaig desenvolupar les habilitats fonamentals. Posteriorment, vaig realitzar la Formació Professional especialitzada.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Actualitat */}
      <section className="py-16">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-navy mb-4">Actualitat</h2>
          <p className="text-navy/50 max-w-2xl mx-auto">Actualment estic ampliant els meus coneixements en noves tecnologies i metodologies de gestió.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            {
              title: "Grau Superior",
              desc: "Desenvolupament d'aplicacions web.",
              icon: <Laptop size={48} />,
              color: "bg-primary/10 text-primary"
            },
            {
              title: "Especialització",
              desc: "Inteligència Artificial, Automatitzacions i Creació de Continguts.",
              icon: <CheckCircle2 size={48} />,
              color: "bg-accent-pink/10 text-accent-pink"
            },
            {
              title: "Certificat de Professionalitat",
              desc: "IMAR0208 - Montaje y Mantenimiento de Instalaciones de Climatización y Ventilación.",
              icon: <Settings size={48} />,
              color: "bg-accent-teal/10 text-accent-teal"
            },
            {
              title: "Certificacions",
              desc: "IA - Vibe Coding y Automatizaciones, Marketing, SEO.",
              icon: <Verified size={48} />,
              color: "bg-yellow-400/10 text-yellow-600"
            }
          ].map((service, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="glass-card p-10 text-center space-y-6 flex flex-col items-center justify-center min-h-[280px]"
            >
              <div className={`w-24 h-24 rounded-[2rem] flex items-center justify-center ${service.color} shadow-inner`}>
                {service.icon}
              </div>
              <div className="space-y-2">
                <h3 className="font-black text-2xl text-navy">{service.title}</h3>
                <p className="text-base text-navy/60 leading-relaxed font-medium">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
