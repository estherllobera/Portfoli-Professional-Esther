import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Download, Mail, MapPin, Home, ShoppingBag, Truck, BookOpen, Apple, Database, Phone, Flame, FileText, Mountain } from 'lucide-react';

const experiences = [
  {
    company: "Casa de Pagès",
    role: "Organització d'habitacions",
    icon: <Home size={32} className="text-slate-400" />,
    functions: [
      "Organització de les habitacions",
      "Neteja de les habitacions",
      "Canguro"
    ],
    image: "https://picsum.photos/seed/mountain/800/450"
  },
  {
    company: "Cooperativa de Torrefarrera",
    role: "Reposadora",
    icon: <Apple size={32} className="text-slate-400" />,
    functions: [
      "Organitzar palets",
      "Posar fruita en caixes",
      "Revisar la bàscula"
    ],
    image: "https://picsum.photos/seed/fruitfield/800/450"
  },
  {
    company: "UGT",
    role: "Assistent Administratiu",
    icon: <Database size={32} className="text-slate-400" />,
    functions: [
      "Utilització de la base de dades Access",
      "Atenció al Client",
      "Word"
    ],
    image: "https://picsum.photos/seed/office/800/450"
  },
  {
    company: "ECA",
    role: "Assistent Administratiu",
    icon: <FileText size={32} className="text-slate-400" />,
    functions: [
      "Atenció al client",
      "Atenció telefònica",
      "Introducció d'expedients"
    ],
    image: "https://picsum.photos/seed/files/800/450"
  },
  {
    company: "Gas Natural",
    role: "Assistent Administratiu",
    icon: <Flame size={32} className="text-slate-400" />,
    functions: [
      "Atenció al client",
      "Atenció telefònica",
      "Introducció de dades al sistema de Gas Natural"
    ],
    image: "https://picsum.photos/seed/energy/800/450"
  }
];

export default function Laboral() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="px-6 pb-32"
    >
      {/* Hero Section */}
      <section className="py-12 flex justify-center">
        <div className="w-full max-w-md">
          <div className="glass-card p-8 relative overflow-hidden text-center">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <Briefcase size={64} className="text-primary mb-6 mx-auto" />
            <h2 className="text-3xl font-black text-navy mb-2">Experiència Laboral</h2>
            <p className="text-navy/50">El meu recorregut i aprenentatges inicials</p>
          </div>
        </div>
      </section>

      {/* Experience List */}
      <div className="space-y-12 mt-12">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}
          >
            <div className="flex-1">
              <div className="glass-card overflow-hidden group">
                <img 
                  src={exp.image} 
                  alt={exp.company} 
                  className="w-full aspect-video object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="flex-1 space-y-6">
              <div className="flex items-center gap-4">
                <div className="size-14 rounded-2xl bg-white shadow-lg flex items-center justify-center border border-slate-100 shrink-0">
                  {exp.icon}
                </div>
                <div>
                  <h3 className="font-black text-2xl text-navy">{exp.company}</h3>
                  <p className="text-primary font-bold">{exp.role}</p>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-xs font-black text-navy/30 uppercase tracking-widest">Funcions Principals</h4>
                <ul className="grid grid-cols-1 gap-3">
                  {exp.functions.map((func, i) => (
                    <li key={i} className="flex items-center gap-3 text-navy/70">
                      <div className="size-2 rounded-full bg-primary" />
                      {func}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </motion.div>
  );
}
