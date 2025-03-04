import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Target, Eye, Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SectionTitle from '../components/SectionTitle';
import AnimatedText from '../components/AnimatedText';
import CVDownloadButton from '../components/CVDownloadButton';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-50 to-slate-100 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              {t('about.title')}
            </motion.h1>
            <AnimatedText
              text={t('about.subtitle')}
              className="text-xl text-slate-600 mb-8"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <SectionTitle title={t('about.name')} />
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="prose prose-lg max-w-none text-slate-600"
              >
                <p>
                  {t('about.bio1')}
                </p>
                <p>
                  {t('about.bio2')}
                </p>
                <p>
                  {t('about.bio3')}
                </p>
                <p>
                  {t('about.bio4')}
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="mt-8 flex flex-wrap gap-4"
              >
                <CVDownloadButton className="btn bg-blue-600 text-white hover:bg-blue-700" />
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-xl overflow-hidden shadow-xl h-[500px]">
                <img
                  src="https://media.licdn.com/dms/image/v2/D4E03AQGz9Hn9h2qPrA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1694973929346?e=1746662400&v=beta&t=rWPTpX0hd9tBxU2lxPEeHNZk-MitLkGAcxJvBWnwCe8"
                  alt="Kevin Naranjo"
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title={t('about.career')}
            subtitle={t('about.careerSubtitle')}
            center={true}
          />
          
          <div className="max-w-3xl mx-auto mt-12">
            {/* Timeline Item 1 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative pl-8 pb-12 border-l-2 border-blue-500"
            >
              <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-blue-500"></div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-blue-600 mb-1">{t('about.job1Title')}</h3>
                <p className="text-slate-500 mb-4">{t('about.job1Date')}</p>
                <p className="text-slate-600">
                  {t('about.job1Desc')}
                </p>
              </div>
            </motion.div>
            
            {/* Timeline Item 2 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative pl-8 pb-12 border-l-2 border-blue-500"
            >
              <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-blue-500"></div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-blue-600 mb-1">{t('about.job2Title')}</h3>
                <p className="text-slate-500 mb-4">{t('about.job2Date')}</p>
                <p className="text-slate-600">
                  {t('about.job2Desc')}
                </p>
              </div>
            </motion.div>
            
            {/* Timeline Item 3 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative pl-8 border-l-2 border-blue-500"
            >
              <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-blue-500"></div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-blue-600 mb-1">{t('about.job3Title')}</h3>
                <p className="text-slate-500 mb-4">{t('about.job3Date')}</p>
                <p className="text-slate-600">
                  {t('about.job3Desc')}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-md border-t-4 border-blue-500"
            >
              <div className="mb-4 text-blue-600">
                <Target size={36} />
              </div>
              <h3 className="text-xl font-bold mb-4">{t('about.mission')}</h3>
              <p className="text-slate-600">
                {t('about.missionDesc')}
              </p>
            </motion.div>
            
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-md border-t-4 border-purple-500"
            >
              <div className="mb-4 text-purple-600">
                <Eye size={36} />
              </div>
              <h3 className="text-xl font-bold mb-4">{t('about.vision')}</h3>
              <p className="text-slate-600">
                {t('about.visionDesc')}
              </p>
            </motion.div>
            
            {/* Values */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-md border-t-4 border-emerald-500"
            >
              <div className="mb-4 text-emerald-600">
                <Heart size={36} />
              </div>
              <h3 className="text-xl font-bold mb-4">{t('about.values')}</h3>
              <p className="text-slate-600">
                {t('about.valuesDesc')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-violet-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-6"
          >
            {t('about.projectsQuestion')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
          >
            {t('about.projectsDesc')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link
              to="/projects"
              className="btn bg-white text-blue-600 hover:bg-blue-50"
            >
              {t('home.viewProjects')}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;