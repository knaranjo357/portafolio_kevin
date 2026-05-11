import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Brain, Monitor, Zap, Shield, Rocket, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SectionTitle from '../components/SectionTitle';
import SkillCard from '../components/SkillCard';
import CVDownloadButton from '../components/CVDownloadButton';
import GeometricShapes from '../components/GeometricShapes';
import ExperienceCounter from '../components/ExperienceCounter';
import AnimatedText from '../components/AnimatedText';

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="mesh-gradient min-h-screen selection:bg-gold/30 selection:text-slate-900">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden pt-20">
        <GeometricShapes />
        
        {/* Animated Background Blur Elements */}
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 50, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-blue-100/30 rounded-full blur-[150px]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -30, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 2 }}
          className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[120px]"
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-flex items-center gap-3 px-6 py-2 bg-white/60 backdrop-blur-2xl border border-white/50 text-gold rounded-full text-xs font-black tracking-[0.2em] uppercase mb-10 shadow-xl shadow-gold/5"
              >
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-gold"></span>
                </span>
                {t('home.role')}
              </motion.div>
              
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-[0.9] tracking-tighter text-slate-900">
                <AnimatedText text={t('home.title').split('|')[0].trim()} className="block" />
                <span className="block text-gold text-glow-gold italic mt-2 drop-shadow-2xl">
                  {t('home.title').split('|')[1].trim()}
                </span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="text-slate-500 text-xl md:text-2xl mb-12 max-w-2xl font-light leading-relaxed text-justify"
              >
                {t('home.description')}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="flex flex-wrap gap-6"
              >
                <Link to="/contact" className="btn btn-primary group px-10 py-5">
                  <span className="relative z-10 flex items-center gap-3">
                    {t('home.contactMe')} <Rocket size={20} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <Link to="/projects" className="btn btn-outline border-slate-200 text-slate-900 hover:border-gold hover:text-gold transition-all duration-500 px-10 py-5 group">
                  <span className="flex items-center gap-2">
                    {t('home.viewProjects')} <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative hidden lg:block perspective-2000"
            >
              {/* Profile Image with Premium Frame */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-gold via-gold-light to-gold rounded-[3rem] opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-1000 animate-pulse"></div>
                <div className="relative w-full h-[750px] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/50 bg-white/10 backdrop-blur-sm p-2">
                  <div className="w-full h-full rounded-[2.3rem] overflow-hidden relative">
                    <img
                      src="https://media.licdn.com/dms/image/v2/D4E03AQGz9Hn9h2qPrA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1694973929346?e=1746662400&v=beta&t=rWPTpX0hd9tBxU2lxPEeHNZk-MitLkGAcxJvBWnwCe8"
                      alt="Kevin Alejandro Naranjo Reyes"
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity duration-700"></div>
                  </div>
                </div>

                {/* Floating Experience Badge */}
                <motion.div
                  initial={{ opacity: 0, x: 50, rotate: 10 }}
                  animate={{ opacity: 1, x: 0, rotate: 0 }}
                  transition={{ duration: 1, delay: 1.5 }}
                  className="absolute -bottom-12 -right-12 glass-card p-10 rounded-[2.5rem] shadow-2xl border border-gold/20"
                >
                  <div className="flex items-center gap-8">
                    <div>
                      <ExperienceCounter className="text-6xl font-black text-gold mb-1" />
                      <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em]">{t('about.experience')}</p>
                    </div>
                    <div className="w-px h-16 bg-slate-100/50"></div>
                    <div>
                      <p className="text-3xl font-black text-slate-900 mb-1">100+</p>
                      <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em]">{t('home.projectsDelivered')}</p>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Tech Badges */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-10 -left-10 glass-card p-6 rounded-3xl border border-gold/10"
                >
                  <Code className="text-gold" size={32} />
                </motion.div>
                <motion.div
                  animate={{ y: [0, 15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute top-1/2 -left-20 glass-card p-6 rounded-3xl border border-gold/10"
                >
                  <Brain className="text-gold" size={32} />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Preview Section - Living UI */}
      <section className="py-40 relative bg-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
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
              <p className="text-slate-500 text-xl mb-12 font-light leading-relaxed text-justify">
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
                { label: 'Visionary', icon: <Monitor size={40} />, delay: 0.1 },
                { label: 'Strategic', icon: <Brain size={40} />, delay: 0.2 },
                { label: 'Technical', icon: <Code size={40} />, delay: 0.3 },
                { label: 'Results', icon: <Zap size={40} />, delay: 0.4 }
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: item.delay }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="p-10 glass-card border-slate-100 rounded-[2.5rem] group hover:bg-slate-900 transition-all duration-700 hover:shadow-2xl hover:shadow-gold/20"
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
      <section className="py-40 relative bg-slate-50/50">
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
      <section className="py-40 relative bg-white overflow-hidden">
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
            {(t('projectsData', { returnObjects: true }) as any[]).slice(0, 3).map((project, index) => (
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
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                      <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700">
                        <span className="bg-gold text-white px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest">
                          {t('projects.viewDetails')}
                        </span>
                      </div>
                    </div>
                    <div className="p-10">
                      <p className="text-gold font-black text-[10px] uppercase tracking-[0.3em] mb-4">{project.categoryName}</p>
                      <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-gold transition-colors line-clamp-1">
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
      <section className="py-40 relative bg-slate-900 overflow-hidden">
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
              <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-10 leading-[0.95]">
                {t('home.readyToWork').split('?')[0]}<span className="text-gold">?</span>
              </h2>
              <p className="text-slate-400 text-xl md:text-2xl mb-12 font-light leading-relaxed max-w-xl text-justify">
                {t('home.contactDesc')}
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <a href="https://wa.me/573175816061" target="_blank" rel="noopener noreferrer" className="btn bg-gold text-white hover:bg-white hover:text-slate-900 px-12 py-5 shadow-2xl shadow-gold/20 flex items-center justify-center gap-3">
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
                className="glass-card-dark p-12 group hover:border-gold/30 transition-all duration-700"
              >
                <div className="text-gold mb-8 group-hover:scale-110 transition-transform duration-500"><Brain size={56} /></div>
                <h3 className="text-2xl font-black text-white mb-6 tracking-tight">{t('home.aiCardTitle')}</h3>
                <p className="text-slate-400 font-light leading-relaxed text-sm text-justify">
                  {t('home.aiCardDesc')}
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="glass-card-dark p-12 group hover:border-gold/30 transition-all duration-700"
              >
                <div className="text-gold mb-8 group-hover:scale-110 transition-transform duration-500"><Code size={56} /></div>
                <h3 className="text-2xl font-black text-white mb-6 tracking-tight">{t('home.cloudCardTitle')}</h3>
                <p className="text-slate-400 font-light leading-relaxed text-sm text-justify">
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