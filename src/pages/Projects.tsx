import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Search, ArrowRight, X, LayoutGrid, List, Building2, Calendar } from 'lucide-react';
import GeometricShapes from '../components/GeometricShapes';
import BackgroundParticles from '../components/BackgroundParticles';

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('todos');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const allProjects = t('projectsData', { returnObjects: true }) as any[];

  const categories = useMemo(() => [
    { id: 'todos', name: t('projects.all') },
    { id: 'web', name: t('projects.webDev') },
    { id: 'ml', name: t('projects.machineLearning') },
    { id: 'vision', name: t('projects.computerVision') },
    { id: 'auto', name: t('projects.automation') },
    { id: 'consulting', name: t('projects.consulting') },
  ], [t]);

  const getCount = (categoryId: string) => {
    if (categoryId === 'todos') return allProjects.length;
    return allProjects.filter(p => p.category === categoryId).length;
  };

  const filteredProjects = useMemo(() =>
    allProjects.filter((project) => {
      const term = searchTerm.toLowerCase();
      const matchesSearch =
        !term ||
        project.title.toLowerCase().includes(term) ||
        project.description.toLowerCase().includes(term) ||
        project.client?.toLowerCase().includes(term) ||
        project.technologies?.some((tech: string) => tech.toLowerCase().includes(term));
      const matchesCategory =
        activeCategory === 'todos' || project.category === activeCategory;
      return matchesSearch && matchesCategory;
    }),
    [allProjects, searchTerm, activeCategory]
  );

  const hasActiveFilters = searchTerm || activeCategory !== 'todos';

  const clearAll = () => {
    setSearchTerm('');
    setActiveCategory('todos');
  };

  return (
    <div className="pt-16 mesh-gradient min-h-screen">
      <BackgroundParticles />

      {/* Hero */}
      <section className="py-24 relative overflow-hidden">
        <GeometricShapes />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-7xl font-black mb-6 text-slate-900 tracking-tighter">
              {t('projects.featuredSolutions').split(' ').map((word, i) => (
                <span key={i} className={word.toLowerCase().includes('solu') || word.toLowerCase().includes('desta') ? 'text-gold italic' : ''}>
                  {word}{' '}
                </span>
              ))}
            </h1>
            <p className="text-slate-500 text-xl md:text-2xl max-w-2xl mx-auto font-light leading-relaxed">
              {t('projects.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Controls Bar */}
      <section className="sticky top-16 z-30 bg-white/80 backdrop-blur-2xl border-b border-slate-100 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">

            {/* Search */}
            <div className="relative w-full md:w-72 group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search size={16} className="text-slate-400 group-focus-within:text-gold transition-colors" />
              </div>
              <input
                id="projects-search"
                type="text"
                placeholder={t('projects.search')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-10 py-2.5 rounded-full bg-slate-50 border border-slate-100 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:bg-white transition-all duration-300 placeholder-slate-300"
              />
              <AnimatePresence>
                {searchTerm && (
                  <motion.button
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    onClick={() => setSearchTerm('')}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-700 transition-colors"
                  >
                    <X size={14} />
                  </motion.button>
                )}
              </AnimatePresence>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((cat) => {
                const count = getCount(cat.id);
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${
                      isActive
                        ? 'bg-slate-900 text-white shadow-md scale-105'
                        : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100 bg-slate-50'
                    }`}
                  >
                    {cat.name}
                    <span className={`text-[9px] font-black px-1.5 py-0.5 rounded-full ${
                      isActive ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-500'
                    }`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Right controls: result count + view toggle */}
            <div className="flex items-center gap-4 shrink-0">
              <AnimatePresence mode="wait">
                <motion.p
                  key={filteredProjects.length}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  className="text-slate-400 text-xs font-bold whitespace-nowrap"
                >
                  <span className="text-slate-900 font-black">{filteredProjects.length}</span>{' '}
                  {t('projects.resultCount')}
                </motion.p>
              </AnimatePresence>

              {hasActiveFilters && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  onClick={clearAll}
                  className="flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-gold border border-gold/30 px-3 py-1.5 rounded-full hover:bg-gold hover:text-white transition-all duration-300"
                >
                  <X size={10} /> {t('projects.clearFilters')}
                </motion.button>
              )}

              {/* View Toggle */}
              <div className="flex bg-slate-100 rounded-full p-1 gap-1">
                <button
                  onClick={() => setViewMode('grid')}
                  title={t('projects.gridView')}
                  className={`p-1.5 rounded-full transition-all duration-300 ${viewMode === 'grid' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-400 hover:text-slate-700'}`}
                >
                  <LayoutGrid size={14} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  title={t('projects.listView')}
                  className={`p-1.5 rounded-full transition-all duration-300 ${viewMode === 'list' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-400 hover:text-slate-700'}`}
                >
                  <List size={14} />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          <AnimatePresence mode="wait">
            {filteredProjects.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-center py-32"
              >
                <div className="text-8xl mb-8">🔍</div>
                <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tighter">{t('projects.noResults')}</h3>
                <p className="text-slate-400 font-light mb-8">Try different keywords or clear your active filters.</p>
                <button
                  onClick={clearAll}
                  className="btn btn-primary"
                >
                  {t('projects.clearFilters')}
                </button>
              </motion.div>
            ) : viewMode === 'grid' ? (
              /* === GRID VIEW === */
              <motion.div
                key="grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
              >
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20, scale: 0.95 }}
                    transition={{ duration: 0.5, delay: index * 0.06 }}
                    className="group relative"
                  >
                    <Link to={`/projects/${project.id}`}>
                      <div className="premium-card h-full bg-white flex flex-col">
                        <div className="relative h-56 overflow-hidden">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          {/* Project number */}
                          <div className="absolute top-4 left-5 text-white/15 text-7xl font-black italic leading-none pointer-events-none select-none group-hover:text-gold/25 transition-colors duration-700">
                            {String(project.id).padStart(2, '0')}
                          </div>
                          {/* Category badge */}
                          <div className="absolute bottom-5 left-5 right-5 flex justify-between items-end translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                            <span className="px-3 py-1 bg-gold text-white rounded-full text-[9px] font-black uppercase tracking-widest shadow-lg">
                              {project.categoryName}
                            </span>
                            {project.client && (
                              <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white rounded-full text-[9px] font-bold flex items-center gap-1">
                                <Building2 size={9} /> {project.client}
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="p-7 flex-grow flex flex-col">
                          {/* Static category pill (visible without hover) */}
                          <p className="text-gold text-[9px] font-black uppercase tracking-[0.2em] mb-2">{project.categoryName}</p>
                          <h3 className="text-xl font-black mb-3 text-slate-900 tracking-tight group-hover:text-gold transition-colors duration-300 line-clamp-2">
                            {project.title}
                          </h3>
                          <p className="text-slate-500 text-sm font-light leading-relaxed mb-5 line-clamp-2 flex-grow">
                            {project.description}
                          </p>

                          {/* Tech Badges */}
                          <div className="flex flex-wrap gap-1.5 mb-6">
                            {project.technologies?.slice(0, 3).map((tech: string) => (
                              <span key={tech} className="px-2.5 py-1 bg-slate-50 text-slate-400 text-[9px] font-bold uppercase tracking-wide rounded-lg border border-slate-100 group-hover:border-gold/20 group-hover:text-slate-600 transition-all">
                                {tech}
                              </span>
                            ))}
                            {project.technologies?.length > 3 && (
                              <span className="text-[9px] text-slate-300 font-bold self-center px-1">
                                +{project.technologies.length - 3}
                              </span>
                            )}
                          </div>

                          <div className="flex items-center justify-between mt-auto">
                            <div className="flex items-center gap-2 text-gold font-black text-[10px] uppercase tracking-widest group-hover:gap-3 transition-all">
                              {t('projects.viewDetails')} <ArrowRight size={14} />
                            </div>
                            {project.date && (
                              <span className="text-[9px] text-slate-300 font-medium flex items-center gap-1">
                                <Calendar size={9} /> {project.date}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              /* === LIST VIEW === */
              <motion.div
                key="list"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col gap-4"
              >
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.4, delay: index * 0.04 }}
                    className="group"
                  >
                    <Link to={`/projects/${project.id}`}>
                      <div className="bg-white border border-slate-100 rounded-2xl p-6 flex gap-6 items-start hover:border-gold/20 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                        {/* Thumbnail */}
                        <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                          />
                        </div>

                        {/* Content */}
                        <div className="flex-grow min-w-0">
                          <div className="flex items-center gap-2 mb-1.5">
                            <span className="px-2.5 py-0.5 bg-gold/10 text-gold rounded-full text-[9px] font-black uppercase tracking-wider">
                              {project.categoryName}
                            </span>
                            {project.client && (
                              <span className="text-[9px] text-slate-400 font-medium flex items-center gap-1">
                                <Building2 size={9} /> {project.client}
                              </span>
                            )}
                          </div>
                          <h3 className="text-lg font-black text-slate-900 tracking-tight group-hover:text-gold transition-colors mb-1.5 truncate">
                            {project.title}
                          </h3>
                          <p className="text-slate-500 text-sm font-light line-clamp-1 mb-3">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {project.technologies?.slice(0, 4).map((tech: string) => (
                              <span key={tech} className="px-2 py-0.5 bg-slate-50 text-slate-400 text-[9px] font-bold uppercase tracking-wide rounded border border-slate-100">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Right arrow */}
                        <div className="shrink-0 flex items-center self-center text-slate-200 group-hover:text-gold transition-colors duration-300">
                          <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mt-32 p-16 bg-slate-50 rounded-[3rem] border border-slate-100 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-50/50 blur-[60px] rounded-full -translate-x-1/2 translate-y-1/2" />
            <h2 className="text-4xl md:text-6xl font-black mb-8 text-slate-900 tracking-tighter relative z-10">
              {t('projects.projectIdea')}
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto mb-10 font-light relative z-10">
              {t('projects.projectDesc')}
            </p>
            <div className="flex flex-wrap justify-center gap-4 relative z-10">
              <Link to="/contact" className="btn btn-primary">
                {t('home.contactMe')}
              </Link>
              <a
                href="https://wa.me/573175816061"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline border-slate-200 text-slate-900 hover:border-gold hover:text-gold transition-all"
              >
                {t('home.whatsapp')}
              </a>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
};

export default Projects;