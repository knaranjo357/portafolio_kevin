import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  Code, 
  Brain, 
  Eye, 
  Database, 
  Server, 
  Terminal,
  Layers,
  Cloud,
  GitBranch,
  BarChart,
  Smartphone,
  Zap
} from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import BackgroundParticles from '../components/BackgroundParticles';
import GeometricShapes from '../components/GeometricShapes';

const Skills: React.FC = () => {
  const { t } = useTranslation();

  const skillCategories = [
    {
      title: t('skills.development'),
      skills: [
        {
          icon: <Code size={28} />,
          title: t('skills.frontend'),
          description: t('skills.frontendDesc'),
          color: "bg-blue-500"
        },
        {
          icon: <Server size={28} />,
          title: t('skills.backend'),
          description: t('skills.backendDesc'),
          color: "bg-indigo-500"
        },
        {
          icon: <Database size={28} />,
          title: t('skills.databases'),
          description: t('skills.databasesDesc'),
          color: "bg-emerald-500"
        },
        {
          icon: <Smartphone size={28} />,
          title: t('skills.mobile'),
          description: t('skills.mobileDesc'),
          color: "bg-purple-500"
        }
      ]
    },
    {
      title: t('skills.ai'),
      skills: [
        {
          icon: <Brain size={28} />,
          title: t('skills.machineLearning'),
          description: t('skills.mlDesc'),
          color: "bg-rose-500"
        },
        {
          icon: <Eye size={28} />,
          title: t('skills.computerVision'),
          description: t('skills.cvDesc'),
          color: "bg-amber-500"
        },
        {
          icon: <BarChart size={28} />,
          title: t('skills.dataScience'),
          description: t('skills.dsDesc'),
          color: "bg-cyan-500"
        },
        {
          icon: <Zap size={28} />,
          title: t('skills.deepLearning'),
          description: t('skills.dlDesc'),
          color: "bg-red-500"
        }
      ]
    },
    {
      title: t('skills.devops'),
      skills: [
        {
          icon: <Cloud size={28} />,
          title: t('skills.cloud'),
          description: t('skills.cloudDesc'),
          color: "bg-sky-500"
        },
        {
          icon: <GitBranch size={28} />,
          title: t('skills.versionControl'),
          description: t('skills.vcDesc'),
          color: "bg-orange-500"
        },
        {
          icon: <Layers size={28} />,
          title: t('skills.containers'),
          description: t('skills.containersDesc'),
          color: "bg-teal-500"
        },
        {
          icon: <Terminal size={28} />,
          title: t('skills.tools'),
          description: t('skills.toolsDesc'),
          color: "bg-gray-700"
        }
      ]
    }
  ];

  const tools = [
    { name: "Python", icon: <Terminal size={20} /> },
    { name: "JavaScript", icon: <Code size={20} /> },
    { name: "React", icon: <Code size={20} /> },
    { name: "TensorFlow", icon: <Brain size={20} /> },
    { name: "PyTorch", icon: <Brain size={20} /> },
    { name: "Node.js", icon: <Server size={20} /> },
    { name: "SQL", icon: <Database size={20} /> },
    { name: "Docker", icon: <Layers size={20} /> },
    { name: "AWS", icon: <Cloud size={20} /> },
    { name: "Git", icon: <GitBranch size={20} /> },
    { name: "OpenCV", icon: <Eye size={20} /> },
    { name: "Pandas", icon: <BarChart size={20} /> },
  ];

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
              {t('skills.expertToolset').split(' ').map((word, i) => (
                <span key={i} className={word.toLowerCase().includes('tool') ? 'text-gold italic' : ''}>
                  {word}{' '}
                </span>
              ))}
            </h1>
            <p className="text-slate-500 text-xl md:text-2xl max-w-2xl mx-auto font-light leading-relaxed">
              {t('skills.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Grid Section */}
      {skillCategories.map((category, categoryIndex) => (
        <section key={category.title} className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter flex items-center gap-6">
                <span className="text-gold">0{categoryIndex + 1}.</span>
                {category.title}
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-gold to-transparent mt-4"></div>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {category.skills.map((skill, index) => (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="premium-card p-8 group bg-white"
                >
                  <div className="w-16 h-16 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gold group-hover:text-white transition-all duration-500 shadow-xl group-hover:shadow-gold/20">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-black mb-4 text-slate-900 tracking-tight">{skill.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-light">{skill.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Tools Section */}
      <section className="py-32 relative bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 tracking-tighter mb-4">{t('skills.technologies')}</h2>
            <div className="w-24 h-1 bg-gold mx-auto rounded-full"></div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="flex items-center gap-3 px-6 py-3 bg-white border border-slate-100 rounded-full hover:border-gold/50 hover:bg-gold/5 transition-all duration-300 shadow-sm"
              >
                <span className="text-gold">{tool.icon}</span>
                <span className="text-slate-600 font-bold text-xs uppercase tracking-widest">{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Highlights */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title={t('skills.experience')}
            subtitle={t('skills.expSubtitle')}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              { title: t('skills.aiExp'), icon: <Brain size={28} />, items: [t('skills.aiExp1'), t('skills.aiExp2'), t('skills.aiExp3')] },
              { title: t('skills.softwareExp'), icon: <Code size={28} />, items: [t('skills.softwareExp1'), t('skills.softwareExp2'), t('skills.softwareExp3')] },
              { title: t('skills.leadershipExp'), icon: <Zap size={28} />, items: [t('skills.leadershipExp1'), t('skills.leadershipExp2'), t('skills.leadershipExp3')] }
            ].map((box, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="premium-card p-10 group bg-white"
              >
                <div className="w-14 h-14 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  <div className="text-gold">{box.icon}</div>
                </div>
                <h3 className="text-2xl font-black mb-6 text-slate-900 tracking-tight">{box.title}</h3>
                <ul className="space-y-4">
                  {box.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-500 text-sm font-light leading-relaxed">
                      <span className="text-gold mt-1">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-8 text-slate-900 tracking-tighter">
              {t('home.readyToBuild')}
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/projects" className="btn btn-primary">
                {t('home.viewProjects')}
              </Link>
              <Link to="/contact" className="btn btn-outline border-slate-200 text-slate-900 hover:border-gold hover:text-white transition-all duration-500">
                {t('home.contactMe')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Skills;