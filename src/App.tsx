import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Globe, 
  FileCheck, 
  ArrowRight, 
  MapPin, 
  Anchor, 
  Plane, 
  Truck,
  Network,
  Briefcase,
  Factory,
  Home,
  Car,
  Leaf,
  Zap,
  BarChart3,
  CheckCircle2,
  UploadCloud,
  Lock,
  Instagram,
  Phone,
  Users,
  MessageCircle
} from 'lucide-react';

export default function App() {
  const [serviceType, setServiceType] = useState<string>('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xwvrldnv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          serviceType: serviceType
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Error al enviar el formulario');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('Hubo un problema al enviar su solicitud. Por favor, inténtelo de nuevo o contáctenos directamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isValid = (field: keyof typeof formData) => String(formData[field]).length > 0;

  const inputClasses = "w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:border-blue-900 focus:shadow-[0_0_15px_rgba(30,58,138,0.3)] outline-none transition-all";

  return (
    <div className="min-h-screen bg-black text-zinc-300 font-sans overflow-x-hidden selection:bg-white/20">
      
      {/* Background Atmospheric Glows */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-zinc-800/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-zinc-800/10 blur-[120px]" />
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white text-black flex items-center justify-center rounded-sm font-display font-bold text-xl tracking-tighter">
              A
            </div>
            <span className="font-display font-bold text-xl tracking-widest text-white">XN Cargo</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-zinc-400">
            <a href="#nosotros" className="hover:text-white transition-colors">Nosotros</a>
            <a href="#soluciones" className="hover:text-white transition-colors">Soluciones</a>
            <a href="#valores" className="hover:text-white transition-colors">Valores</a>
            <a href="#puente" className="hover:text-white transition-colors">El Puente</a>
          </div>
          <a href="#cotizacion" className="px-5 py-2.5 bg-white text-black text-sm font-semibold rounded-full hover:bg-zinc-200 transition-colors inline-block">
            Cotizar Ahora
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-40 pb-24 px-6 min-h-[90vh] flex flex-col justify-center">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium tracking-widest uppercase mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Operaciones Activas: Canadá ↔ Latam
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl md:text-7xl lg:text-8xl font-display font-light tracking-tighter text-white leading-[1.1] mb-8"
            >
              El puente logístico <br />
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">
                definitivo.
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg md:text-xl text-zinc-400 max-w-2xl font-light leading-relaxed mb-10"
            >
              AXN Cargo es su socio logístico de confianza en Canadá con más de 15 años de trayectoria. Conectamos Canadá, Estados Unidos y Latinoamérica con seguridad inquebrantable, cumplimiento absoluto y tecnología de vanguardia.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="relative z-10 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/5">
            {[
              { title: "Trayectoria", desc: "15+ Años de experiencia consolidada en el sector." },
              { title: "Alcance", desc: "Conectando efectivamente Canadá, USA y Latinoamérica." },
              { title: "Versatilidad", desc: "Especialistas en Carga General, Sobredimensionada, Perecederos y Oil & Gas." },
              { title: "Respaldo", desc: "Parte de un grupo logístico robusto con nuestra filial Interconnection Trading Cargo." }
            ].map((stat, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="pl-8 first:pl-0"
              >
                <div className="text-xl md:text-2xl font-display font-medium text-white mb-2">{stat.title}</div>
                <div className="text-sm font-light leading-relaxed text-zinc-400">{stat.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="nosotros" className="relative z-10 py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-3xl md:text-5xl font-display font-light text-white mb-6">Sobre Nosotros | Logística en Canadá y Latam</h2>
              <p className="text-zinc-400 text-lg font-light leading-relaxed mb-6">
                En AXN Cargo, somos su socio logístico de confianza con una trayectoria consolidada de más de 15 años en el sector, conectando de manera efectiva a Latinoamérica, Colombia, Canadá y Estados Unidos.
              </p>
              <p className="text-zinc-400 text-lg font-light leading-relaxed">
                Hemos crecido hasta convertirnos en un aliado estratégico, respaldado por un equipo humano enfocado en la honestidad, la confiabilidad y la efectividad operativa. Formamos parte de un grupo logístico robusto, que incluye a nuestra filial hermana, <span className="text-white font-medium">Interconnection Trading Cargo</span>, lo que nos permite ofrecer una red de servicios ampliada y soluciones integrales a nuestros clientes.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative"
            >
              <div className="aspect-square rounded-full border border-white/10 p-4">
                <div className="w-full h-full rounded-full overflow-hidden relative">
                  <img 
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop" 
                    alt="AXN Cargo Team" 
                    className="w-full h-full object-cover opacity-60 mix-blend-luminosity hover:opacity-100 hover:mix-blend-normal transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-transparent to-transparent" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="soluciones" className="relative z-10 py-32 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <h2 className="text-3xl md:text-5xl font-display font-light text-white mb-6">Soluciones como Agente de Carga en Canadá y Latam</h2>
              <p className="text-zinc-400 max-w-xl text-lg font-light">
                Diseñamos estrategias logísticas a la medida para cada tipo de cliente en la cadena de suministro internacional.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { 
                icon: <Briefcase className="w-8 h-8" />, 
                title: "Agentes de Carga (LATAM y USA)", 
                desc: "Su aliado estratégico en Canadá. Respetamos sus convenios y ofrecemos trato personalizado. Experiencia en Oil & Gas, carga sobredimensionada, perecederos y carga general. Excelente comunicación y solidez operativa.",
                image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop"
              },
              { 
                icon: <Factory className="w-8 h-8" />, 
                title: "Industria y Comercio", 
                desc: "Para empresas expandiendo su mercado entre Canadá, USA y LATAM. Enfoque especial en la industria del petróleo y gas en Alberta. Superamos barreras de idioma y cultura para ser su socio experto.",
                image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop"
              },
              { 
                icon: <Home className="w-8 h-8" />, 
                title: "Mudanzas Internacionales", 
                desc: "Inicie su nueva vida en LATAM sin preocupaciones. Soluciones eficientes en costo para muebles, enseres y vehículos. Asesoría experta en requisitos aduaneros de cada país y alianzas estratégicas.",
                image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop"
              },
              { 
                icon: <Car className="w-8 h-8" />, 
                title: "Envío de Vehículos", 
                desc: "Gestión integral desde la compra en dealers canadienses hasta la entrega final. Automóviles, SUV, eléctricos y clásicos. Asesoría en tratados de libre comercio para optimización de impuestos.",
                image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=800&auto=format&fit=crop"
              }
            ].map((service, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="group relative rounded-3xl border border-white/10 overflow-hidden bg-black flex flex-col sm:flex-row"
              >
                <div className="sm:w-2/5 h-48 sm:h-auto relative overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-black via-black/50 to-transparent" />
                </div>
                <div className="relative z-10 p-8 sm:w-3/5 flex flex-col justify-center">
                  <div className="text-zinc-500 mb-4">{service.icon}</div>
                  <h3 className="text-xl font-display font-medium text-white mb-3">{service.title}</h3>
                  <p className="text-sm text-zinc-400 font-light leading-relaxed">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="valores" className="relative z-10 py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-3xl md:text-5xl font-display font-light text-white mb-6">Nuestros Valores</h2>
            <p className="text-zinc-400 max-w-2xl text-lg font-light">
              Nuestros valores fundamentales guían cada una de nuestras decisiones y operaciones, asegurando un servicio de la más alta calidad y un impacto positivo en el sector logístico.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Leaf className="w-6 h-6" />,
                title: "Sostenibilidad",
                desc: "Comprometidos con la adopción de prácticas que minimicen nuestro impacto ambiental y promuevan un futuro más verde en toda la cadena de suministro."
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Eficiencia Radical",
                desc: "Buscamos la optimización constante de nuestros procesos, ofreciendo soluciones ágiles y con la mejor relación beneficio-costo, superando expectativas."
              },
              {
                icon: <BarChart3 className="w-6 h-6" />,
                title: "Data Driven",
                desc: "Utilizamos el análisis de datos avanzado para tomar decisiones informadas, mejorar la efectividad de nuestras operaciones y ofrecer conocimiento experto."
              },
              {
                icon: <ShieldCheck className="w-6 h-6" />,
                title: "Seguridad y Solidez",
                desc: "Garantizamos la solidez de sus operaciones con un trato personalizado y experto. Honestidad y confiabilidad respaldando cada paso del proceso."
              }
            ].map((pillar, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-display font-medium text-white mb-3">{pillar.title}</h3>
                <p className="text-sm text-zinc-400 font-light leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Bridge (Split Layout) */}
      <section id="puente" className="relative z-10">
        <div className="grid lg:grid-cols-2 min-h-[80vh]">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-12 md:p-24 flex flex-col justify-center border-r border-white/5"
          >
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-12">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-light text-white mb-8 leading-tight">
              El eslabón perdido en su cadena de suministro.
            </h2>
            <p className="text-xl text-zinc-400 font-light leading-relaxed mb-12">
              Históricamente, coordinar carga desde Canadá hacia Latam ha sido complejo debido a barreras de idioma, cultura de negocios y regulaciones cruzadas con EE.UU. 
              <br /><br />
              AXN Cargo nace en Canadá con ADN latino. Hablamos su idioma, entendemos su urgencia y ejecutamos con la precisión canadiense.
            </p>
            <div className="flex items-center gap-6">
              <div className="flex -space-x-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-black bg-zinc-800 flex items-center justify-center overflow-hidden">
                    <img src={`https://picsum.photos/seed/agent${i}/100/100`} alt="Agent" className="w-full h-full object-cover opacity-80 grayscale" referrerPolicy="no-referrer" />
                  </div>
                ))}
              </div>
              <div className="text-sm text-zinc-400 font-medium">
                Respaldado por más de <span className="text-white">500+ agentes</span> en Latam.
              </div>
            </div>
          </motion.div>
          <div className="relative bg-zinc-900 overflow-hidden min-h-[50vh] lg:min-h-full">
            <img 
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1920&auto=format&fit=crop" 
              alt="Logistics Tech" 
              className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent lg:bg-gradient-to-l" />
            
            {/* Overlay UI Elements to look techy */}
            <div className="absolute bottom-12 left-12 right-12 p-6 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10">
              <div className="flex items-center justify-between mb-4">
                <div className="text-xs font-mono text-emerald-400">STATUS: SECURE ROUTING</div>
                <div className="text-xs font-mono text-zinc-500">YYZ → BOG</div>
              </div>
              <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                <div className="w-2/3 h-full bg-white rounded-full relative">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_#fff]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Quote Section */}
      <section id="cotizacion" className="relative z-10 py-32 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-display font-light text-white mb-6">Inicie su Próxima Operación con Solidez</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto text-lg font-light">
              Nuestro equipo humano y tecnológico procesará su requerimiento para ofrecerle la mejor relación beneficio-costo bajo estándares de eficiencia radical.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid lg:grid-cols-5 gap-0 bg-[#0a0a0a] border border-white/10 rounded-3xl shadow-2xl overflow-hidden relative"
          >
            {/* Contextual Image (Left Side) */}
            <div className="lg:col-span-2 relative hidden lg:block bg-black">
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=800&auto=format&fit=crop" 
                alt="B2B Trust Handshake" 
                className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-luminosity"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0a0a0a]/50 to-[#0a0a0a]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
              
              <div className="absolute bottom-12 left-12 right-12">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-6 bg-black/50 backdrop-blur-md">
                  <ShieldCheck className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-display font-light text-white mb-3">Usted nos cuenta su necesidad, nosotros escribimos la solución.</h3>
                <p className="text-zinc-400 font-light text-sm">Oficina de alta dirección, Toronto.</p>
              </div>
            </div>

            {/* Form Area (Right Side) */}
            <div className="lg:col-span-3 p-8 md:p-12 relative">
              {/* Subtle glow effect inside the card */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-blue-900/5 blur-[100px] pointer-events-none" />

              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16 relative z-10 h-full flex flex-col justify-center"
                >
                  <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-500/20">
                    <CheckCircle2 className="w-10 h-10 text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-display text-white mb-4">Solicitud recibida exitosamente</h3>
                  <p className="text-zinc-400 font-light max-w-md mx-auto">
                    Un experto de AXN Cargo se contactará con usted en menos de 24 horas para asesorarle en su idioma.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-8 px-8 py-3 border border-white/20 rounded-full text-white hover:bg-white/5 hover:border-white/40 transition-colors text-sm"
                  >
                    Enviar nueva solicitud
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="relative z-10">
                  {/* Service Selector (Independent Buttons) */}
                  <div className="mb-10">
                    <p className="text-sm text-zinc-400 mb-4 font-medium tracking-wide">1. Seleccione su perfil de cliente</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        { id: 'agentes', label: 'Agentes de Carga', desc: 'Alianzas LATAM/USA' },
                        { id: 'industrial', label: 'Empresas Industriales/Comerciales', desc: 'Import/Export & Oil/Gas' }
                      ].map(type => (
                        <button
                          key={type.id}
                          type="button"
                          onClick={() => setServiceType(type.id)}
                          className={`p-4 rounded-xl border text-left transition-all ${
                            serviceType === type.id 
                              ? 'border-blue-500/50 bg-blue-900/10 text-white shadow-[0_0_15px_rgba(30,58,138,0.2)]' 
                              : 'border-white/10 bg-[#0a0a0a] text-zinc-500 hover:border-white/30 hover:text-zinc-300'
                          }`}
                        >
                          <div className="font-medium mb-1">{type.label}</div>
                          <div className="text-xs opacity-70 font-light">{type.desc}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Basic Info */}
                  <div className="mb-10">
                    <p className="text-sm text-zinc-400 mb-4 font-medium tracking-wide">2. Información de Contacto</p>
                    <div className="space-y-4">
                      <div className="relative">
                        <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Nombre / Empresa *" required className={inputClasses} />
                        {isValid('name') && <CheckCircle2 className="absolute right-4 top-3.5 w-4 h-4 text-emerald-500" />}
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="relative">
                          <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Correo Corporativo *" required className={inputClasses} />
                          {isValid('email') && <CheckCircle2 className="absolute right-4 top-3.5 w-4 h-4 text-emerald-500" />}
                        </div>
                        <div className="relative">
                          <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Teléfono *" required className={inputClasses} />
                          {isValid('phone') && <CheckCircle2 className="absolute right-4 top-3.5 w-4 h-4 text-emerald-500" />}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Smart Textarea */}
                  <div className="mb-10">
                    <p className="text-sm text-zinc-400 mb-4 font-medium tracking-wide">3. Detalles del Requerimiento</p>
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="relative">
                      <textarea 
                        name="description" 
                        value={formData.description} 
                        onChange={handleInputChange} 
                        placeholder="Cuéntenos su necesidad logística. Como el agente de los agentes en Canadá, estamos listos para ofrecerle una solución a medida con honestidad y eficacia." 
                        required 
                        rows={4} 
                        className={`${inputClasses} resize-none`} 
                      />
                      {isValid('description') && <CheckCircle2 className="absolute right-4 top-4 w-4 h-4 text-emerald-500" />}
                    </motion.div>
                  </div>

                  {/* Submit */}
                  <button 
                    type="submit" 
                    disabled={isSubmitting || !serviceType}
                    className="w-full py-4 bg-white text-black font-medium rounded-xl hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-[1.01] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:hover:scale-100 disabled:hover:shadow-none"
                  >
                    {isSubmitting ? 'Procesando...' : 'Enviar Solicitud de Cotización'}
                  </button>

                  {/* Security Micro-copy */}
                  <div className="flex items-center justify-center gap-2 mt-6 text-xs text-zinc-500">
                    <Lock className="w-3 h-3" />
                    <p>Sus datos están protegidos. AXN Cargo cumple con estrictos protocolos de confidencialidad y respeto a convenios comerciales.</p>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer - Global Presence */}
      <footer className="relative z-10 bg-[#050505] pt-20 pb-10 px-6">
        {/* Gradient Divider */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50" />
        
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            {/* Contact Column */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-white text-black flex items-center justify-center rounded-sm font-display font-bold text-xl tracking-tighter">
                  A
                </div>
                <span className="font-display font-bold text-xl tracking-widest text-white">XN Cargo</span>
              </div>
              <ul className="space-y-4 text-zinc-400 font-light text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-zinc-500" />
                  <span>1460 The Queensway Ste 4423<br />Toronto, ON M8Z 1S4 Canada</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 shrink-0 text-zinc-500" />
                  <a href="tel:6473905753" className="relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[1px] after:bottom-0 after:left-0 after:bg-zinc-300 after:origin-bottom-right hover:after:scale-x-100 hover:after:origin-bottom-left after:transition-transform after:duration-300">
                    647 390 5753
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Globe className="w-4 h-4 shrink-0 text-zinc-500" />
                  <a href="https://www.axncargo.com" target="_blank" rel="noreferrer" className="relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[1px] after:bottom-0 after:left-0 after:bg-zinc-300 after:origin-bottom-right hover:after:scale-x-100 hover:after:origin-bottom-left after:transition-transform after:duration-300">
                    www.axncargo.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Column */}
            <div>
              <h4 className="text-white font-medium mb-6 uppercase tracking-widest text-xs">Conectividad Social</h4>
              <div className="flex flex-col gap-4">
                <a href="https://instagram.com/axn_cargo" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 text-zinc-400 hover:text-white transition-colors group">
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-colors">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-light relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[1px] after:bottom-0 after:left-0 after:bg-zinc-300 after:origin-bottom-right group-hover:after:scale-x-100 group-hover:after:origin-bottom-left after:transition-transform after:duration-300">
                    @axn_cargo
                  </span>
                </a>
                <a href="https://wa.me/16473905753" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 text-zinc-400 hover:text-white transition-colors group">
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-colors">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-light relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[1px] after:bottom-0 after:left-0 after:bg-zinc-300 after:origin-bottom-right group-hover:after:scale-x-100 group-hover:after:origin-bottom-left after:transition-transform after:duration-300">
                    WhatsApp
                  </span>
                </a>
              </div>
            </div>

            {/* Alliances Column */}
            <div>
              <h4 className="text-white font-medium mb-6 uppercase tracking-widest text-xs">Alianzas Estratégicas</h4>
              <div className="flex items-center gap-4 text-zinc-400">
                <div className="w-10 h-10 rounded bg-white/5 border border-white/10 flex items-center justify-center font-display font-bold text-xs tracking-tighter">
                  ITC
                </div>
                <div>
                  <div className="text-xs font-medium uppercase tracking-widest text-zinc-500 mb-1">Filial Hermana</div>
                  <div className="text-sm font-light text-white">Interconnection Trading Cargo</div>
                </div>
              </div>
            </div>
          </div>

          {/* El Agente de los Agentes Row */}
          <div className="border-t border-white/10 pt-8 pb-12">
            <h4 className="text-center text-zinc-500 font-medium mb-8 uppercase tracking-widest text-[10px]">El Agente de los Agentes</h4>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
              <div className="flex items-center gap-3 text-sm text-zinc-400 font-light">
                <ShieldCheck className="w-5 h-5 text-white shrink-0" />
                <span>Expertos en tratados de libre comercio para optimizar sus impuestos.</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-zinc-400 font-light">
                <Users className="w-5 h-5 text-white shrink-0" />
                <span>Trato personalizado con un equipo humano respaldando cada operación.</span>
              </div>
            </div>
          </div>

          {/* Legal Footer */}
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-[12px] text-zinc-600 font-light">
            <p className="mb-4 md:mb-0">AXN Cargo - Socio Logístico con más de 15 años de trayectoria conectando Canadá, USA y LATAM.</p>
            <div className="flex gap-6">
              <p>© {new Date().getFullYear()} AXN Cargo. Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
