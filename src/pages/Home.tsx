import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Brain, Monitor } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SectionTitle from '../components/SectionTitle';
import SkillCard from '../components/SkillCard';
import CVDownloadButton from '../components/CVDownloadButton';
import GeometricShapes from '../components/GeometricShapes';
import ExperienceCounter from '../components/ExperienceCounter';

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-16 mesh-gradient min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden">
        <GeometricShapes />
        
        {/* Cinematic Background Elements */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-blue-50 rounded-full blur-[150px]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
          className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px]"
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="inline-flex items-center gap-3 px-5 py-2 bg-white backdrop-blur-2xl border border-slate-100 text-gold rounded-full text-sm font-bold tracking-widest uppercase mb-8 shadow-sm"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
                </span>
                {t('home.role')}
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight tracking-tighter text-slate-900">
                <span className="block">{t('home.title').split('|')[0]}</span>
                <span className="block text-gold text-glow-gold italic">{t('home.title').split('|')[1]}</span>
              </h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="text-slate-500 text-xl md:text-2xl mb-12 max-w-2xl font-light leading-relaxed"
              >
                {t('home.description')}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="flex flex-wrap gap-6"
              >
                <Link to="/contact" className="btn btn-primary group">
                  <span className="relative z-10 flex items-center gap-2">
                    {t('home.contactMe')} <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <Link to="/projects" className="btn btn-outline border-slate-200 text-slate-900 hover:border-gold hover:text-gold transition-all duration-500">
                  {t('home.viewProjects')}
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full h-[650px] rounded-[2rem] overflow-hidden shadow-2xl border-gold-gradient group p-1 bg-white">
                <div className="w-full h-full rounded-[1.9rem] overflow-hidden relative bg-white">
                  <img
                    src="https://media.licdn.com/dms/image/v2/D4E03AQGz9Hn9h2qPrA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1694973929346?e=1746662400&v=beta&t=rWPTpX0hd9tBxU2lxPEeHNZk-MitLkGAcxJvBWnwCe8"
                    alt="Kevin Alejandro Naranjo Reyes"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60"></div>
                </div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="absolute -bottom-10 -right-10 bg-white backdrop-blur-3xl p-10 rounded-3xl shadow-2xl border border-slate-100"
              >
                <div className="flex items-center gap-6">
                  <div>
                    <ExperienceCounter className="text-5xl font-black text-gold mb-1" />
                    <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">{t('about.experience')}</p>
                  </div>
                  <div className="w-px h-12 bg-slate-100"></div>
                  <div>
                    <p className="text-2xl font-black text-slate-900 mb-1">100+</p>
                    <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">{t('home.projectsDelivered')}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-32 relative bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
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
              <p className="text-slate-500 text-lg mb-10 font-light leading-relaxed">
                {t('home.aboutDescription2')}
              </p>
              <Link to="/about" className="btn btn-outline border-slate-200 text-slate-900 group">
                <span className="flex items-center gap-3">
                  {t('home.learnMore')} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.div>
            
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: 'Visionary', icon: <Monitor size={32} /> },
                { label: 'Strategic', icon: <Brain size={32} /> },
                { label: 'Technical', icon: <Code size={32} /> },
                { label: 'Results', icon: <ArrowRight size={32} /> }
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 bg-slate-50 border border-slate-100 rounded-3xl group hover:bg-gold transition-all duration-500"
                >
                  <div className="text-gold group-hover:text-white transition-colors mb-4">{item.icon}</div>
                  <p className="text-slate-900 group-hover:text-white font-black uppercase tracking-widest text-xs">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Showcase */}
      <section className="py-32 relative bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
          <SectionTitle
            title={t('home.skillsTitle')}
            subtitle={t('home.skillsSubtitle')}
            center={true}
          />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <SkillCard
              icon={<Code size={32} />}
              title={t('home.softwareDev')}
              description={t('home.softwareDesc')}
              delay={0.1}
            />
            <SkillCard
              icon={<Brain size={32} />}
              title={t('home.machineLearning')}
              description={t('home.mlDesc')}
              delay={0.2}
            />
            <SkillCard
              icon={<Monitor size={32} />}
              title={t('home.computerVision')}
              description={t('home.cvDesc')}
              delay={0.3}
            />
            <SkillCard
              icon={<Code size={32} />}
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
            className="text-center mt-20"
          >
            <Link to="/skills" className="btn btn-outline border-slate-200 text-slate-900">
              {t('home.exploreSkills')}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-32 relative bg-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <SectionTitle
                title={t('home.featuredTitle')}
                subtitle={t('home.featuredSubtitle')}
              />
            </div>
            <Link to="/projects" className="btn btn-outline border-slate-200 text-slate-900 mb-2 group">
              <span className="flex items-center gap-2">
                {t('home.viewProjects')} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {(t('projectsData', { returnObjects: true }) as any[]).slice(0, 3).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link to={`/projects/${project.id}`}>
                  <div className="premium-card h-full bg-white flex flex-col border border-slate-50">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    <div className="p-6">
                      <p className="text-gold font-black text-[9px] uppercase tracking-[0.2em] mb-2">{project.categoryName}</p>
                      <h3 className="text-xl font-black text-slate-900 mb-3 tracking-tight group-hover:text-gold transition-colors line-clamp-1">
                        {project.title}
                      </h3>
                      <p className="text-slate-500 text-xs font-light leading-relaxed line-clamp-2">
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

      {/* Experience Highlights */}
      <section className="py-32 relative bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-8 leading-tight">
                {t('home.readyToWork')}
              </h2>
              <p className="text-slate-500 text-lg mb-10 font-light leading-relaxed">
                {t('home.contactDesc')}
              </p>
              <div className="flex flex-col gap-4">
                <a href="https://wa.me/573175816061" target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full text-center">
                  {t('home.whatsapp')}
                </a>
                <CVDownloadButton className="btn btn-outline border-slate-200 text-slate-900 w-full text-center" />
              </div>
            </motion.div>

            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="premium-card p-10 bg-slate-50"
              >
                <div className="text-gold mb-6"><Brain size={48} /></div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">{t('home.aiCardTitle')}</h3>
                <p className="text-slate-500 font-light leading-relaxed">
                  {t('home.aiCardDesc')}
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="premium-card p-10 bg-slate-50"
              >
                <div className="text-gold mb-6"><Code size={48} /></div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">{t('home.cloudCardTitle')}</h3>
                <p className="text-slate-500 font-light leading-relaxed">
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