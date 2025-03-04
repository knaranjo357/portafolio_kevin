import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Search, ArrowRight } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import AnimatedText from '../components/AnimatedText';
import BackgroundParticles from '../components/BackgroundParticles';

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('todos');

  const projects = [
    {
      id: 1,
      title: 'Datalogger con Plataforma de Configuración',
      description: 'Diseñé y desarrollé una herramienta de configuración frontend y backend para dispositivos de adquisición de datos ambientales, mejorando la usabilidad y monitoreo de datos.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'desarrollo web',
    },
    {
      id: 2,
      title: 'Cámara Adaptable para Conteo Vehicular',
      description: 'Desarrollé una solución de visión por computador para detección de vehículos y personas, implementada para la CAR Bogotá para correlacionar datos de tráfico con métricas de calidad del aire.',
      image: 'https://images.unsplash.com/photo-1566618501422-e11289d1bf4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'visión por computadora',
    },
    {
      id: 3,
      title: 'Pronóstico de Variables Ambientales',
      description: 'Implementé modelos de machine learning y deep learning (LSTM) para predicciones precisas de calidad del aire, generando escenarios predictivos para la toma de decisiones.',
      image: 'https://images.unsplash.com/photo-1576400883215-7083980b6193?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'machine learning',
    },
    {
      id: 4,
      title: 'Clasificación de Fraudes Eléctricos',
      description: 'Desarrollé un programa para ENEL Perú que incrementó la detección de fraudes eléctricos en un 150%, optimizando la recuperación de energía.',
      image: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'machine learning',
    },
    {
      id: 5,
      title: 'Automatización de Reportes Periódicos',
      description: 'Automatización de procesos de reporte periódico, reduciendo el tiempo de generación de reportes diarios de 3 horas a unos pocos minutos, aumentando significativamente la eficiencia del equipo.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'automatización',
    },
    {
      id: 6,
      title: 'Consultoría Personalizada en IA para Empresas',
      description: 'Consultoría personalizada de inteligencia artificial para empresas como Antamina, asesorando en la implementación de herramientas de IA para agregar valor a sus datos e infraestructura.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'consultoría',
    },
  ];

  const categories = [
    { id: 'todos', name: t('projects.all') },
    { id: 'desarrollo web', name: t('projects.webDev') },
    { id: 'machine learning', name: t('projects.machineLearning') },
    { id: 'visión por computadora', name: t('projects.computerVision') },
    { id: 'automatización', name: t('projects.automation') },
    { id: 'consultoría', name: t('projects.consulting') },
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
    <div className="pt-16 relative overflow-hidden">
      <BackgroundParticles />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-50 to-slate-100 py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-6 text-gradient"
            >
              {t('projects.title')}
            </motion.h1>
            <AnimatedText
              text={t('projects.subtitle')}
              className="text-xl text-slate-600 mb-8"
            />
          </div>
        </div>
        
        {/* Decorative elements */}
        <motion.div 
          className="absolute -left-20 top-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl hidden lg:block"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute -right-20 bottom-0 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl hidden lg:block"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-6 mb-12 justify-between items-center">
            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full md:w-1/2"
            >
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search size={20} className="text-slate-400" />
                </div>
                <input
                  type="text"
                  placeholder={t('projects.search')}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent premium-input"
                />
              </div>
            </motion.div>

            {/* Category Filters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-wrap gap-2 justify-center"
            >
              {categories.map((category, index) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </motion.div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 premium-card"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                      {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-slate-600 mb-4 line-clamp-3">{project.description}</p>
                  <Link
                    to={`/projects/${project.id}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors font-medium"
                  >
                    {t('projects.viewDetails')} <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No Results Message */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-xl text-slate-600">
                {t('projects.noResults')}
              </p>
            </motion.div>
          )}
        </div>
        
        {/* Decorative elements */}
        <motion.div 
          className="absolute right-0 top-1/4 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl hidden lg:block"
          animate={{ 
            y: [0, -30, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute left-0 bottom-1/3 w-40 h-40 bg-purple-500/5 rounded-full blur-2xl hidden lg:block"
          animate={{ 
            y: [0, 30, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-violet-600 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-6"
          >
            {t('projects.projectIdea')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
          >
            {t('projects.projectDesc')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link
              to="/contact"
              className="btn bg-white text-blue-600 hover:bg-blue-50 premium-button"
            >
              {t('home.contactMe')}
            </Link>
            <a
              href="https://wa.me/573175816061"
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-green-500 text-white hover:bg-green-600 premium-button"
            >
              {t('home.whatsapp')}
            </a>
          </motion.div>
        </div>
        
        {/* Decorative elements */}
        <motion.div 
          className="absolute -right-20 -top-20 w-80 h-80 bg-blue-500/30 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute -left-20 -bottom-20 w-80 h-80 bg-violet-500/30 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </section>
    </div>
  );
};

export default Projects;