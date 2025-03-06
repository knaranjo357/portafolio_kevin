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
  Globe, 
  Cpu, 
  BarChart, 
  Terminal,
  Layers,
  Cloud,
  GitBranch,
  Figma,
  LineChart,
  Smartphone,
  Zap
} from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import AnimatedText from '../components/AnimatedText';
import BackgroundParticles from '../components/BackgroundParticles';
import GeometricShapes from '../components/GeometricShapes';

interface SkillItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
  color?: string;
}

const SkillItem: React.FC<SkillItemProps> = ({ 
  icon, 
  title, 
  description, 
  delay = 0,
  color = 'bg-blue-500' 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 premium-gradient-border"
    >
      <div className={`w-16 h-16 ${color} text-white rounded-full flex items-center justify-center mb-4`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-center">{title}</h3>
      <p className="text-slate-600 text-center text-sm">{description}</p>
    </motion.div>
  );
};

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
          icon: <LineChart size={28} />,
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
    <div className="pt-16 relative overflow-hidden">
      <BackgroundParticles />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-50 to-slate-100 py-20 relative overflow-hidden">
        <GeometricShapes />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-6 text-gradient"
            >
              {t('skills.title')}
            </motion.h1>
            <AnimatedText
              text={t('skills.subtitle')}
              className="text-xl text-slate-600 mb-8"
            />
          </div>
        </div>
        
        {/* Floating elements */}
        <motion.div
          className="absolute top-20 left-10 hidden lg:block"
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-16 h-16 bg-blue-500/20 backdrop-blur-sm rounded-2xl" />
        </motion.div>
        
        <motion.div
          className="absolute bottom-10 right-20 hidden lg:block"
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          <div className="w-20 h-20 bg-purple-500/20 backdrop-blur-sm rounded-full" />
        </motion.div>
      </section>

      {/* Skills Grid Section */}
      {skillCategories.map((category, categoryIndex) => (
        <section key={category.title} className={`py-16 ${categoryIndex % 2 === 0 ? 'bg-white' : 'bg-slate-50'} relative`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle
              title={category.title}
              subtitle={t('skills.techSubtitle')}
              center={true}
            />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {category.skills.map((skill, index) => (
                <SkillItem
                  key={skill.title}
                  icon={skill.icon}
                  title={skill.title}
                  description={skill.description}
                  delay={index * 0.1}
                  color={skill.color}
                />
              ))}
            </div>
          </div>
          
          {/* Decorative elements */}
          {categoryIndex % 2 === 0 && (
            <>
              <motion.div 
                className="absolute -left-16 top-1/3 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl hidden lg:block"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="absolute -right-16 bottom-1/4 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl hidden lg:block"
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 0.7, 0.5]
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </>
          )}
        </section>
      ))}

      {/* Tools Section */}
      <section className="py-16 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title={t('skills.technologies')}
            subtitle={t('skills.techSubtitle')}
            center={true}
          />
          
          <div className="flex flex-wrap justify-center gap-3 mt-12">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full shadow-sm premium-gradient-border"
              >
                <span className="text-blue-600">{tool.icon}</span>
                <span className="font-medium">{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Decorative elements */}
        <motion.div 
          className="absolute right-10 top-20 w-24 h-24 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl hidden lg:block"
          animate={{ 
            y: [0, -20, 0],
            x: [0, 10, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </section>

      {/* Experience Highlights */}
      <section className="py-16 bg-slate-50 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title={t('skills.experience')}
            subtitle={t('skills.expSubtitle')}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-md premium-card"
            >
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                <Brain size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4">{t('skills.aiExp')}</h3>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  {t('skills.aiExp1')}
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  {t('skills.aiExp2')}
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  {t('skills.aiExp3')}
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-md premium-card"
            >
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-4">
                <Code size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4">{t('skills.softwareExp')}</h3>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">✓</span>
                  {t('skills.softwareExp1')}
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">✓</span>
                  {t('skills.softwareExp2')}
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">✓</span>
                  {t('skills.softwareExp3')}
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-md premium-card"
            >
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4">{t('skills.leadershipExp')}</h3>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">✓</span>
                  {t('skills.leadershipExp1')}
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">✓</span>
                  {t('skills.leadershipExp2')}
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">✓</span>
                  {t('skills.leadershipExp3')}
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <motion.div 
          className="absolute left-0 bottom-0 w-full h-40 bg-gradient-to-t from-slate-100/50 to-transparent hidden lg:block"
        />
        <motion.div 
          className="absolute left-10 bottom-20 w-20 h-20 bg-blue-500/10 rounded-full blur-xl hidden lg:block"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
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
            {t('skills.skillsAction')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
          >
            {t('skills.skillsActionDesc')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link
              to="/projects"
              className="btn bg-white text-blue-600 hover:bg-blue-50 premium-button"
            >
              {t('home.viewProjects')}
            </Link>
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

export default Skills;