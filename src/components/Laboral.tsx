import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Download, Mail, MapPin, Server, Monitor, Truck, ShoppingBag, BookOpen } from 'lucide-react';

const experiences = [
  {
    company: "Tech Solutions SL",
    role: "Becari de Suport Tècnic",
    icon: <Server size={32} className="text-slate-400" />,
    functions: [
      "Resolució d'incidències de primer nivell",
      "Manteniment preventiu de sistemes",
      "Configuració d'equips per a nous empleats"
    ],
    image: "https://picsum.photos/seed/tech/800/450"
  },
  {
    company: "Digital Creative Hub",
    role: "Auxiliar de Màrqueting",
    icon: <Monitor size={32} className="text-slate-400" />,
    functions: [
      "Gestió de xarxes socials corporatives",
      "Creació de contingut visual bàsic",
      "Suport en l'organització d'esdeveniments"
    ],
    image: "https://picsum.photos/seed/creative/800/450"
  },
  {
    company: "Logística Express S.A.",
    role: "Assistent Administratiu",
    icon: <Truck size={32} className="text-slate-400" />,
    functions: [
      "Control d'albarans i facturació",
      "Atenció telefònica a proveïdors",
      "Actualització de la base de dades"
    ],
    image: "https://picsum.photos/seed/logistics/800/450"
  },
  {
    company: "Innova Retail Group",
    role: "Promotor de Producte",
    icon: <ShoppingBag size={32} className="text-slate-400" />,
    functions: [
      "Demostració de funcions tecnològiques",
      "Tancament de vendes i fidelització",
      "Elaboració d'informes de vendes diaris"
    ],
    image: "https://picsum.photos/seed/retail/800/450"
  },
  {
    company: "Acadèmia d'Estudis Delta",
    role: "Monitor de Reforç Escolar",
    icon: <BookOpen size={32} className="text-slate-400" />,
    functions: [
      "Preparació de material didàctic",
      "Gestió de grups reduïts de treball",
      "Seguiment personalitzat de l'alumne"
    ],
    image: "https://picsum.photos/seed/education/800/450"
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
      <section className="py-12 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <h1 className="text-6xl md:text-7xl font-black text-navy leading-tight">
            Work <br />
            <span className="gradient-text">Experience</span>
          </h1>
          <p className="text-navy/60 text-xl leading-relaxed max-w-xl">
            Benvinguts al meu portafoli professional. Sóc un entusiasta de la tecnologia amb ganes d'aprendre i créixer.
          </p>
          <div className="flex gap-4">
            <button className="bg-primary text-white px-8 py-4 rounded-2xl font-bold shadow-xl shadow-primary/30 hover:scale-105 transition-transform flex items-center gap-2">
              <Download size={20} />
              Descarregar CV
            </button>
          </div>
        </div>
        <div className="flex-1">
          <div className="glass-card p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <Briefcase size={64} className="text-primary mb-6" />
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

      {/* Contact Section */}
      <section className="mt-32 glass-card p-12 text-center space-y-8 relative overflow-hidden" id="contacte">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 to-accent-pink/5 -z-10" />
        <h2 className="text-5xl font-black text-navy">Let's <span className="text-primary">Connect</span></h2>
        <p className="text-navy/60 max-w-xl mx-auto text-lg leading-relaxed">
          Si t'ha interessat el meu perfil per a qualsevol col·laboració o oferta laboral, no dubtis en contactar-me.
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          <a href="mailto:hola@marc.cat" className="flex items-center gap-3 text-navy font-bold hover:text-primary transition-colors bg-white px-6 py-3 rounded-2xl shadow-lg">
            <Mail className="text-primary" size={24} />
            hola@marc.cat
          </a>
          <div className="flex items-center gap-3 text-navy font-bold bg-white px-6 py-3 rounded-2xl shadow-lg">
            <MapPin className="text-primary" size={24} />
            Barcelona, Catalunya
          </div>
        </div>
      </section>
    </motion.div>
  );
}
