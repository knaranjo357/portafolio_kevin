import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Brain, Monitor, Zap, Shield, Globe, MessageSquare, Rocket, Workflow, CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SectionTitle from '../components/SectionTitle';
import SkillCard from '../components/SkillCard';
import CVDownloadButton from '../components/CVDownloadButton';
import GeometricShapes from '../components/GeometricShapes';
import ExperienceCounter from '../components/ExperienceCounter';
import AnimatedText from '../components/AnimatedText';
import LazyImage from '../components/LazyImage';
import BackgroundParticles from '../components/BackgroundParticles';

const Home: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language.toLowerCase().startsWith('en');

  const heroProofs = isEnglish
    ? ['14 documented case studies', '5.6+ years building', 'Discovery → production']
    : ['14 casos documentados', '5.6+ años construyendo', 'Diagnóstico → producción'];

  const services = isEnglish
    ? [
        {
          icon: <Rocket size={26} />,
          title: 'Custom digital products',
          description: 'I design and build web platforms, internal tools, and operational systems around the way your business actually works.',
          evidence: 'Best when spreadsheets, chat threads, and manual steps are already slowing the team down.',
        },
        {
          icon: <Workflow size={26} />,
          title: 'Applied AI & automation',
          description: 'I integrate agents, classification, forecasting, vision, and automated workflows where they create a measurable result.',
          evidence: 'Best for reducing cycle time, errors, and repetitive decision work.',
        },
        {
          icon: <Shield size={26} />,
          title: 'Modernization & production readiness',
          description: 'I improve architecture, data, migrations, deployment, testing, and observability so the product can grow with confidence.',
          evidence: 'Best for stabilizing an existing system or preparing its next stage.',
        },
      ]
    : [
        {
          icon: <Rocket size={26} />,
          title: 'Productos digitales a medida',
          description: 'Diseño y construyo plataformas web, herramientas internas y sistemas operativos alrededor de la forma real en que trabaja tu empresa.',
          evidence: 'Ideal cuando las hojas de cálculo, los chats y los pasos manuales ya frenan al equipo.',
        },
        {
          icon: <Workflow size={26} />,
          title: 'IA y automatización aplicada',
          description: 'Integro agentes, clasificación, pronósticos, visión y flujos automáticos donde producen un resultado medible.',
          evidence: 'Ideal para reducir tiempos, errores y decisiones repetitivas.',
        },
        {
          icon: <Shield size={26} />,
          title: 'Modernización y salida a producción',
          description: 'Ordeno arquitectura, datos, migraciones, despliegue, pruebas y observabilidad para que el producto pueda crecer con confianza.',
          evidence: 'Ideal para estabilizar un sistema existente o preparar su siguiente etapa.',
        },
      ];

  return (
    <div className="mesh-gradient min-h-screen selection:bg-gold/30 selection:text-slate-900">
      <BackgroundParticles />
      {/* Hero Section */}
      <section className="relative overflow-hidden pb-20 pt-28 sm:pt-32 lg:flex lg:min-h-[calc(100vh-4rem)] lg:items-center lg:py-20">
        <GeometricShapes />
        
        {/* Static background depth */}
        <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-blue-100/30 rounded-full blur-[150px]" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[120px]" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 xl:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/50 bg-white/60 px-5 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-gold shadow-xl shadow-gold/5 backdrop-blur-2xl sm:text-xs"
              >
                <span className="relative flex h-3 w-3">
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-gold"></span>
                </span>
                {t('home.role')}
              </motion.div>
              
              <h1 className="mb-7 break-words text-[2.65rem] font-black leading-[0.94] tracking-tighter text-slate-900 sm:text-5xl md:text-6xl lg:text-[3.6rem] xl:text-7xl">
                <AnimatedText text={t('home.title').split('|')[0].trim()} className="block" />
                {' '}
                <span className="block text-gold text-glow-gold italic mt-2 drop-shadow-2xl">
                  {t('home.title').split('|')[1].trim()}
                </span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.12 }}
                className="mb-8 max-w-2xl text-left text-lg font-normal leading-relaxed text-slate-600 md:text-xl"
              >
                {t('home.description')}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.18 }}
                className="flex flex-wrap gap-3 sm:gap-4"
              >
                <Link to="/contact" className="btn btn-primary group px-7 py-4 sm:px-9">
                  <span className="flex items-center gap-2">
                    <MessageSquare size={19} /> {t('home.startProject')}
                  </span>
                </Link>
                <Link to="/projects" className="btn btn-outline group border-slate-200 px-7 py-4 text-slate-900 transition-all duration-500 hover:border-gold hover:text-gold sm:px-9">
                  <span className="flex items-center gap-2">
                    {t('home.viewProjects')} <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                  </span>
                </Link>
              </motion.div>

              <div className="mt-6">
                <CVDownloadButton className="rounded-full px-2 py-2 text-xs font-black uppercase tracking-[0.14em] text-slate-500 transition-colors hover:text-gold" />
              </div>

              <div className="mt-8 grid max-w-2xl gap-2 sm:grid-cols-3">
                {heroProofs.map((proof) => (
                  <div key={proof} className="flex items-center gap-2 text-xs font-bold text-slate-600">
                    <CheckCircle2 size={15} className="shrink-0 text-gold" />
                    <span>{proof}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative hidden lg:block perspective-2000"
            >
              {/* Profile Image with Premium Frame */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-gold via-gold-light to-gold rounded-[3rem] opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="relative h-[560px] w-full overflow-hidden rounded-[2.5rem] border border-white/50 bg-white/10 p-2 shadow-2xl backdrop-blur-sm xl:h-[650px]">
                  <div className="w-full h-full rounded-[2.3rem] overflow-hidden relative">
                    <LazyImage
                      src="/kevin.webp"
                      alt="Kevin Alejandro Naranjo Reyes"
                      className="grayscale group-hover:grayscale-0 transition-all duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </div>
                </div>

                {/* Floating Experience Badge */}
                <motion.div
                  initial={{ opacity: 0, x: 50, rotate: 10 }}
                  animate={{ opacity: 1, x: 0, rotate: 0 }}
                  transition={{ duration: 0.6, delay: 0.25 }}
                  className="glass-card absolute -bottom-8 -right-4 rounded-[2rem] border border-gold/20 p-6 shadow-2xl xl:-right-10 xl:p-8"
                >
                  <div className="flex items-center gap-8">
                    <div>
                      <ExperienceCounter className="text-4xl font-black text-gold mb-1" />
                      <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em]">{t('about.experience')}</p>
                    </div>
                    <div className="w-px h-16 bg-slate-100/50"></div>
                    <div>
                      <p className="text-2xl font-black text-slate-900 mb-1">14</p>
                      <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em]">{t('home.projectsDelivered')}</p>
                    </div>
                  </div>
                </motion.div>

                {/* Static tech accents */}
                <div className="absolute -top-10 -left-10 glass-card p-6 rounded-3xl border border-gold/10">
                  <Code className="text-gold" size={32} />
                </div>
                <div className="absolute top-1/2 -left-20 glass-card p-6 rounded-3xl border border-gold/10">
                  <Brain className="text-gold" size={32} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Client-focused services */}
      <section className="relative overflow-hidden border-y border-white/10 bg-slate-950 py-24 text-white md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(212,175,55,0.16),transparent_28%),radial-gradient(circle_at_90%_90%,rgba(59,130,246,0.09),transparent_28%)]" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <p className="mb-5 text-xs font-black uppercase tracking-[0.22em] text-gold">
                {isEnglish ? 'How I can help' : 'Cómo puedo ayudarte'}
              </p>
              <h2 className="text-4xl font-black leading-[0.98] tracking-tighter text-white md:text-5xl">
                {isEnglish
                  ? 'Your operation does not need more software. It needs the right system.'
                  : 'Tu operación no necesita más software. Necesita el sistema correcto.'}
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg lg:justify-self-end">
              {isEnglish
                ? 'I work with founders and teams that need to simplify a complex process, launch a dependable product, or turn AI into a useful operating capability.'
                : 'Trabajo con líderes y equipos que necesitan simplificar un proceso complejo, lanzar un producto confiable o convertir la IA en una capacidad útil para la operación.'}
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                viewport={{ once: true, amount: 0.2 }}
                className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-7 backdrop-blur-sm md:p-8"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-gold text-slate-950">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-black tracking-tight text-white">{service.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-300 md:text-base">{service.description}</p>
                <p className="mt-6 border-t border-white/10 pt-5 text-sm font-semibold leading-relaxed text-gold/90">{service.evidence}</p>
              </motion.article>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link to="/contact" className="btn bg-gold px-8 py-4 text-slate-950 hover:bg-white">
              <span className="flex items-center gap-2">
                {t('home.startProject')} <ArrowRight size={18} />
              </span>
            </Link>
            <span className="text-sm text-slate-300">
              {isEnglish ? 'Tell me the problem first. We can define the right scope together.' : 'Cuéntame primero el problema. Podemos definir juntos el alcance correcto.'}
            </span>
          </div>
        </div>
      </section>

      {/* About Preview Section - Living UI */}
      <section className="relative overflow-hidden bg-white py-24 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <SectionTitle
                title={t('home.aboutTitle')}
                subtitle={t('home.aboutDescription1')}
              />
              <p className="text-slate-600 text-xl mb-12 font-normal leading-relaxed text-left">
                {t('home.aboutDescription2')}
              </p>
              <Link to="/about" className="btn btn-outline border-slate-200 text-slate-900 group px-10 py-5">
                <span className="flex items-center gap-4">
                  {t('home.learnMore')} <ArrowRight size={20} className="group-hover:translate-x-3 transition-transform" />
                </span>
              </Link>
            </motion.div>
            
            <div className="grid grid-cols-2 gap-8">
              {[
                { label: isEnglish ? 'Product vision' : 'Visión de producto', icon: <Monitor size={40} />, delay: 0.1 },
                { label: isEnglish ? 'Business context' : 'Contexto de negocio', icon: <Brain size={40} />, delay: 0.2 },
                { label: isEnglish ? 'Technical execution' : 'Ejecución técnica', icon: <Code size={40} />, delay: 0.3 },
                { label: isEnglish ? 'Measurable results' : 'Resultados medibles', icon: <Zap size={40} />, delay: 0.4 }
              ].map((item) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: item.delay }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="p-10 glass-card border-slate-100 rounded-[2.5rem] group hover:bg-slate-900 transition-all duration-300 hover:shadow-2xl hover:shadow-gold/20"
                >
                  <div className="text-gold group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 mb-6">{item.icon}</div>
                  <p className="text-slate-900 group-hover:text-white font-black uppercase tracking-[0.2em] text-xs transition-colors">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Showcase Section - The Arsenal */}
      <section className="relative bg-slate-50/50 py-24 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center mb-24">
          <SectionTitle
            title={t('home.skillsTitle')}
            subtitle={t('home.skillsSubtitle')}
            center={true}
          />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <SkillCard
              icon={<Code size={40} />}
              title={t('home.softwareDev')}
              description={t('home.softwareDesc')}
              delay={0.1}
            />
            <SkillCard
              icon={<Brain size={40} />}
              title={t('home.machineLearning')}
              description={t('home.mlDesc')}
              delay={0.2}
            />
            <SkillCard
              icon={<Monitor size={40} />}
              title={t('home.computerVision')}
              description={t('home.cvDesc')}
              delay={0.3}
            />
            <SkillCard
              icon={<Globe size={40} />}
              title={t('home.webDev')}
              description={t('home.webDevDesc')}
              delay={0.4}
            />
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-24"
          >
            <Link to="/skills" className="btn btn-outline border-slate-200 text-slate-900 group px-12 py-5">
              <span className="flex items-center gap-3">
                {t('home.exploreSkills')} <Shield size={20} className="group-hover:rotate-12 transition-transform" />
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects - Cinematic Gallery */}
      <section className="relative overflow-hidden bg-white py-24 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
            <div className="max-w-3xl">
              <SectionTitle
                title={t('home.featuredTitle')}
                subtitle={t('home.featuredSubtitle')}
              />
            </div>
            <Link to="/projects" className="btn btn-outline border-slate-200 text-slate-900 mb-2 group px-10 py-5">
              <span className="flex items-center gap-3">
                {t('home.viewProjects')} <ArrowRight size={20} className="group-hover:translate-x-3 transition-transform" />
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {(t('projectsData', { returnObjects: true }) as any[])
              .filter((project) => [14, 7, 8].includes(project.id))
              .sort((a, b) => [14, 7, 8].indexOf(a.id) - [14, 7, 8].indexOf(b.id))
              .map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group h-full"
              >
                <Link to={`/projects/${project.id}`}>
                  <div className="premium-card h-full bg-white flex flex-col border border-slate-100/50 hover:shadow-2xl hover:shadow-gold/10 group">
                    <div className="relative h-72 overflow-hidden">
                      <LazyImage
                        src={project.image}
                        alt={project.title}
                        className="grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        <span className="bg-gold text-white px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest">
                          {t('projects.viewDetails')}
                        </span>
                      </div>
                    </div>
                    <div className="p-10">
                      <p className="text-gold font-black text-[10px] uppercase tracking-[0.3em] mb-4">{project.categoryName}</p>
                      <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-gold transition-colors line-clamp-2">
                        {project.title}
                      </h3>
                      <p className="text-slate-500 text-sm font-light leading-relaxed line-clamp-3 text-justify">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - The Hook */}
      <section className="relative overflow-hidden bg-slate-900 py-24 md:py-32">
        {/* Abstract Background for CTA */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#d4af37_0%,transparent_70%)] opacity-10"></div>
          <div className="absolute -top-1/2 -left-1/4 w-[1000px] h-[1000px] bg-gold/10 rounded-full blur-[180px]"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-10 leading-[0.95]">
                {t('home.readyToWork').split('?')[0]}<span className="text-gold">?</span>
              </h2>
              <p className="text-slate-200 text-xl md:text-2xl mb-12 font-normal leading-relaxed max-w-xl text-left">
                {t('home.contactDesc')}
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <a href="https://wa.me/573175816061?text=Hola%20Kevin%2C%20quiero%20conversar%20sobre%20un%20proyecto." target="_blank" rel="noopener noreferrer" className="btn bg-gold text-white hover:bg-white hover:text-slate-900 px-12 py-5 shadow-2xl shadow-gold/20 flex items-center justify-center gap-3">
                  <Zap size={20} /> {t('home.whatsapp')}
                </a>
                <CVDownloadButton className="btn btn-outline border-white/20 text-white hover:bg-white hover:text-slate-900 px-12 py-5 flex items-center justify-center" />
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="glass-card-dark p-12 group hover:border-gold/30 transition-all duration-300"
              >
                <div className="text-gold mb-8 group-hover:scale-110 transition-transform duration-500"><Brain size={56} /></div>
                <h3 className="text-2xl font-black text-white mb-6 tracking-tight">{t('home.aiCardTitle')}</h3>
                <p className="text-slate-200 font-normal leading-relaxed text-sm text-left">
                  {t('home.aiCardDesc')}
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="glass-card-dark p-12 group hover:border-gold/30 transition-all duration-300"
              >
                <div className="text-gold mb-8 group-hover:scale-110 transition-transform duration-500"><Code size={56} /></div>
                <h3 className="text-2xl font-black text-white mb-6 tracking-tight">{t('home.cloudCardTitle')}</h3>
                <p className="text-slate-200 font-normal leading-relaxed text-sm text-left">
                  {t('home.cloudCardDesc')}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
