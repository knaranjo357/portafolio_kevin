import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Target, Eye, Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SectionTitle from '../components/SectionTitle';
import CVDownloadButton from '../components/CVDownloadButton';
import GeometricShapes from '../components/GeometricShapes';
import ExperienceCounter from '../components/ExperienceCounter';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-16 mesh-gradient min-h-screen">
      <GeometricShapes />
      
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-7xl font-black mb-6 text-slate-900 tracking-tighter">
              {t('about.architect').split(' ').map((word, i) => (
                <span key={i} className={word.toLowerCase().includes('architect') ? 'text-gold italic' : ''}>
                  {word}{' '}
                </span>
              ))}
            </h1>
            <p className="text-slate-500 text-xl md:text-2xl max-w-2xl mx-auto font-light leading-relaxed">
              {t('about.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <SectionTitle title={t('about.name')} />
              
              <div className="space-y-6 text-slate-600 text-lg font-light leading-relaxed">
                <p>{t('about.bio1')}</p>
                <p>{t('about.bio2')}</p>
                <p>{t('about.bio3')}</p>
                <p className="text-slate-900 font-bold italic">{t('about.bio4')}</p>
              </div>
              
              <div className="mt-12 flex flex-wrap gap-6">
                <CVDownloadButton className="btn btn-primary" />
                <Link to="/contact" className="btn btn-outline border-slate-200 text-slate-900">
                  {t('home.contactMe')}
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl h-[600px] border-slate-100 group p-1 bg-white">
                <div className="w-full h-full rounded-[1.9rem] overflow-hidden relative">
                  <img
                    src="https://media.licdn.com/dms/image/v2/D4E03AQGz9Hn9h2qPrA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1694973929346?e=1746662400&v=beta&t=rWPTpX0hd9tBxU2lxPEeHNZk-MitLkGAcxJvBWnwCe8"
                    alt="Kevin Naranjo"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60"></div>
                </div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="absolute -bottom-10 -left-10 bg-white backdrop-blur-3xl p-8 rounded-2xl shadow-2xl border border-slate-100"
              >
                <ExperienceCounter className="text-4xl font-black text-gold mb-1" />
                <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">{t('about.experience')}</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-32 relative bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title={t('about.career')}
            subtitle={t('about.careerSubtitle')}
            center={true}
          />
          
          <div className="max-w-4xl mx-auto mt-20 space-y-12">
            {[
              { title: t('about.job1Title'), date: t('about.job1Date'), desc: t('about.job1Desc') },
              { title: t('about.job2Title'), date: t('about.job2Date'), desc: t('about.job2Desc') },
              { title: t('about.job3Title'), date: t('about.job3Date'), desc: t('about.job3Desc') }
            ].map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="premium-card p-10 flex flex-col md:flex-row gap-8 items-start bg-white"
              >
                <div className="md:w-1/4">
                  <p className="text-gold font-black text-xs uppercase tracking-widest mb-2">{job.date}</p>
                  <div className="h-1 w-12 bg-gold/30 rounded-full"></div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">{job.title}</h3>
                  <p className="text-slate-500 font-light leading-relaxed">{job.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: t('about.mission'), icon: <Target size={36} />, desc: t('about.missionDesc') },
              { title: t('about.vision'), icon: <Eye size={36} />, desc: t('about.visionDesc') },
              { title: t('about.values'), icon: <Heart size={36} />, desc: t('about.valuesDesc') }
            ].map((box, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="premium-card p-10 text-center group bg-white"
              >
                <div className="w-20 h-20 bg-slate-50 border border-slate-100 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-500">
                  <div className="text-gold">{box.icon}</div>
                </div>
                <h3 className="text-2xl font-black mb-4 text-slate-900 tracking-tight uppercase">{box.title}</h3>
                <p className="text-slate-500 font-light leading-relaxed">{box.desc}</p>
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
              {t('projects.projectIdea')}
            </h2>
            <Link
              to="/projects"
              className="btn btn-primary"
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