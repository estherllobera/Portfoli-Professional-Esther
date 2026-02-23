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
      className="max-w-screen-md mx-auto pb-24"
    >
      {/* Hero Section */}
      <section className="px-6 py-12 md:py-20 bg-white border-b border-slate-100">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight mb-4">
              Començament <span className="text-primary">laboral</span>
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed max-w-xl">
              Benvinguts al meu portafoli professional. Sóc un entusiasta de la tecnologia amb ganes d'aprendre i créixer. Aquí trobareu les meves primeres passes en el món laboral.
            </p>
            <div className="mt-8">
              <button className="bg-primary text-white px-6 py-3 rounded-lg font-bold flex items-center gap-2 shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
                <Download size={20} />
                Descarregar CV
              </button>
            </div>
          </div>
          <div className="hidden md:block w-1/3 aspect-square rounded-2xl bg-slate-200 overflow-hidden">
            <img 
              src="https://picsum.photos/seed/professional/600/600" 
              alt="Professional" 
              className="w-full h-full object-cover opacity-90"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Experience Header */}
      <div className="px-6 pt-12 pb-4">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Briefcase className="text-primary" />
          Experiència Laboral
        </h2>
        <p className="text-slate-500 text-sm mt-1">El meu recorregut i aprenentatges inicials</p>
      </div>

      {/* Experience List */}
      <div className="px-6 space-y-8 mt-6">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100">
            <div className="p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="size-12 rounded-lg bg-slate-50 flex items-center justify-center border border-slate-100 shrink-0">
                  {exp.icon}
                </div>
                <div>
                  <h3 className="font-bold text-lg leading-none">{exp.company}</h3>
                  <p className="text-primary font-medium text-sm mt-1">{exp.role}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Funcions</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    {exp.functions.map((func, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary">•</span> {func}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="aspect-video w-full rounded-lg bg-slate-100 overflow-hidden">
                  <img 
                    src={exp.image} 
                    alt={exp.company} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <section className="mt-16 px-6 pt-12 border-t border-slate-200" id="contacte">
        <h2 className="text-2xl font-bold mb-6">Parlem?</h2>
        <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8">
          <p className="text-slate-700 mb-6 leading-relaxed">
            Si t'ha interessat el meu perfil per a qualsevol col·laboració o oferta laboral, no dubtis en contactar-me.
          </p>
          <div className="space-y-4">
            <a href="mailto:hola@marc.cat" className="flex items-center gap-3 text-slate-900 hover:text-primary transition-colors">
              <Mail className="text-primary" size={20} />
              <span className="font-medium">hola@marc.cat</span>
            </a>
            <div className="flex items-center gap-3 text-slate-900">
              <MapPin className="text-primary" size={20} />
              <span className="font-medium">Barcelona, Catalunya</span>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
