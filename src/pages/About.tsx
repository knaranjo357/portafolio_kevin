import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Target, Eye, Heart, Rocket, Shield, Zap, ArrowRight, Briefcase } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SectionTitle from '../components/SectionTitle';
import CVDownloadButton from '../components/CVDownloadButton';
import GeometricShapes from '../components/GeometricShapes';
import ExperienceCounter from '../components/ExperienceCounter';
import AnimatedText from '../components/AnimatedText';
import BackgroundParticles from '../components/BackgroundParticles';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="mesh-gradient min-h-screen selection:bg-gold/30 selection:text-slate-900">
      <BackgroundParticles />
      <GeometricShapes />
      
      {/* Hero Section - Minimalist & Bold */}
      <section className="min-h-[60vh] flex items-center relative overflow-hidden pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 text-slate-900 tracking-tighter leading-none">
              <AnimatedText text={t('about.architect').split(' ').slice(0, 3).join(' ')} className="block" />
              <span className="text-gold italic text-glow-gold drop-shadow-2xl">
                {t('about.architect').split(' ').slice(3).join(' ')}
              </span>
            </h1>
            <p className="text-slate-500 text-xl md:text-3xl max-w-3xl mx-auto font-light leading-relaxed mt-10">
              {t('about.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Profile & Bio Section - Premium Composition */}
      <section className="py-40 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative group">
                <div className="absolute -inset-6 bg-gradient-to-tr from-gold/30 via-gold-light/10 to-transparent rounded-[3.5rem] blur-3xl opacity-50 group-hover:opacity-80 transition-opacity duration-500"></div>
                <div className="relative rounded-[3rem] overflow-hidden shadow-2xl h-[700px] border border-white/50 bg-white/10 backdrop-blur-sm p-2">
                  <div className="w-full h-full rounded-[2.8rem] overflow-hidden relative">
                    <img
                      src="/kevin.webp"
                      alt="Kevin Naranjo"
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent opacity-60"></div>
                  </div>
                </div>
                
                {/* Floating Experience Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="absolute -bottom-12 -right-12 glass-card p-12 rounded-[2.5rem] shadow-2xl border border-gold/20"
                >
                  <ExperienceCounter className="text-4xl font-black text-gold mb-1" />
                  <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em]">{t('about.experience')}</p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <SectionTitle title={t('about.name')} />
              
              <div className="space-y-8 text-slate-500 text-xl font-light leading-relaxed text-justify">
                <p className="first-letter-cap">{t('about.bio1')}</p>
                <p>{t('about.bio2')}</p>
                <p>{t('about.bio3')}</p>
                <motion.p 
                  whileInView={{ scale: 1.02, x: 10 }}
                  transition={{ duration: 0.5 }}
                  className="text-slate-900 font-black italic bg-slate-50 p-8 rounded-3xl border-l-4 border-gold shadow-sm"
                >
                  {t('about.bio4')}
                </motion.p>
              </div>
              
              <div className="mt-16 flex flex-wrap gap-8">
                <CVDownloadButton className="btn btn-primary px-12 py-5" />
                <Link to="/contact" className="btn btn-outline border-slate-200 text-slate-900 px-12 py-5 group">
                  <span className="flex items-center gap-3">
                    {t('home.contactMe')} <Rocket size={20} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cinematic Timeline Section */}
      <section className="py-40 relative bg-slate-900 overflow-hidden">
        {/* Dark Background Accents */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold/20 rounded-full blur-[150px]"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-32">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase mb-8">
              {t('about.career').split(' ').map((word, i) => (
                <span key={i} className={i === 1 ? 'text-gold' : ''}>{word} </span>
              ))}
            </h2>
            <p className="text-slate-400 text-xl md:text-2xl max-w-3xl mx-auto font-light">
              {t('about.careerSubtitle')}
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent hidden lg:block"></div>

            <div className="space-y-24">
              {[
                { title: t('about.job1Title'), date: t('about.job1Date'), desc: t('about.job1Desc'), icon: <Zap size={24} /> },
                { title: t('about.job2Title'), date: t('about.job2Date'), desc: t('about.job2Desc'), icon: <Briefcase size={24} /> },
                { title: t('about.job3Title'), date: t('about.job3Date'), desc: t('about.job3Desc'), icon: <Shield size={24} /> }
              ].map((job, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex flex-col lg:flex-row items-center gap-12 ${i % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className="lg:w-1/2 flex justify-center">
                    <div className="glass-card-dark p-12 w-full hover:border-gold/40 transition-all duration-300 group">
                      <p className="text-gold font-black text-xs uppercase tracking-[0.3em] mb-6 block lg:hidden">{job.date}</p>
                      <h3 className="text-3xl font-black text-white mb-6 tracking-tight group-hover:text-gold transition-colors">{job.title}</h3>
                      <p className="text-slate-400 font-light leading-relaxed text-justify">{job.desc}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Node */}
                  <div className="relative z-10 hidden lg:flex items-center justify-center w-16 h-16 rounded-full glass-card-dark border-gold/50 shadow-[0_0_20px_rgba(212,175,55,0.2)] text-gold">
                    {job.icon}
                  </div>

                  <div className="lg:w-1/2 hidden lg:block">
                    <div className={`${i % 2 === 0 ? 'text-right pr-12' : 'text-left pl-12'}`}>
                      <p className="text-gold font-black text-sm uppercase tracking-[0.4em] drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]">{job.date}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values - Glass Grid */}
      <section className="py-40 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: t('about.mission'), icon: <Target size={48} />, desc: t('about.missionDesc'), delay: 0.1 },
              { title: t('about.vision'), icon: <Eye size={48} />, desc: t('about.visionDesc'), delay: 0.2 },
              { title: t('about.values'), icon: <Heart size={48} />, desc: t('about.valuesDesc'), delay: 0.3 }
            ].map((box, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: box.delay }}
                viewport={{ once: true }}
                whileHover={{ y: -15, scale: 1.02 }}
                className="premium-card p-12 text-center group bg-white relative overflow-hidden"
              >
                <div className="absolute -right-16 -top-16 w-32 h-32 bg-gold/5 rounded-full blur-3xl group-hover:bg-gold/10 transition-colors"></div>
                
                <div className="w-24 h-24 bg-slate-50 border border-slate-100 rounded-[2rem] flex items-center justify-center mx-auto mb-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-sm group-hover:shadow-gold/20 group-hover:shadow-xl">
                  <div className="text-gold">{box.icon}</div>
                </div>
                <h3 className="text-3xl font-black mb-6 text-slate-900 tracking-tight uppercase group-hover:text-gold transition-colors">{box.title}</h3>
                <p className="text-slate-500 text-lg font-light leading-relaxed text-justify">{box.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Dark Aesthetic */}
      <section className="py-40 relative overflow-hidden bg-slate-900">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] bg-gold/10 rounded-full blur-[180px]"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-12 text-white tracking-tighter uppercase leading-none">
              {t('projects.projectIdea').split('?')[0]}<span className="text-gold">?</span>
            </h2>
            <Link
              to="/projects"
              className="btn bg-gold text-white hover:bg-white hover:text-slate-900 px-16 py-6 shadow-2xl shadow-gold/20 group text-xl"
            >
              <span className="flex items-center gap-4 font-black uppercase tracking-widest">
                {t('home.viewProjects')} <ArrowRight size={24} className="group-hover:translate-x-3 transition-transform" />
              </span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
