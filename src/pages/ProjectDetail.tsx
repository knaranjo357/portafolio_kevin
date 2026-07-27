import React, { useEffect, useState, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft, ArrowRight, Calendar, ExternalLink,
  User, Briefcase, ChevronLeft, ChevronRight,
  Zap, CheckCircle2, AlertCircle, Building2
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import BackgroundParticles from '../components/BackgroundParticles';
import LazyImage from '../components/LazyImage';

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

const CATEGORY_COLORS: Record<string, string> = {
  web: 'bg-blue-50 text-blue-600 border-blue-100',
  ml: 'bg-purple-50 text-purple-600 border-purple-100',
  vision: 'bg-emerald-50 text-emerald-600 border-emerald-100',
  auto: 'bg-orange-50 text-orange-600 border-orange-100',
  consulting: 'bg-gold/10 text-yellow-700 border-yellow-100',
};

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [project, setProject] = useState<ProjectData | null>(null);
  const [loading, setLoading] = useState(true);

  const allProjects = useMemo(
    () => t('projectsData', { returnObjects: true }) as ProjectData[],
    [t]
  );

  useEffect(() => {
    const found = allProjects.find(p => p.id === Number(id));
    setProject(found || null);
    setLoading(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id, allProjects]);

  const currentIndex = useMemo(
    () => allProjects.findIndex(p => p.id === Number(id)),
    [allProjects, id]
  );
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null;
  const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : null;

  const relatedProjects = useMemo(() =>
    allProjects
      .filter(p => p.id !== Number(id) && p.category === project?.category)
      .slice(0, 3),
    [allProjects, id, project]
  );

  if (loading) {
    return (
      <div className="pt-24 pb-16 flex justify-center items-center min-h-[50vh]">
        <div className="flex flex-col items-center gap-4">
          <div className="h-10 w-10 border-4 border-gold border-t-transparent rounded-full animate-spin" />
          <p className="text-slate-400 font-black uppercase tracking-widest text-xs">Loading...</p>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="pt-32 pb-16 container mx-auto px-4 min-h-screen text-center">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
          <div className="text-8xl mb-8">🔍</div>
          <h2 className="text-4xl font-black mb-4 text-slate-900 tracking-tighter">{t('projects.projectNotFound')}</h2>
          <p className="text-slate-500 mb-12 font-light max-w-md mx-auto">{t('projects.projectNotFoundDesc')}</p>
          <Link to="/projects" className="btn btn-primary">{t('projects.backToProjects')}</Link>
        </motion.div>
      </div>
    );
  }

  const colorClass = CATEGORY_COLORS[project.category] || 'bg-slate-100 text-slate-600 border-slate-200';

  return (
    <div className="pt-16 mesh-gradient min-h-screen">
      <BackgroundParticles />

      {/* ── Cinematic Hero ── */}
      <section className="relative h-[65vh] min-h-[480px] overflow-hidden">
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <LazyImage src={project.image} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent" />
        </motion.div>

        {/* Breadcrumb + Title */}
        <div className="absolute inset-0 flex flex-col justify-end pb-12 z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 mb-6"
            >
              <Link to="/" className="hover:text-gold transition-colors">Home</Link>
              <ChevronRight size={10} />
              <Link to="/projects" className="hover:text-gold transition-colors">{t('projects.title')}</Link>
              <ChevronRight size={10} />
              <span className="text-slate-600 line-clamp-1 max-w-xs">{project.title}</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
            >
              {/* Category + client row */}
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border ${colorClass}`}>
                  {project.categoryName}
                </span>
                {project.client && (
                  <span className="flex items-center gap-1.5 px-4 py-1.5 bg-white/70 backdrop-blur-md rounded-full text-[10px] font-bold text-slate-600 border border-white/50">
                    <Building2 size={10} /> {project.client}
                  </span>
                )}
                {project.date && (
                  <span className="flex items-center gap-1.5 px-4 py-1.5 bg-white/70 backdrop-blur-md rounded-full text-[10px] font-bold text-slate-600 border border-white/50">
                    <Calendar size={10} /> {project.date}
                  </span>
                )}
              </div>

              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tighter leading-none max-w-4xl drop-shadow-sm">
                {project.title}
              </h1>
            </motion.div>
          </div>
        </div>

        {/* Prev / Next fixed nav */}
        <div className="fixed top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between z-[100] pointer-events-none">
          <AnimatePresence>
            {prevProject && (
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                onClick={() => navigate(`/projects/${prevProject.id}`)}
                className="pointer-events-auto p-3 bg-white/80 backdrop-blur-md rounded-full shadow-lg border border-white/50 text-slate-700 hover:text-gold hover:border-gold/30 transition-all duration-300 group"
                title={prevProject.title}
              >
                <ChevronLeft size={20} className="group-hover:-translate-x-0.5 transition-transform" />
              </motion.button>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {nextProject && (
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                onClick={() => navigate(`/projects/${nextProject.id}`)}
                className="pointer-events-auto p-3 bg-white/80 backdrop-blur-md rounded-full shadow-lg border border-white/50 text-slate-700 hover:text-gold hover:border-gold/30 transition-all duration-300 group"
                title={nextProject.title}
              >
                <ChevronRight size={20} className="group-hover:translate-x-0.5 transition-transform" />
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ── Body ── */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-32 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12">

          {/* ── Left: Content ── */}
          <div className="lg:col-span-8 space-y-10">

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="premium-card p-10 bg-white"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="h-0.5 w-10 bg-gold rounded-full" />
                <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
                  {t('projectDetail.description')}
                </h2>
              </div>
              <div className="text-slate-600 text-lg font-light leading-relaxed space-y-6">
                {project.fullDescription
                  ? project.fullDescription.split('\n').map((p, i) => <p key={i}>{p}</p>)
                  : <p>{project.description}</p>
                }
              </div>

              {project.link && project.link !== '#' && (
                <div className="mt-10 pt-8 border-t border-slate-100 flex justify-between items-center">
                  <p className="text-slate-400 text-sm italic font-light">Experience the solution live</p>
                  <motion.a
                    whileHover={{ x: 6, scale: 1.02 }}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-slate-900 text-white px-7 py-3.5 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-lg hover:bg-gold transition-all duration-400"
                  >
                    {t('projects.exploreProject')} <ExternalLink size={16} />
                  </motion.a>
                </div>
              )}
            </motion.div>

            {/* Challenges & Solutions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Challenges */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="premium-card p-8 bg-white border-t-4 border-red-400"
              >
                <div className="flex items-center gap-3 mb-7">
                  <AlertCircle size={20} className="text-red-400 shrink-0" />
                  <h3 className="text-base font-black text-slate-900 tracking-tight">{t('projectDetail.challenges')}</h3>
                </div>
                <ul className="space-y-4">
                  {project.challenges?.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-500 text-sm font-light leading-relaxed">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-red-200 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Solutions */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="premium-card p-8 bg-white border-t-4 border-emerald-400"
              >
                <div className="flex items-center gap-3 mb-7">
                  <CheckCircle2 size={20} className="text-emerald-400 shrink-0" />
                  <h3 className="text-base font-black text-slate-900 tracking-tight">{t('projectDetail.solutions')}</h3>
                </div>
                <ul className="space-y-4">
                  {project.solutions?.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-500 text-sm font-light leading-relaxed">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-200 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Results — impact cards */}
            {project.results && project.results.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="premium-card p-10 bg-slate-900 text-white relative overflow-hidden"
              >
                <div className="absolute -top-10 -right-10 w-48 h-48 bg-gold/10 blur-3xl rounded-full" />
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-500/5 blur-3xl rounded-full" />
                <div className="flex items-center gap-3 mb-10 relative z-10">
                  <Zap size={20} className="text-gold" />
                  <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-gold">{t('projectDetail.results')}</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
                  {project.results.map((result, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.03, y: -4 }}
                      className="p-5 bg-white/5 border border-white/10 rounded-2xl hover:border-gold/30 hover:bg-gold/10 transition-all duration-300 group/result"
                    >
                      <div className="flex items-start gap-3">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                        <p className="text-white/85 text-sm font-light leading-relaxed group-hover/result:text-white group-hover/result:font-medium">{result}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* ── Right: Sidebar ── */}
          <div className="lg:col-span-4 space-y-6">

            {/* Meta card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="premium-card p-8 bg-white sticky top-28"
            >
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-7">{t('projects.executionDetails')}</h3>
              <div className="space-y-6">
                {project.client && (
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-widest text-slate-300 mb-1.5 flex items-center gap-2">
                      <User size={10} className="text-gold" /> {t('projects.client')}
                    </p>
                    <p className="text-slate-900 font-black tracking-tight">{project.client}</p>
                  </div>
                )}
                {project.role && (
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-widest text-slate-300 mb-1.5 flex items-center gap-2">
                      <Briefcase size={10} className="text-gold" /> {t('projects.role')}
                    </p>
                    <p className="text-slate-900 font-black tracking-tight">{project.role}</p>
                  </div>
                )}
                {project.date && (
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-widest text-slate-300 mb-1.5 flex items-center gap-2">
                      <Calendar size={10} className="text-gold" /> Timeline
                    </p>
                    <p className="text-slate-900 font-black tracking-tight">{project.date}</p>
                  </div>
                )}
              </div>

              {/* Divider */}
              <div className="border-t border-slate-100 my-7" />

              {/* Tech Stack */}
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-5">{t('projectDetail.technologies')}</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies?.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-xl text-slate-700 text-[10px] font-bold hover:border-gold/40 hover:text-gold hover:bg-gold/5 transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-8 space-y-3">
                <Link
                  to="/contact"
                  className="w-full flex items-center justify-center gap-2 btn btn-primary text-sm py-3"
                >
                  {t('home.contactMe')} <ArrowRight size={16} />
                </Link>
                <Link
                  to="/projects"
                  className="w-full flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-gold transition-colors py-2"
                >
                  <ArrowLeft size={12} /> {t('projects.backToProjects')}
                </Link>
              </div>
            </motion.div>

          </div>
        </div>

        {/* ── Prev / Next Banner ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {prevProject ? (
            <Link to={`/projects/${prevProject.id}`} className="group">
              <div className="flex items-center gap-5 p-6 bg-white border border-slate-100 rounded-2xl hover:border-gold/20 hover:shadow-lg transition-all duration-300">
                <div className="shrink-0 w-14 h-14 rounded-xl overflow-hidden">
                  <LazyImage src={prevProject.image} alt={prevProject.title} className="grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <div className="min-w-0">
                  <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-0.5 flex items-center gap-1">
                    <ChevronLeft size={9} /> Previous
                  </p>
                  <p className="text-sm font-black text-slate-900 group-hover:text-gold transition-colors truncate">{prevProject.title}</p>
                </div>
              </div>
            </Link>
          ) : <div />}

          {nextProject && (
            <Link to={`/projects/${nextProject.id}`} className="group">
              <div className="flex items-center justify-end gap-5 p-6 bg-white border border-slate-100 rounded-2xl hover:border-gold/20 hover:shadow-lg transition-all duration-300">
                <div className="min-w-0 text-right">
                  <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-0.5 flex items-center justify-end gap-1">
                    Next <ChevronRight size={9} />
                  </p>
                  <p className="text-sm font-black text-slate-900 group-hover:text-gold transition-colors truncate">{nextProject.title}</p>
                </div>
                <div className="shrink-0 w-14 h-14 rounded-xl overflow-hidden">
                  <LazyImage src={nextProject.image} alt={nextProject.title} className="grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
              </div>
            </Link>
          )}
        </motion.div>

        {/* ── Related Projects ── */}
        {relatedProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-0.5 w-8 bg-gold rounded-full" />
              <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">{t('projectDetail.moreProjects')}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProjects.map((rel, i) => (
                <motion.div
                  key={rel.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Link to={`/projects/${rel.id}`}>
                    <div className="bg-white border border-slate-100 rounded-2xl overflow-hidden hover:border-gold/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                      <div className="h-36 overflow-hidden">
                        <LazyImage src={rel.image} alt={rel.title} className="grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300" />
                      </div>
                      <div className="p-5">
                        <p className="text-gold text-[9px] font-black uppercase tracking-wider mb-1">{rel.categoryName}</p>
                        <h3 className="text-sm font-black text-slate-900 group-hover:text-gold transition-colors line-clamp-1">{rel.title}</h3>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* ── Bottom CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-10 text-slate-900 tracking-tighter leading-none">
            {t('projects.buildEpic').split(' ').map((word, i) => (
              <span key={i} className={word.toLowerCase().includes('epic') || word.toLowerCase().includes('épi') ? 'text-gold italic' : ''}>
                {word}{' '}
              </span>
            ))}
          </h2>
          <div className="flex flex-wrap justify-center gap-5">
            <Link to="/contact" className="btn btn-primary px-10 py-4">
              {t('home.contactMe')}
            </Link>
            <a
              href="https://wa.me/573175816061"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline border-slate-200 text-slate-900 px-10 py-4 hover:border-gold hover:text-gold transition-all"
            >
              {t('home.whatsapp')}
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;