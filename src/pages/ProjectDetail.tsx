import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Zap, ExternalLink, User, Briefcase } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import GeometricShapes from '../components/GeometricShapes';
import BackgroundParticles from '../components/BackgroundParticles';

interface ProjectData {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  categoryName: string;
  fullDescription?: string;
  technologies?: string[];
  challenges?: string[];
  solutions?: string[];
  results?: string[];
  date?: string;
  client?: string;
  role?: string;
  link?: string;
}

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();
  const [project, setProject] = useState<ProjectData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const projectsData = t('projectsData', { returnObjects: true }) as ProjectData[];
    const foundProject = projectsData.find(p => p.id === Number(id));
    setProject(foundProject || null);
    setLoading(false);
    window.scrollTo(0, 0);
  }, [id, t]);

  if (loading) {
    return (
      <div className="pt-24 pb-16 flex justify-center items-center min-h-[50vh]">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-12 w-12 border-4 border-gold border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-slate-400 font-black uppercase tracking-widest text-xs">Loading Case Study...</p>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="pt-32 pb-16 container mx-auto px-4 min-h-screen text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <h2 className="text-4xl font-black mb-4 text-slate-900 tracking-tighter">{t('projects.projectNotFound')}</h2>
          <p className="text-slate-500 mb-12 font-light max-w-md mx-auto">{t('projects.projectNotFoundDesc')}</p>
          <Link to="/projects" className="btn btn-primary">
            {t('projects.backToProjects')}
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-16 mesh-gradient min-h-screen">
      <BackgroundParticles />
      
      {/* Cinematic Hero Header */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0"
        >
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover grayscale-[0.5] contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent"></div>
        </motion.div>
        
        <div className="absolute inset-0 flex items-end pb-20 z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <Link to="/projects" className="inline-flex items-center text-slate-900 hover:text-gold transition-colors mb-8 font-black text-xs uppercase tracking-widest gap-2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/50 shadow-sm">
                <ArrowLeft size={16} /> {t('projects.backToProjects')}
              </Link>
              <h1 className="text-5xl md:text-8xl font-black text-slate-900 mb-8 tracking-tighter leading-none max-w-5xl drop-shadow-sm">
                {project.title}
              </h1>
              <div className="flex flex-wrap gap-6 items-center">
                <span className="px-6 py-2.5 bg-slate-900 text-white rounded-full text-xs font-black uppercase tracking-widest shadow-xl">
                  {project.categoryName}
                </span>
                {project.date && (
                  <span className="text-slate-500 text-sm font-bold flex items-center gap-2 bg-white/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/50">
                    <Calendar size={16} className="text-gold" /> {project.date}
                  </span>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Description & Case Study */}
          <div className="lg:col-span-8 space-y-12">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="premium-card p-12 bg-white shadow-2xl"
            >
              <div className="flex items-center gap-4 mb-10">
                <div className="h-1 w-12 bg-gold rounded-full"></div>
                <h2 className="text-xs font-black uppercase tracking-widest text-slate-400">{t('projectDetail.description')}</h2>
              </div>
              
              <div className="space-y-8 text-slate-600 text-xl font-light leading-relaxed">
                {project.fullDescription?.split('\n').map((para, i) => (
                  <p key={i} className="first-letter:text-5xl first-letter:font-black first-letter:text-slate-900 first-letter:mr-3 first-letter:float-left">{para}</p>
                )) || <p>{project.description}</p>}
              </div>

              {project.link && (
                <div className="mt-16 pt-10 border-t border-slate-100 flex justify-between items-center">
                  <p className="text-slate-400 text-sm italic font-light">Experience the solution live</p>
                  <motion.a
                    whileHover={{ x: 10, scale: 1.02 }}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-4 bg-slate-900 text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl hover:bg-gold transition-all duration-500"
                  >
                    {t('projects.exploreProject')} <ExternalLink size={20} />
                  </motion.a>
                </div>
              )}
            </motion.div>

            {/* Challenges & Solutions Detail */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="premium-card p-10 bg-white border-t-4 border-red-500"
              >
                <h3 className="text-2xl font-black mb-8 text-slate-900 tracking-tight flex items-center gap-3">
                  <Zap size={24} className="text-red-500" /> {t('projectDetail.challenges')}
                </h3>
                <ul className="space-y-6">
                  {project.challenges?.map((item, index) => (
                    <li key={index} className="flex items-start gap-4 text-slate-500 font-light text-sm leading-relaxed group">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-200 mt-2.5 group-hover:bg-red-500 transition-colors"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="premium-card p-10 bg-white border-t-4 border-emerald-500"
              >
                <h3 className="text-2xl font-black mb-8 text-slate-900 tracking-tight flex items-center gap-3">
                  <Zap size={24} className="text-emerald-500" /> {t('projectDetail.solutions')}
                </h3>
                <ul className="space-y-6">
                  {project.solutions?.map((item, index) => (
                    <li key={index} className="flex items-start gap-4 text-slate-500 font-light text-sm leading-relaxed group">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-200 mt-2.5 group-hover:bg-emerald-500 transition-colors"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Meta Info & Tech Stack */}
          <div className="lg:col-span-4 space-y-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="premium-card p-10 bg-slate-900 text-white overflow-hidden relative"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
              <h3 className="text-gold text-[10px] font-black uppercase tracking-[0.3em] mb-10">{t('projects.executionDetails')}</h3>
              <div className="space-y-8">
                {project.client && (
                  <div className="group">
                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2 flex items-center gap-2">
                      <User size={12} className="text-gold" /> {t('projects.client')}
                    </p>
                    <p className="text-xl font-black text-white group-hover:text-gold transition-colors tracking-tight">{project.client}</p>
                  </div>
                )}
                {project.role && (
                  <div className="group">
                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2 flex items-center gap-2">
                      <Briefcase size={12} className="text-gold" /> {t('projects.role')}
                    </p>
                    <p className="text-xl font-black text-white group-hover:text-gold transition-colors tracking-tight">{project.role}</p>
                  </div>
                )}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="premium-card p-10 bg-white"
            >
              <h3 className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8">{t('projectDetail.technologies')}</h3>
              <div className="flex flex-wrap gap-3">
                {project.technologies?.map((tech, index) => (
                  <span key={index} className="px-4 py-2 bg-slate-50 border border-slate-100 rounded-xl text-slate-700 text-xs font-bold hover:border-gold hover:text-gold transition-all duration-300">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Results Banner */}
        {project.results && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mt-16 p-16 bg-slate-50 rounded-[3rem] border border-slate-100 relative overflow-hidden"
          >
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gold/5 blur-[100px] rounded-full"></div>
            <h2 className="text-4xl font-black mb-16 text-center text-slate-900 tracking-tighter uppercase">{t('projectDetail.results')}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {project.results.map((result, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="p-8 bg-white border border-slate-100 rounded-[2rem] text-center shadow-sm hover:shadow-2xl hover:border-gold/20 transition-all duration-500"
                >
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-gold group-hover:bg-gold group-hover:text-white transition-all">
                    <Zap size={24} />
                  </div>
                  <p className="text-slate-900 font-bold text-sm leading-relaxed">{result}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-32 text-center"
        >
          <h2 className="text-5xl md:text-8xl font-black mb-12 text-slate-900 tracking-tighter leading-none">
            {t('projects.buildEpic').split(' ').map((word, i) => (
              <span key={i} className={word.toLowerCase().includes('epic') || word.toLowerCase().includes('épi') ? 'text-gold italic' : ''}>
                {word}{' '}
              </span>
            ))}
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            <Link to="/contact" className="btn btn-primary px-12 py-5 text-sm uppercase tracking-widest">
              {t('home.contactMe')}
            </Link>
            <a href="https://wa.me/573175816061" target="_blank" rel="noopener noreferrer" className="btn btn-outline border-slate-200 text-slate-900 px-12 py-5 text-sm uppercase tracking-widest hover:border-gold">
              {t('home.whatsapp')}
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;