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
  Zap,
  Globe,
  Cpu,
  Shield,
  Activity,
  ArrowRight,
  Rocket
} from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import BackgroundParticles from '../components/BackgroundParticles';
import GeometricShapes from '../components/GeometricShapes';
import AnimatedText from '../components/AnimatedText';
import SkillCard from '../components/SkillCard';

const Skills: React.FC = () => {
  const { t } = useTranslation();

  const skillCategories = [
    {
      title: t('skills.development'),
      icon: <Cpu size={32} />,
      skills: [
        {
          icon: <Code size={32} />,
          title: t('skills.frontend'),
          description: t('skills.frontendDesc'),
        },
        {
          icon: <Server size={32} />,
          title: t('skills.backend'),
          description: t('skills.backendDesc'),
        },
        {
          icon: <Database size={32} />,
          title: t('skills.databases'),
          description: t('skills.databasesDesc'),
        },
        {
          icon: <Smartphone size={32} />,
          title: t('skills.mobile'),
          description: t('skills.mobileDesc'),
        }
      ]
    },
    {
      title: t('skills.ai'),
      icon: <Brain size={32} />,
      skills: [
        {
          icon: <Activity size={32} />,
          title: t('skills.machineLearning'),
          description: t('skills.mlDesc'),
        },
        {
          icon: <Eye size={32} />,
          title: t('skills.computerVision'),
          description: t('skills.cvDesc'),
        },
        {
          icon: <BarChart size={32} />,
          title: t('skills.dataScience'),
          description: t('skills.dsDesc'),
        },
        {
          icon: <Zap size={32} />,
          title: t('skills.deepLearning'),
          description: t('skills.dlDesc'),
        }
      ]
    },
    {
      title: t('skills.devops'),
      icon: <Cloud size={32} />,
      skills: [
        {
          icon: <Globe size={32} />,
          title: t('skills.cloud'),
          description: t('skills.cloudDesc'),
        },
        {
          icon: <GitBranch size={32} />,
          title: t('skills.versionControl'),
          description: t('skills.vcDesc'),
        },
        {
          icon: <Layers size={32} />,
          title: t('skills.containers'),
          description: t('skills.containersDesc'),
        },
        {
          icon: <Terminal size={32} />,
          title: t('skills.tools'),
          description: t('skills.toolsDesc'),
        }
      ]
    }
  ];

  const tools = [
    { name: "Python", icon: <Terminal size={20} />, level: "95%" },
    { name: "JavaScript", icon: <Code size={20} />, level: "98%" },
    { name: "React", icon: <Code size={20} />, level: "96%" },
    { name: "TensorFlow", icon: <Brain size={20} />, level: "90%" },
    { name: "PyTorch", icon: <Brain size={20} />, level: "88%" },
    { name: "Node.js", icon: <Server size={20} />, level: "94%" },
    { name: "SQL", icon: <Database size={20} />, level: "92%" },
    { name: "Docker", icon: <Layers size={20} />, level: "85%" },
    { name: "AWS", icon: <Cloud size={20} />, level: "88%" },
    { name: "Git", icon: <GitBranch size={20} />, level: "95%" },
    { name: "OpenCV", icon: <Eye size={20} />, level: "92%" },
    { name: "Pandas", icon: <BarChart size={20} />, level: "94%" },
  ];

  return (
    <div className="mesh-gradient min-h-screen selection:bg-gold/30 selection:text-slate-900">
      <BackgroundParticles />
      
      {/* Hero Section - The Arsenal */}
      <section className="min-h-[60vh] flex items-center relative overflow-hidden pt-20">
        <GeometricShapes />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 text-slate-900 tracking-tighter leading-none">
              <AnimatedText text={t('skills.expertToolset').split(' ').slice(0, 1).join(' ')} className="inline-block" />
              <span className="text-gold italic text-glow-gold drop-shadow-2xl">
                {t('skills.expertToolset').split(' ').slice(1).join(' ')}
              </span>
            </h1>
            <p className="text-slate-500 text-xl md:text-3xl max-w-3xl mx-auto font-light leading-relaxed mt-10">
              {t('skills.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Categories Grid */}
      {skillCategories.map((category, categoryIndex) => (
        <section key={category.title} className="py-32 relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-20 flex items-center gap-8"
            >
              <div className="flex flex-col">
                <span className="text-gold font-black text-2xl mb-2 tracking-widest">0{categoryIndex + 1}.</span>
                <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase leading-none">
                  {category.title}
                </h2>
                <div className="h-2 w-full bg-gradient-to-r from-gold via-gold-light to-transparent mt-6 rounded-full opacity-60"></div>
              </div>
              <div className="hidden md:block p-6 glass-card border-gold/20 text-gold rotate-12">
                {category.icon}
              </div>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {category.skills.map((skill, index) => (
                <SkillCard
                  key={skill.title}
                  icon={skill.icon}
                  title={skill.title}
                  description={skill.description}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Tech Stack - Premium Bento Grid Style */}
      <section className="py-40 relative bg-slate-900 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-gold/20 rounded-full blur-[150px] -translate-y-1/2"></div>
          <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] -translate-y-1/2"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase mb-6">
              {t('skills.technologies').split(' ').map((word, i) => (
                <span key={i} className={i === 1 ? 'text-gold' : ''}>{word} </span>
              ))}
            </h2>
            <div className="w-40 h-2 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto rounded-full mt-8 opacity-40"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass-card-dark p-8 group border-white/5 hover:border-gold/30 transition-all duration-500"
              >
                <div className="flex flex-col gap-6">
                  <div className="flex items-center justify-between">
                    <div className="text-gold group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
                      {tool.icon}
                    </div>
                    <span className="text-white/20 text-xs font-black uppercase tracking-[0.2em]">{tool.level}</span>
                  </div>
                  <div>
                    <h4 className="text-white font-black uppercase tracking-[0.2em] text-sm mb-4">{tool.name}</h4>
                    {/* Tiny progress bar */}
                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: tool.level }}
                        transition={{ duration: 1.5, delay: 0.5, ease: "circOut" }}
                        className="h-full bg-gold shadow-[0_0_10px_rgba(212,175,55,0.5)]"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Highlights - Mastery Cards */}
      <section className="py-40 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title={t('skills.experience')}
            subtitle={t('skills.expSubtitle')}
            center={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20">
            {[
              { title: t('skills.aiExp'), icon: <Brain size={48} />, items: [t('skills.aiExp1'), t('skills.aiExp2'), t('skills.aiExp3')] },
              { title: t('skills.softwareExp'), icon: <Code size={48} />, items: [t('skills.softwareExp1'), t('skills.softwareExp2'), t('skills.softwareExp3')] },
              { title: t('skills.leadershipExp'), icon: <Zap size={48} />, items: [t('skills.leadershipExp1'), t('skills.leadershipExp2'), t('skills.leadershipExp3')] }
            ].map((box, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="premium-card p-12 group bg-white relative overflow-hidden"
              >
                <div className="absolute -left-16 -bottom-16 w-32 h-32 bg-gold/5 rounded-full blur-3xl group-hover:bg-gold/10 transition-colors"></div>
                
                <div className="w-20 h-20 bg-slate-50 border border-slate-100 rounded-3xl flex items-center justify-center mb-10 group-hover:bg-slate-900 group-hover:text-gold transition-all duration-700 shadow-sm group-hover:shadow-2xl">
                  {box.icon}
                </div>
                <h3 className="text-3xl font-black mb-10 text-slate-900 tracking-tight leading-tight">{box.title}</h3>
                <ul className="space-y-6">
                  {box.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4 text-slate-500 text-lg font-light leading-relaxed text-justify">
                      <div className="mt-2 w-2 h-2 rounded-full bg-gold shadow-[0_0_10px_rgba(212,175,55,0.5)] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Dark Theme */}
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
              {t('home.readyToBuild').split('?')[0]}<span className="text-gold">?</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-8">
              <Link to="/projects" className="btn bg-gold text-white hover:bg-white hover:text-slate-900 px-16 py-6 shadow-2xl shadow-gold/20 group text-xl">
                <span className="flex items-center gap-4 font-black uppercase tracking-widest">
                  {t('home.viewProjects')} <Rocket size={24} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link to="/contact" className="btn btn-outline border-white/20 text-white hover:bg-white hover:text-slate-900 px-16 py-6 group text-xl">
                <span className="flex items-center gap-4 font-black uppercase tracking-widest">
                  {t('home.contactMe')} <ArrowRight size={24} className="group-hover:translate-x-3 transition-transform" />
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Skills;