import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Search, ArrowRight } from 'lucide-react';
import GeometricShapes from '../components/GeometricShapes';
import BackgroundParticles from '../components/BackgroundParticles';

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('todos');

  // Fetch projects from translation file
  const projects = t('projectsData', { returnObjects: true }) as any[];

  const categories = [
    { id: 'todos', name: t('projects.all') },
    { id: 'web', name: t('projects.webDev') },
    { id: 'ml', name: t('projects.machineLearning') },
    { id: 'vision', name: t('projects.computerVision') },
    { id: 'auto', name: t('projects.automation') },
    { id: 'consulting', name: t('projects.consulting') },
  ];

  // Filter projects based on search term and category
  const filteredProjects = projects.filter(
    (project) => {
      const matchesSearch = 
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = 
        activeCategory === 'todos' || 
        project.category === activeCategory;
      
      return matchesSearch && matchesCategory;
    }
  );

  return (
    <div className="pt-16 mesh-gradient min-h-screen">
      <BackgroundParticles />
      
      {/* Hero Section */}
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
                <span key={i} className={word.toLowerCase().includes('solu') ? 'text-gold italic' : ''}>
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

      {/* Projects Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search and Filter */}
          <div className="flex flex-col lg:flex-row gap-8 mb-16 justify-between items-center">
            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/3"
            >
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none group-focus-within:text-gold transition-colors">
                  <Search size={20} className="text-slate-400" />
                </div>
                <input
                  type="text"
                  placeholder={t('projects.search')}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-6 py-4 rounded-full bg-white border border-slate-100 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-[#d4af37] transition-all duration-500 placeholder-slate-300 shadow-sm"
                />
              </div>
            </motion.div>

            {/* Category Filters */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-3 justify-center bg-slate-50 p-2 rounded-full border border-slate-100 shadow-sm"
            >
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-500 ${
                    activeCategory === category.id
                      ? 'bg-slate-900 text-white shadow-xl scale-105'
                      : 'text-slate-500 hover:text-slate-900 hover:bg-white'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </motion.div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link to={`/projects/${project.id}`}>
                  <div className="premium-card h-full bg-white">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                        <span className="px-4 py-1.5 bg-gold text-white rounded-full text-[10px] font-black uppercase tracking-widest">
                          {project.categoryName}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-8">
                      <h3 className="text-2xl font-black mb-4 text-slate-900 tracking-tight group-hover:text-gold transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-slate-500 text-sm font-light leading-relaxed mb-8 line-clamp-3">
                        {project.description}
                      </p>
                      <div className="flex items-center gap-2 text-gold font-black text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
                        {t('projects.viewDetails')} <ArrowRight size={16} />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-32"
            >
              <h3 className="text-3xl font-black text-slate-900 mb-4">{t('projects.noResults')}</h3>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setActiveCategory('todos');
                }}
                className="text-gold font-black uppercase tracking-widest border-b-2 border-gold/20 hover:border-gold transition-all"
              >
                {t('projects.clearFilters')}
              </button>
            </motion.div>
          )}

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mt-32 p-16 bg-slate-50 rounded-[3rem] border border-slate-100 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
            <h2 className="text-4xl md:text-6xl font-black mb-8 text-slate-900 tracking-tighter relative z-10">
              {t('projects.projectIdea')}
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto mb-10 font-light relative z-10">
              {t('projects.projectDesc')}
            </p>
            <Link to="/contact" className="btn btn-primary relative z-10">
              {t('home.contactMe')}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;