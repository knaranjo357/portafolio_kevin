import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Brain, Monitor } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import AnimatedText from '../components/AnimatedText';
import SectionTitle from '../components/SectionTitle';
import SkillCard from '../components/SkillCard';
import CVDownloadButton from '../components/CVDownloadButton';

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center bg-gradient-to-b from-slate-50 to-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.span
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6"
              >
                Software Developer & AI Expert
              </motion.span>
              <AnimatedText
                text={t('home.title')}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              />
              <AnimatedText
                text={t('home.subtitle')}
                className="text-xl md:text-2xl text-slate-600 mb-8"
                once={false}
              />
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-slate-600 mb-8 text-lg"
              >
                {t('home.description')}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="flex flex-wrap gap-4"
              >
                <Link to="/contact" className="btn btn-primary">
                  {t('home.contactMe')}
                </Link>
                <Link to="/projects" className="btn btn-outline">
                  {t('home.viewProjects')}
                </Link>
                <CVDownloadButton className="btn bg-slate-800 text-white hover:bg-slate-900" />
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://media.licdn.com/dms/image/v2/D4E03AQGz9Hn9h2qPrA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1694973929346?e=1746662400&v=beta&t=rWPTpX0hd9tBxU2lxPEeHNZk-MitLkGAcxJvBWnwCe8"
                  alt="Kevin Naranjo"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="text-white text-xl font-semibold">Kevin Alejandro Naranjo Reyes</p>
                  <p className="text-slate-200">4 Años de Experiencia</p>
                </div>
              </div>
              
              {/* Floating elements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="absolute -top-6 -left-6 bg-white p-4 rounded-lg shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                }}
              >
                <Code size={24} className="text-blue-600" />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg"
                animate={{ y: [0, 10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  delay: 1,
                }}
              >
                <Brain size={24} className="text-purple-600" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title={t('home.aboutTitle')}
            subtitle={t('about.subtitle')}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <p className="text-slate-600 mb-6">
                {t('home.aboutDescription1')}
              </p>
              <p className="text-slate-600 mb-8">
                {t('home.aboutDescription2')}
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/about"
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
                >
                  {t('home.learnMore')} <ArrowRight size={16} className="ml-2" />
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-1 md:order-2"
            >
              <div className="relative">
                <div className="relative rounded-xl overflow-hidden shadow-xl h-[400px]">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="Kevin trabajando"
                    className="w-full h-full object-cover"
                  />
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg"
                >
                  <p className="text-blue-600 font-bold text-4xl">4+</p>
                  <p className="text-slate-600">{t('about.experience')}</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section Preview */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title={t('home.skillsTitle')}
            subtitle={t('home.skillsSubtitle')}
            center={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <SkillCard
              title={t('home.softwareDev')}
              description={t('home.softwareDesc')}
              icon={<Code size={36} />}
              delay={0.1}
            />
            <SkillCard
              title={t('home.machineLearning')}
              description={t('home.mlDesc')}
              icon={<Brain size={36} />}
              delay={0.2}
              color="border-purple-500"
            />
            <SkillCard
              title={t('home.computerVision')}
              description={t('home.cvDesc')}
              icon={<Monitor size={36} />}
              delay={0.3}
              color="border-emerald-500"
            />
            <SkillCard
              title={t('home.webDev')}
              description={t('home.webDevDesc')}
              icon={<Code size={36} />}
              delay={0.4}
              color="border-amber-500"
            />
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/skills" className="btn btn-primary">
              {t('home.exploreSkills')}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-violet-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            {t('home.readyToWork')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
          >
            {t('home.contactDesc')}
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
              className="btn bg-white text-blue-600 hover:bg-blue-50"
            >
              {t('home.contactMe')}
            </Link>
            <a
              href="https://wa.me/573175816061"
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-green-500 text-white hover:bg-green-600"
            >
              {t('home.whatsapp')}
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;